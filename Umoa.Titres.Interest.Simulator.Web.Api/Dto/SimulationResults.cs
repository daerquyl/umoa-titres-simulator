using System;
using Umoa.Titres.Interest.Simulator.Core.Utils;

namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public record SimulationResults() { }

public record OATSimulationResults : SimulationResults
{
    public double CouponCouru { get; set; }
    public double Prix { get; set; }
    public double TauxRendement { get; set; }
    public double MontantNet { get; set; }
    public double Interets { get; set; }
    public Duration DureeResiduelle { get; set; }

    public OATSimulationResults(double couponCouru, double prix, double tauxRendement, double montantNet, double interets, Duration dureeResiduelle)
        : base()
    {
        CouponCouru = couponCouru;
        Prix = prix;
        TauxRendement = tauxRendement;
        MontantNet = montantNet;
        Interets = interets;
        DureeResiduelle = dureeResiduelle;
    }
}

public record BondSimulationResults(double MontantNet, double Interets, Duration DureeResiduelle, double TauxRendement) : SimulationResults
{ }

