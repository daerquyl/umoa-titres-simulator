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
             details.Prix.Value
         );
    }

    private OATAmortizationTable CalculAmortissement(AmortizationType modeAmortissement, double coupon, double valeurNominale, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle, double prix)
    {
        var amortissementTable = modeAmortissement switch
        {
            AmortizationType.IF => CalculAmortissementIF(coupon, dateValeur, dateEcheance, montantAPlacer, periodicite, maturiteReelle),
            AmortizationType.AC => CalculAmortissementAC(coupon, dateValeur, dateEcheance, montantAPlacer, periodicite, maturiteReelle, prix * montantAPlacer),
            AmortizationType.ACD => CalculAmortissementIF(coupon, dateValeur, dateEcheance, montantAPlacer, periodicite, maturiteReelle),
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
                cursorEcheancier++;

                var periodePrecedente = new DateTime(periodeCourante.Year - 1, periodeCourante.Month, periodeCourante.Day);

                var date = periodeCourante;
                var interet = montantAPlacer * coupon * periodePrecedente.YearFraction(periodeCourante);
                var fraction = cursorEcheancier == 1
                    ? dateValeur.YearFraction(date)
                    : table.Lines[cursorEcheancier - 1].Fraction + table.Lines[cursorEcheancier - 1].Date.YearFraction(date);
                if (iteration != duree)
                {
                    var encours = montantAPlacer;
                    var amortissement = 0;
                    table.AddLine(0, date, encours, interet, amortissement);
                }
                else
                {
                    var encours = 0;
                    var amortissement = montantAPlacer;
                    table.AddLine(0, date, encours, interet, amortissement);
                }
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
}


