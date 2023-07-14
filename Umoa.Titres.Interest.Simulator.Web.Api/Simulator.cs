using System;
using Umoa.Titres.Interest.Simulator.Core;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Simulators;
using Umoa.Titres.Interest.Simulator.Web.Api.Dto;


namespace Umoa.Titres.Interest.Simulator.Web.Api;


public interface ISimulatorController
{
    public SimulationResults Run(OATInvestmentDetails details);
    public OATAmortizationTable GetAmortizationTable(OATInvestmentDetails details);
}


public class SimulatorController : ISimulatorController
{
    private ISimulator simulator;

	public SimulatorController(ISimulator simulator)
	{
        this.simulator = simulator;
	}

    public SimulationResults Run(OATInvestmentDetails details)
    {
        double prix, rendement, couponCouru, montantNet, interets;


        if (details.TauxRendement is not null)
        {
            prix = simulator.CalculPrix(details);
            rendement = details.TauxRendement.Value;
            
        }
        else
        {
            rendement = simulator.CalculRendement(details);
            prix = details.Prix.Value;
        }

        couponCouru = simulator.CalculCouponCouru(details.DateEcheance, details.DateValeur, details.MaturiteEnAnnes, details.Coupon, details.Periodicite);
        montantNet = details.MontantAPlacer * (prix + couponCouru) / 100;
        interets = details.MontantAPlacer * couponCouru / 100;

        return new OATSimulationResults(couponCouru, prix, rendement, montantNet, interets);

    }

    public OATAmortizationTable GetAmortizationTable(OATInvestmentDetails details)
    {
        return simulator.CalculAmortissement(details);
    }
}

