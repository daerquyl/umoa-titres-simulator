using System;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface IBondSimulator
{
	double CalculInterets(BondInvestmentDetails details);
	double CalculMontantNet(BondInvestmentDetails details);
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
}