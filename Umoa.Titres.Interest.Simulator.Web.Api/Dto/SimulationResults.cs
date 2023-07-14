using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public record SimulationResults() { }
public record OATSimulationResults(double couponCouru, double prix, double tauxRendement, double montantNet, double interets) : SimulationResults
{ }
public record BondSimulationResults(double montantNet, double interets) : SimulationResults
{ }

