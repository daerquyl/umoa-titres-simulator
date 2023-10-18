using System;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface IBondSimulator
{
	double CalculRendement(BondInvestmentDetails details);
	double CalculInterets(BondInvestmentDetails details);
	double CalculMontantNet(BondInvestmentDetails details);
    Duration CalculMaturiteResiduelle(BondInvestmentDetails investmentDetails);
}

public class BondSimulator : IBondSimulator
{
	public BondSimulator()
	{

	}

    public double CalculInterets(BondInvestmentDetails details)
    {
        return details.MontantAPlacer * (details.Coupon / 100) * details.DateValeur.YearFraction(details.DateEcheance.AddDays(1), 2);
    }

    public double CalculMontantNet(BondInvestmentDetails details)
    {
        return details.MontantAPlacer * (1 - (details.Coupon / 100) * details.DateValeur.YearFraction(details.DateEcheance.AddDays(1), 2));
    }

    public Duration CalculMaturiteResiduelle(BondInvestmentDetails details)
    {
        var maturiteRes = details.DateValeur.DurationBetween(details.DateEcheance);
        return maturiteRes;
    }

    public double CalculRendement(BondInvestmentDetails details)
    {
        var couponPercent = details.Coupon / 100;
        var maturiteResiduelle = details.DateValeur.DaysBetweenIncludingLastDay(details.DateEcheance);
        var maturiteResiduellePer360 = (double)maturiteResiduelle / 360;
        var numerator = couponPercent;
        var quotient = 1 - couponPercent * maturiteResiduellePer360;
        return couponPercent / quotient * 100;
    }
}