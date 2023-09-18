using System;
using System.Security.Cryptography;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;
using Microsoft.VisualBasic;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface ISimulatorCommonRoutines
{
    List<(double value, DateTime date)> CalculTauxIF(double coupon, DateTime dateValeur, DateTime dateEcheance, double valeurNominale, InvestmentPeriodicityType periodicite, int dureeEnAnnees, double px);
    List<(double value, DateTime date)> CalculTauxAC(double coupon, DateTime dateValeur, DateTime dateEcheance, double valeurNominale, InvestmentPeriodicityType periodicite, double dureeEnAnnees, double px);
    List<(double value, DateTime date)> CalculTauxACD(DateTime dateEcheance, DateTime dateValeur, int dureeEnAnnees, double valeurNominale, int px, double coupon, InvestmentPeriodicityType periodicite, int differe);
}

public class SimulatorCommonRoutines : ISimulatorCommonRoutines
{
    public List<(double value, DateTime date)> CalculTauxIF(double coupon, DateTime dateValeur, DateTime dateEcheance, double valeurNominale, InvestmentPeriodicityType periodicite, int dureeEnAnnees, double px)
    {
        var echeancier = new List<(double value, DateTime date)> { (-px, dateValeur) };
        var duree = dureeEnAnnees;
        var valeurNominaleDouble = valeurNominale;

        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };

        duree *= factor;

