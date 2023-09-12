using System;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface IBondSimulator
{
	double CalculRendement(BondInvestmentDetails details);
	double CalculInterets(BondInvestmentDetails details);
	double CalculMontantNet(BondInvestmentDetails details);
    int CalculMaturiteResiduelle(BondInvestmentDetails investmentDetails);
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

    public int CalculMaturiteResiduelle(BondInvestmentDetails details)
    {
        var maturiteRes = details.DateValeur.DaysBetween(details.DateEcheance) + 1;
        return maturiteRes;
    }

    public double CalculRendement(BondInvestmentDetails details)
    {
        var couponPercent = details.Coupon / 100;
        var maturiteResiduellePer360 = (double)CalculMaturiteResiduelle(details) / 360;
        var numerator = couponPercent;
        var quotient = 1 - couponPercent * maturiteResiduellePer360;
        return couponPercent / quotient * 100;
    }
}