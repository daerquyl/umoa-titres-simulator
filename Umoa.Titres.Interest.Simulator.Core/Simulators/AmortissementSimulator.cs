using System;
using System.Numerics;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

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
        OATAmortizationTable table = new();

        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };


        DateTime periode(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-(maturiteReelle - iteration)),
            InvestmentPeriodicityType.S => dateEcheance.RemoveSemesters(maturiteReelle * factor - iteration),
            InvestmentPeriodicityType.T => dateEcheance.RemoveTrimesters(maturiteReelle * factor - iteration),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        var duree = maturiteReelle * factor;

        var cursorEcheancier = 0;

        for (int iteration = 1; iteration <= duree; iteration++)
        {
            DateTime periodeCourante = periode(iteration);

            if (dateValeur < periodeCourante)
            {
                

                var periodePrecedente = new DateTime(periodeCourante.Year - 1, periodeCourante.Month, periodeCourante.Day);

                var date = periodeCourante;
                var interet = montantAPlacer * coupon * periodePrecedente.YearFraction(periodeCourante);
                var fraction = cursorEcheancier == 0
                    ? dateValeur.YearFraction(date)
                    : table.Lines[cursorEcheancier - 1].Fraction + table.Lines[cursorEcheancier - 1].Date.YearFraction(date);
                if (iteration != duree)
                {
                    var encours = montantAPlacer;
                    var amortissement = 0;
                    table.AddLine(fraction, date, encours, interet, amortissement);
                }
                else
                {
                    var encours = 0;
                    var amortissement = montantAPlacer;
                    table.AddLine(fraction, date, encours, interet, amortissement);
                }
                cursorEcheancier++;
            }
        }
        return table;
    }

    private OATAmortizationTable CalculAmortissementAC(double coupon, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle, double prix)
    {
        OATAmortizationTable table = new();

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
                    table.AddLine(fraction, date, encours, interet, amortissement);
                    cursorEcheancier++;
                }
            }
            else
            {
                if (dateValeur < periodeCourante)
                {
                    var periodeMultiplicator = periodicite == InvestmentPeriodicityType.A ? (cursorPeriode - 1) : parralleCursorPeriod;
                    var encours = montantAPlacer - (montantAPlacer / annRest) * periodeMultiplicator;

                    table.Lines[cursorEcheancier - 1].UpdateEncours(encours);
                    table.Lines[cursorEcheancier - 1].UpdateAmortissement(montantAPlacer / annRest);

                    parralleCursorPeriod++;
                }
            }
        }

        return table;
    }

    private OATAmortizationTable CalculAmortissementACD(double coupon, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle, double prix, int differe)
    {
        OATAmortizationTable table = new();

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
            InvestmentPeriodicityType.S => dateEcheance.RemoveSemesters(duree - iteration),
            InvestmentPeriodicityType.T => dateEcheance.RemoveTrimesters(duree - iteration),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        DateTime echeance2(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-(duree * 2 - duree - iteration - differe - 1)),
            InvestmentPeriodicityType.S => dateEcheance.RemoveSemesters((duree * 2 - duree - iteration - differe - 1)),
            InvestmentPeriodicityType.T => dateEcheance.RemoveTrimesters((duree * 2 - duree - iteration - differe - 1)),
            _ => throw new InvalidOperationException("Invalid periodicity type")
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

                    var encours = tableCursor == 0 && annRest < (duree - differe)
                        ? (montantAPlacer * annRest) / (duree - differe)
                        : montantAPlacer;
                    if (tableCursor != 0)
                    {
                        encours = table.Lines[tableCursor - 1].Encours;
                    }

                    var multiplicator = periodicite == InvestmentPeriodicityType.A ? periodePrecedente.YearFraction(periodeCourante) : 1.0 / factor;
                    var interet = montantAPlacer * coupon * multiplicator;
                    var amortissement = 0;
                    table.AddLine(fraction, date, encours, interet, amortissement);
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

                        var encours = tableCursor == 0 && annRest < (duree - differe)
                            ? (montantAPlacer * annRest) / (duree - differe)
                            : montantAPlacer;
                        if (tableCursor != 0)
                        {
                            encours = table.Lines[tableCursor - 1].Encours - table.Lines[tableCursor - 1].Amortissement;
                        }
                        table.Lines[tableCursor - 1].UpdateEncours(encours);
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

                        var encours = tableCursor == 0 && annRest < (duree - differe)
                            ? (montantAPlacer * annRest) / (duree - differe)
                            : montantAPlacer;
                        if (tableCursor != 0)
                        {
                            encours = table.Lines[tableCursor - 1].Encours;
                        }

                        var multiplicator = periodicite == InvestmentPeriodicityType.A ? parallelPeriodePrecedente.YearFraction(parallelPeriodeCourante) : 1.0 / factor;
                        var interet = calculateValue2(parrallelIteration, parallelPeriodePrecedente, parallelPeriodeCourante) * multiplicator;
                        var amortissement = 0;
                        table.AddLine(fraction, date, encours, interet, amortissement);
                        tableCursor++;
                    }
                }
            }
        }
        return table;
    }

}