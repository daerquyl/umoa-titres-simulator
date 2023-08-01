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
    BondSimulationResults Run(BondInvestmentDetails investmentDetails);
}


public class SimulatorController : ISimulatorController
{
    private IOATSimulator oatSimulator;
    private IBondSimulator bondSimulator;

	public SimulatorController(IOATSimulator oatSimulator, IBondSimulator bondSimulator)
	{
        this.oatSimulator = oatSimulator;
        this.bondSimulator = bondSimulator;
	}

    public SimulationResults Run(OATInvestmentDetails details)
    {
        double prix, rendement, couponCouru, montantNet, interets;


        if (details.TauxRendement is not null)
        {
            prix = oatSimulator.CalculPrix(details);
            rendement = details.TauxRendement.Value;
            
        }
        else
        {
            rendement = oatSimulator.CalculRendement(details);
            prix = details.Prix.Value;
        }

        couponCouru = oatSimulator.CalculCouponCouru(details.DateEcheance, details.DateValeur, details.MaturiteReelle, details.Coupon, details.Periodicite);
        montantNet = details.MontantAPlacer * (prix + couponCouru) / 100;
        interets = details.MontantAPlacer * couponCouru / 100;

        return new OATSimulationResults(couponCouru, prix, rendement, Utils.Round(montantNet), Utils.Round(interets));

    }

    public OATAmortizationTable GetAmortizationTable(OATInvestmentDetails details)
    {
        return oatSimulator.CalculAmortissement(details);
    }

    public BondSimulationResults Run(BondInvestmentDetails investmentDetails)
    {
        var montantNet = bondSimulator.CalculMontantNet(investmentDetails);
        var interets = bondSimulator.CalculInterets(investmentDetails);

        return new BondSimulationResults(montantNet: Utils.Round(montantNet), interets: Utils.Round(interets));
    }
}