        (double value, DateTime date) echeance(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => (valeurNominaleDouble * coupon, dateEcheance.AddYears(-(duree - iteration))),
            InvestmentPeriodicityType.S => (valeurNominaleDouble / factor * coupon, DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration + 1) * 6) + 6, dateEcheance.Day)),
            InvestmentPeriodicityType.T => (valeurNominaleDouble / factor * coupon, DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration + 1) * 3) + 3, dateEcheance.Day)),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        DateTime lastEcheanceCouranteDate = default;
        for (int annee = 1; annee <= duree + 1; annee++)
        {
            var echeanceCourante = echeance(annee);
            lastEcheanceCouranteDate = (annee != duree + 1) ? echeanceCourante.date : lastEcheanceCouranteDate;
            if (dateValeur < echeanceCourante.date)
            {
                echeancier.Add(annee != duree + 1 ? echeanceCourante : (valeurNominaleDouble * 100, lastEcheanceCouranteDate));
            }
        }

        return echeancier;
    }



    public List<(double value, DateTime date)> CalculTauxACD(DateTime dateEcheance, DateTime dateValeur, int dureeEnAnnees, double valeurNominale, int px, double coupon, InvestmentPeriodicityType periodicite, int differe)
    {
        var echeancier = new List<(double value, DateTime date)> { (-px, dateValeur) };
        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };

        dureeEnAnnees *= factor;
        differe *= factor;

        DateTime echeance(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-(dureeEnAnnees - iteration)),
            InvestmentPeriodicityType.S => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((dureeEnAnnees - iteration + 1) * 6) + 6, dateEcheance.Day),
            InvestmentPeriodicityType.T => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((dureeEnAnnees - iteration + 1) * 3) + 3, dateEcheance.Day),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        var echeance2 = (int iteration) => {
            var iteration2 = iteration + differe + 1;
            return periodicite switch
            {
                InvestmentPeriodicityType.A => dateEcheance.AddYears(-(dureeEnAnnees * 2 - dureeEnAnnees - iteration - differe - 1)),
                InvestmentPeriodicityType.S => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((dureeEnAnnees - iteration2 + 1) * 6) + 6, dateEcheance.Day),
                InvestmentPeriodicityType.T => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((dureeEnAnnees - iteration2 + 1) * 3) + 3, dateEcheance.Day),
                _ => throw new InvalidOperationException("Invalid periodicity type")
            };
        };

        int annRest = (int)Math.Ceiling(dateValeur.YearFraction(dateEcheance) * factor) ;
        if (annRest < (dureeEnAnnees - differe))
        {
            valeurNominale = valeurNominale * (dureeEnAnnees - differe) / annRest;
        }

        Func<int, DateTime, DateTime, double> calculateValue2 = (iteration, periodePrecedente, periodeCourante) => (valeurNominale - valeurNominale / (dureeEnAnnees - differe) * iteration) * coupon * periodePrecedente.YearFraction(periodeCourante);

        Action<int> updateEcheancier = (index) =>
        {
            var previousEcheanceValue = echeancier[index].value;
            echeancier[index] = (previousEcheanceValue + valeurNominale * 100 / (dureeEnAnnees - differe), echeancier[index].date);
        };

        var parallelIteration = 0;
        var cursor = 0;

        DateTime periodeCourante = new DateTime();
        DateTime parallelPeriodeCourante = new DateTime();
        for (int iteration = 1; iteration <= (differe + (dureeEnAnnees - differe) * 2); iteration++)
            {
                bool isEven = differe % 2 == 0;

                if ((iteration - 1 - differe) <= 0)
                {
                    periodeCourante = echeance(iteration);
                    var periodePrecedente = new DateTime(periodeCourante.Year - 1, periodeCourante.Month, periodeCourante.Day);

                    if (dateValeur <= periodeCourante)
                    {
                        var taux = periodicite == InvestmentPeriodicityType.A ? periodePrecedente.YearFraction(periodeCourante) : 1.0/factor;
                        echeancier.Add((valeurNominale * coupon * taux, periodeCourante));
                        cursor++;
                    }
                }
                else
                {
                    if ((isEven && iteration % 2 == 0) || (!isEven && iteration % 2 != 0))
                    {
                        if (dateValeur <= periodeCourante)
                        {
                            updateEcheancier(cursor);
                        }
                    }
                    else
                    {
                        parallelIteration++;
                        parallelPeriodeCourante = echeance2(parallelIteration);
                        var parallelPeriodePrecedente = new DateTime(parallelPeriodeCourante.Year - 1, parallelPeriodeCourante.Month, parallelPeriodeCourante.Day);

                        if (dateValeur <= parallelPeriodeCourante)
                        {
                            var multiplicator = periodicite == InvestmentPeriodicityType.A ? parallelPeriodePrecedente.YearFraction(parallelPeriodeCourante) : 1.0 / factor;
                            var value = calculateValue2(parallelIteration, parallelPeriodePrecedente, parallelPeriodeCourante) * multiplicator;
                            echeancier.Add((value, parallelPeriodeCourante));
                            cursor++;
                        }
                    }
                }
            }

        return echeancier;
    }

    public List<(double value, DateTime date)> CalculTauxAC(double coupon, DateTime dateValeur, DateTime dateEcheance, double valeurNominale, InvestmentPeriodicityType periodicite, double dureeEnAnnees, double px)
    {
        var echeancier = new List<(double value, DateTime date)> { (-px, dateValeur) };



        if (periodicite == InvestmentPeriodicityType.A)
        {
            int annRest = (int)Math.Ceiling(dateValeur.YearFraction(dateEcheance));
            if (annRest == 0) annRest = 1;

            int pairIteration = 0;
            int cursor = 0;

            for (int iteration = 1; iteration <= annRest * 2; iteration++)
            {
                if (iteration % 2 != 0)
                {
                    pairIteration++;
                    var periodeCourante = new DateTime(dateEcheance.Year - (annRest * 2 - annRest - pairIteration), dateEcheance.Month, dateEcheance.Day);
                    if (dateValeur < periodeCourante)
                    {
                        var value = (valeurNominale - valeurNominale / annRest * (pairIteration - 1)) * coupon;
                        echeancier.Add((value, periodeCourante));
                        cursor++;
                    }
                }
                else
                {
                    var periodeCourante = new DateTime(dateEcheance.Year - (annRest * 2 - annRest - pairIteration), dateEcheance.Month, dateEcheance.Day);
                    if (dateValeur < periodeCourante)
                    {
                        var periodePrecedente = echeancier[cursor - 1].date;
                        var value = valeurNominale / annRest * 100;
                        echeancier.Add((value, periodeCourante));
                        cursor++;
                    }
                }
            }
        }
        else if (periodicite == InvestmentPeriodicityType.S)
        {
            int annRest = (int)Math.Ceiling(dateValeur.YearFraction(dateEcheance) * 2);

            int impairIteration = 0;
            int pairIteration = 0;
            int cursor = 0;
            for (int iteration = 1; iteration <= annRest * 2; iteration++)
            {
                if (iteration % 2 != 0)
                {
                    impairIteration++;
                    var periodeCourante = dateEcheance.RemoveSemesters(annRest - impairIteration);
                    if (dateValeur < periodeCourante)
                    {
                        var value = (valeurNominale - valeurNominale / annRest * pairIteration) * coupon / 2;
                        echeancier.Add((value, periodeCourante));
                        cursor++;
                    }
                }
                else
                {
                    var periodeCourante = dateEcheance.RemoveSemesters(annRest - impairIteration);
                    if (dateValeur < periodeCourante)
                    {
                        var periodePrecedente = echeancier[cursor - 1].date;
                        var value = valeurNominale / annRest * 100;
                        echeancier.Add((value, periodeCourante));
                        pairIteration++;
                        cursor++;
                    }
                }
            }
        }
        else if (periodicite == InvestmentPeriodicityType.T)
        {
            int annRest = (int)Math.Ceiling(dateValeur.YearFraction(dateEcheance) * 4);

            int impairIteration = 0;
            int pairIteration = 0;
            int cursor = 0;
            for (int iteration = 1; iteration <= annRest * 2; iteration++)
            {
                if (iteration % 2 != 0)
                {
                    impairIteration++;
                    var periodeCourante = dateEcheance.RemoveTrimesters(annRest - impairIteration);
                    if (dateValeur < periodeCourante)
                    {
                        var value = (valeurNominale - valeurNominale / annRest * pairIteration) * coupon / 4;
                        echeancier.Add((value, periodeCourante));
                        cursor++;
                    }
                }
                else
                {
                    var periodeCourante = dateEcheance.RemoveTrimesters(annRest - impairIteration);
                    if (dateValeur < periodeCourante)
                    {
                        var periodePrecedente = echeancier[cursor - 1].date;
                        var value = valeurNominale / annRest * 100;
                        echeancier.Add((value, periodeCourante));
                        pairIteration++;
                        cursor++;
                    }
                }
            }
        }

        return echeancier;
    }

}
