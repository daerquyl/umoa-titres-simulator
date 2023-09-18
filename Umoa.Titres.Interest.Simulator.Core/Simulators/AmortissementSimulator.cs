using System;
using System.Numerics;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;
using Microsoft.VisualBasic;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface IAmortissementSimulator
{
    OATAmortizationTable CalculAmortissement(OATInvestmentDetails details);
}

public class AmortissementSimulator : IAmortissementSimulator
{
    public OATAmortizationTable CalculAmortissement(OATInvestmentDetails details)
    {
        if (details.Prix is null)
            throw new Exception("Impossible de calculer le tableau d'amortissement du placement sans fournir le prix souhaité");

        return CalculAmortissement(
             details.ModeAmortissement,
             details.Coupon / 100,
             details.ValeurNominale,
             details.DateValeur,
             details.DateEcheance,
             details.MontantAPlacer,
             details.Periodicite,
             details.MaturiteReelle,
             details.Prix.Value,
             details.Differe
         );
    }

    private OATAmortizationTable CalculAmortissement(AmortizationType modeAmortissement, double coupon, double valeurNominale, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle, double prix, int differe=0)
    {
        var amortissementTable = modeAmortissement switch
        {
            AmortizationType.IF => CalculAmortissementIF(coupon, dateValeur, dateEcheance, montantAPlacer, periodicite, maturiteReelle),
            AmortizationType.AC => CalculAmortissementAC(coupon, dateValeur, dateEcheance, montantAPlacer, periodicite, maturiteReelle, prix * montantAPlacer),
            AmortizationType.ACD => CalculAmortissementACD(coupon, dateValeur, dateEcheance, montantAPlacer, periodicite, maturiteReelle, prix * montantAPlacer, differe),
            _ => throw new InvalidOperationException("Invalid amortissement mode")
        };

        return amortissementTable;
    }

    private OATAmortizationTable CalculAmortissementIF(double coupon, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle)
    {
        OATAmortizationTable table = new(montantAPlacer);

        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };

        var duree = maturiteReelle * factor;

