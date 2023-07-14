using System;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface IPrixSimulator
{
    double CalculPrix(OATInvestmentDetails details);
    double CalculPrix(List<(double value, DateTime date)> echeancier, double rendement, DateTime dateValeur);
}

public class PrixSimulator : IPrixSimulator
{
    ICouponCouruSimulator couponCouruSimulator;
    ISimulatorCommonRoutines routines;

    public PrixSimulator(ICouponCouruSimulator couponCouruSimulator, ISimulatorCommonRoutines routines)
    {
        this.couponCouruSimulator = couponCouruSimulator;
        this.routines = routines;
    }

    public double CalculPrix(OATInvestmentDetails details)
    {
        if (details.TauxRendement is null)
            throw new Exception("Impossible de calculer le prix du placement sans fournir le rendement");

        var prix_per_cent = CalculPrix(
            details.ModeAmortissement,
            details.ValeurNominale / 100,
            details.MaturiteReelle,
            details.Coupon,
            Math.Round(details.TauxRendement.Value / 100, 4),
            details.Periodicite,
            details.DateValeur,
            details.DateEcheance,
            details.Differe);

        return Math.Round(prix_per_cent * 100, 2);
    }

    private double CalculPrix(AmortizationType modeAmortissement, double valeurNominale, int dureeEnAnnees, double coupon, double rendement, InvestmentPeriodicityType periodicite, DateTime dateValeur, DateTime dateEcheance, int differe)
    {
        List<(double value, DateTime date)> echeancier = new();

        if (modeAmortissement == AmortizationType.IF)
        {
            echeancier = routines.CalculTauxIF(coupon, dateValeur, dateEcheance, valeurNominale / 100, periodicite, dureeEnAnnees, 1);
        }
        if (modeAmortissement == AmortizationType.ACD)
        {
            echeancier = routines.CalculTauxACD(dateEcheance, dateValeur, dureeEnAnnees, valeurNominale / 100, 1, coupon, periodicite, differe);
        }
        if (modeAmortissement == AmortizationType.AC)
        {
            echeancier = routines.CalculTauxAC(coupon, dateValeur, dateEcheance, valeurNominale / 100, periodicite, dureeEnAnnees, 1);
        }

        //var dresiduel = DureeResiduel(echeancier, rendement, dateValeur);
        var prixAvecCoupon = CalculPrix(echeancier, rendement, dateValeur);
        var couponCouru = couponCouruSimulator.CalculCouponCouru(dateEcheance, dateValeur, dureeEnAnnees, coupon, periodicite);
        var bondsPrice = (prixAvecCoupon - couponCouru) / 100;


        return bondsPrice;
    }

    public double CalculPrix(List<(double value, DateTime date)> echeancier, double rendement, DateTime dateValeur)
    {
        var echeancierReelle = echeancier.Where(t => t.value != 0).ToList();
        var annees = new List<double>() { 0 };
        var ft = new List<double>() { 0 };

        for (int i = 1; i < echeancierReelle.Count; i++)
        {
            double fraction;
            if (i == 1)
            {
                fraction = echeancierReelle[0].date.YearFraction(echeancierReelle[i].date);
            }
            else
            {
                var todelete = echeancierReelle[i - 1].date.YearFraction(echeancierReelle[i].date);
                fraction = annees[i - 1] + echeancierReelle[i - 1].date.YearFraction(echeancierReelle[i].date);
            }
            annees.Add(fraction);
            ft.Add(echeancierReelle[i].value * Math.Pow(1 + rendement, -annees[i]));
        }

        var total = ft.Sum();

        return total;
    }
}
