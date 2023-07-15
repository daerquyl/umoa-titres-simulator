using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public record SimulationResults() { }
public record OATSimulationResults(double couponCouru, double prix, double tauxRendement, string montantNet, string interets) : SimulationResults
{ }
public record BondSimulationResults(string montantNet, string interets) : SimulationResults
{ }