        DateTime periode(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-(maturiteReelle - iteration)),
            InvestmentPeriodicityType.S => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration + 1) * 6) + 6, dateEcheance.Day),
            InvestmentPeriodicityType.T => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration + 1) * 3) + 3, dateEcheance.Day),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };


        var cursorEcheancier = 0;

        for (int iteration = 1; iteration <= duree; iteration++)
        {
            DateTime periodeCourante = periode(iteration);

            if (dateValeur < periodeCourante)
            {
                
                var date = periodeCourante;
                var multiplicator = periodicite == InvestmentPeriodicityType.A
                    ? new DateTime(periodeCourante.Year - 1, periodeCourante.Month, periodeCourante.Day).YearFraction(periodeCourante)
                    : 1.0 / factor;
                var interet = montantAPlacer * coupon * multiplicator;
                var fraction = cursorEcheancier == 0
                    ? dateValeur.YearFraction(date)
                    : table.Lines[cursorEcheancier - 1].Fraction + table.Lines[cursorEcheancier - 1].Date.YearFraction(date);
                if (iteration != duree)
                {
                    var amortissement = 0;
                    table.AddLine(fraction, date, interet, amortissement);
                }
                else
                {
                    var amortissement = montantAPlacer;
                    table.AddLine(fraction, date, interet, amortissement);
                }
                cursorEcheancier++;
            }
        }
        return table;
    }

    private OATAmortizationTable CalculAmortissementAC(double coupon, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle, double prix)
    {
        OATAmortizationTable table = new(montantAPlacer);

        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };

        var duree = maturiteReelle;

        DateTime periode(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-iteration),
            InvestmentPeriodicityType.S => dateEcheance.RemoveSemesters(iteration),
            InvestmentPeriodicityType.T => dateEcheance.RemoveTrimesters(iteration),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        var test = dateValeur.YearFraction(dateEcheance);
        var annRest = (int)Math.Ceiling(dateValeur.YearFraction(dateEcheance) * factor);
        annRest = annRest == 0 ? 1 : annRest;

        var cursorPeriode = 0;
        var parralleCursorPeriod = 0;
        var cursorEcheancier = 0;

        DateTime periodeCourante = new();
        for (var iteration = 1; iteration <= annRest * 2; iteration++)
        {
            if(iteration % 2 != 0)
            {
                cursorPeriode++;
                periodeCourante = periode(annRest * 2 - annRest - cursorPeriode);
                if (dateValeur < periodeCourante)
                {
                    var date = periodeCourante;

                    var fraction = cursorEcheancier == 0
                        ? dateValeur.YearFraction(date)
                        : table.Lines[cursorEcheancier - 1].Fraction + table.Lines[cursorEcheancier - 1].Date.YearFraction(date);

                    var encours = prix;
                    var periodeMultiplicator = periodicite == InvestmentPeriodicityType.A ? (cursorPeriode - 1) : parralleCursorPeriod;
                    var interet = (montantAPlacer - (montantAPlacer / annRest) * periodeMultiplicator) * coupon / factor;
                    var amortissement = 0;
                    table.AddLine(fraction, date, interet, amortissement);
                    cursorEcheancier++;
                }
            }
            else
            {
                if (dateValeur < periodeCourante)
                {
                    var periodeMultiplicator = periodicite == InvestmentPeriodicityType.A ? cursorPeriode : parralleCursorPeriod;
                    //var encours = montantAPlacer - (montantAPlacer / annRest) * periodeMultiplicator;

                    //table.Lines[cursorEcheancier - 1].UpdateEncoursDebut(encours);
                    //table.Lines[cursorEcheancier - 1].UpdateAmortissement(montantAPlacer / annRest);

                    parralleCursorPeriod++;
                }
            }
        }

        return table;
    }

    private OATAmortizationTable CalculAmortissementACD(double coupon, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle, double prix, int differe)
    {
        OATAmortizationTable table = new(montantAPlacer);

        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };

        var duree = maturiteReelle * factor;
        differe *= factor;

        DateTime echeance(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-(duree - iteration)),
            InvestmentPeriodicityType.S => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration + 1) * 6) + 6, dateEcheance.Day),
            InvestmentPeriodicityType.T => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration + 1) * 3) + 3, dateEcheance.Day),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        var echeance2 = (int iteration) =>
        {
            var iteration2 = iteration + differe + 1;
            return periodicite switch
            {
                //InvestmentPeriodicityType.A => dateEcheance.AddYears(-(duree * 2 - duree - iteration - differe - 1)),
                //InvestmentPeriodicityType.S => dateEcheance.RemoveSemesters((duree * 2 - duree - iteration - differe - 1)),
                //InvestmentPeriodicityType.T => dateEcheance.RemoveTrimesters((duree * 2 - duree - iteration - differe - 1)),
                InvestmentPeriodicityType.A => dateEcheance.AddYears(-(duree - iteration2)),
                InvestmentPeriodicityType.S => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration2 + 1) * 6) + 6, dateEcheance.Day),
                InvestmentPeriodicityType.T => DateAndTime.DateSerial(dateEcheance.Year, dateEcheance.Month - ((duree - iteration2 + 1) * 3) + 3, dateEcheance.Day),
                _ => throw new InvalidOperationException("Invalid periodicity type")
            };
        };

        Func<int, DateTime, DateTime, double> calculateValue2 = (iteration, periodePrecedente, periodeCourante)
            => (montantAPlacer - montantAPlacer / (duree - differe) * iteration) * coupon * periodePrecedente.YearFraction(periodeCourante);

        int annRest = (int)Math.Ceiling(dateValeur.YearFraction(dateEcheance) * factor);
        if(annRest < (duree - differe))
        {
            montantAPlacer = (montantAPlacer * (duree - differe)) / annRest;
        }

        DateTime periodeCourante = new DateTime();
        DateTime parallelPeriodeCourante = new DateTime();

        int parrallelIteration = 0;
        int tableCursor = 0;
        for (var iteration = 1; iteration <= (differe + (duree - differe) * 2); iteration++)
        {
            bool isEven = differe % 2 == 0;
            if ((iteration - 1 - differe) <= 0)
            {
                periodeCourante = echeance(iteration);
                if (dateValeur <= periodeCourante)
                {
                    var periodePrecedente = new DateTime(periodeCourante.Year - 1, periodeCourante.Month, periodeCourante.Day);

                    var date = periodeCourante;

                    var fraction = tableCursor == 0
                        ? dateValeur.YearFraction(date)
                        : table.Lines[tableCursor - 1].Fraction + table.Lines[tableCursor - 1].Date.YearFraction(date);

                    var multiplicator = periodicite == InvestmentPeriodicityType.A ? periodePrecedente.YearFraction(periodeCourante) : 1.0 / factor;
                    var interet = montantAPlacer * coupon * multiplicator;
                    var amortissement = 0;
                    table.AddLine(fraction, date, interet, amortissement);
                    tableCursor++;
                }
            }
            else
            {
                if ((isEven && iteration % 2 == 0) || (!isEven && iteration % 2 != 0))
                {
                    if (dateValeur <= periodeCourante)
                    {
                        table.Lines[tableCursor - 1].UpdateAmortissement(montantAPlacer / (duree - differe));
                    }
                }
                else
                {
                    parrallelIteration++;
                    parallelPeriodeCourante = echeance2(parrallelIteration);

                    if (dateValeur <= parallelPeriodeCourante)
                    {
                        var parallelPeriodePrecedente = echeance2(parrallelIteration - 1);

                        var date = parallelPeriodeCourante;

                        var fraction = tableCursor == 0
                            ? dateValeur.YearFraction(date)
                            : table.Lines[tableCursor - 1].Fraction + table.Lines[tableCursor - 1].Date.YearFraction(date);

                        //var encours = tableCursor == 0 && annRest < (duree - differe)
                        //    ? (montantAPlacer * annRest) / (duree - differe)
                        //    : montantAPlacer;
                        //if (tableCursor != 0)
                        //{
                        //    encours = table.Lines[tableCursor - 1].EncoursDebut;
                        //}

                        var multiplicator = periodicite == InvestmentPeriodicityType.A ? parallelPeriodePrecedente.YearFraction(parallelPeriodeCourante) : 1.0 / factor;
                        var interet = calculateValue2(parrallelIteration, parallelPeriodePrecedente, parallelPeriodeCourante) * multiplicator;
                        var amortissement = 0;
                        table.AddLine(fraction, date, interet, amortissement);
                        tableCursor++;
                    }
                }
            }
        }
        return table;
    }

}