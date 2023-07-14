using System;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;


public interface ICouponCouruSimulator
{
    double CalculCouponCouru(DateTime dateEcheance, DateTime dateValeur, int dureeEnAnnees, double coupon, InvestmentPeriodicityType periodicite);
}


public class CouponCouruSimulator : ICouponCouruSimulator
{
	public CouponCouruSimulator()
	{
	}

    public double CalculCouponCouru(DateTime dateEcheance, DateTime dateValeur, int dureeEnAnnees, double coupon, InvestmentPeriodicityType periodicite)
    {
        int factor = periodicite switch
        {
            InvestmentPeriodicityType.S => 2,
            InvestmentPeriodicityType.T => 4,
            _ => 1
        };

        var duree = dureeEnAnnees * factor;

        DateTime periode(int iteration) => periodicite switch
        {
            InvestmentPeriodicityType.A => dateEcheance.AddYears(-(dureeEnAnnees - iteration)),
            InvestmentPeriodicityType.S => dateEcheance.RemoveSemesters(dureeEnAnnees * factor - iteration),
            InvestmentPeriodicityType.T => dateEcheance.RemoveTrimesters(dureeEnAnnees * factor - iteration),
            _ => throw new InvalidOperationException("Invalid periodicity type")
        };

        for (int iteration = 1; iteration <= duree; iteration++)
        {
            DateTime periodeCourante = periode(iteration);

            if (dateValeur < periodeCourante)
            {
                DateTime periode1 = periode(iteration - 1);
                var preperiodeCourante = new DateTime(periodeCourante.Year-1, periodeCourante.Month, periodeCourante.Day);
                var couponCouru = coupon * dateValeur.DaysBetween(periode1) / periodeCourante.DaysBetween(preperiodeCourante);
                return Math.Round(couponCouru, 4);
            }
        }

        return 0;
    }
}