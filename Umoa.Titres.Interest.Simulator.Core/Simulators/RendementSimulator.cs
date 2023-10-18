using System;
using Umoa.Titres.Interest.Simulator.Core.Models;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface IRendementSimulator
{
    public double CalculRendement(OATInvestmentDetails details);
}

public class RendementSimulator : IRendementSimulator
{
    private ICouponCouruSimulator couponCouruSimulator;
    private IPrixSimulator prixSimulator;
    private ISimulatorCommonRoutines routines;

    public RendementSimulator(ICouponCouruSimulator couponCouruSimulator, IPrixSimulator prixSimulator, ISimulatorCommonRoutines routines)
    {
        this.couponCouruSimulator = couponCouruSimulator;
        this.prixSimulator = prixSimulator;
        this.routines = routines;
    }

    public double CalculRendement(OATInvestmentDetails details)
    {
        if (details.Prix is null)
            throw new Exception("Impossible de calculer le taux de rendement du placement sans fournir le prix souhaité");

        double rendement_per_cent = CalculRendement(
            details.ModeAmortissement,
            details.ValeurNominale / 100,
            details.MaturiteReelle,
            details.Coupon,
            details.Prix.Value,
            details.Periodicite,
            details.DateValeur,
            details.DateEcheance,
            details.Differe
        ) * 100;

        return rendement_per_cent;
    }

    private double CalculRendement(AmortizationType modeAmortissement, double valeurNominale, int dureeEnAnnees, double coupon, double prix, InvestmentPeriodicityType periodicite, DateTime dateValeur, DateTime dateEcheance, int differe)
    {
        prix += couponCouruSimulator.CalculCouponCouru(dateEcheance, dateValeur, dureeEnAnnees, coupon, periodicite);

        var echeancier = modeAmortissement switch
        {
            AmortizationType.IF => routines.CalculTauxIF(coupon, dateValeur, dateEcheance, valeurNominale / 100, periodicite, dureeEnAnnees, prix),
            AmortizationType.AC => routines.CalculTauxAC(coupon, dateValeur, dateEcheance, valeurNominale / 100, periodicite, dureeEnAnnees, 1),
            AmortizationType.ACD => routines.CalculTauxACD(dateEcheance, dateValeur, dureeEnAnnees, valeurNominale / 100, 1, coupon, periodicite, differe),
            _ => new List<(double value, DateTime date)>()
        };

        double iLower = 0.0001, iUpper = 1, iMid;

        int niter = 0;
        double epsilonABS = 1E-05;
        double epsilonSTEP = 1E-05;

        //Infite loop here for high prices
        while (niter < 100 || iUpper - iLower >= epsilonSTEP && Math.Abs(prixSimulator.CalculPrix(echeancier, iLower, dateValeur) - prix) >= epsilonABS)
        {
            iMid = (iLower + iUpper) / 2;

            if (Math.Abs(prixSimulator.CalculPrix(echeancier, iMid, dateValeur) - prix) <= epsilonABS)
                break;

            if ((prixSimulator.CalculPrix(echeancier, iLower, dateValeur) - prix) * (prixSimulator.CalculPrix(echeancier, iMid, dateValeur) - prix) < 0)
                iUpper = iMid;
            else
                iLower = iMid;

            niter++;
        }

        double yieldToMaturity = iLower;
        //var dresiduel = DureeResiduel(echeancier, yieldToMaturity, dateValeur);

        return yieldToMaturity;
    }

}
