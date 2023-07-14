using System;
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
             details.MaturiteReelle
         );
    }

    private OATAmortizationTable CalculAmortissement(AmortizationType modeAmortissement, double coupon, double valeurNominale, DateTime dateValeur, DateTime dateEcheance, double montantAPlacer, InvestmentPeriodicityType periodicite, int maturiteReelle)
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
            InvestmentPeriodicityType.S => dateEcheance.AddSemesters(maturiteReelle * factor - iteration),
            InvestmentPeriodicityType.T => dateEcheance.AddTrimesters(maturiteReelle * factor - iteration),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        var duree = maturiteReelle * factor;

        for (int iteration = 1; iteration <= duree; iteration++)
        {
            DateTime periodeCourante = periode(iteration);

            if (dateValeur < periodeCourante)
            {
                var periodePrecedente = new DateTime(periodeCourante.Year - 1, periodeCourante.Month, periodeCourante.Day);

                var date = periodeCourante;
                var interet = montantAPlacer * coupon * periodePrecedente.YearFraction(periodeCourante);
                if (iteration != duree)
                {
                    var encours = montantAPlacer;
                    var amortissement = 0;
                    table.AddLine(date, encours, interet, amortissement);
                }
                else
                {
                    var encours = 0;
                    var amortissement = montantAPlacer;
                    table.AddLine(date, encours, interet, amortissement);
                }
            }
        }
        return table;
    }
}


