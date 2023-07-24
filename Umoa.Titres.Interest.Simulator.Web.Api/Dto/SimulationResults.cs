using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public record SimulationResults() { }

public record OATSimulationResults : SimulationResults
{
    public double CouponCouru { get; set; }
    public double Prix { get; set; }
    public double TauxRendement { get; set; }
    public double MontantNet { get; set; }
    public double Interets { get; set; }

    public OATSimulationResults(double couponCouru, double prix, double tauxRendement, double montantNet, double interets)
        : base()
    {
        CouponCouru = couponCouru;
        Prix = prix;
        TauxRendement = tauxRendement;
        MontantNet = montantNet;
        Interets = interets;
    }
}

public record BondSimulationResults(double montantNet, double interets) : SimulationResults
{ }

