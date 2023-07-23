using System;
using Umoa.Titres.Interest.Simulator.Core;

namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public record BondSimulationInput(
    DateTime DateValeur,
    DateTime DateEcheance,
    double Coupon,
    int MaturiteResiduel,
    double ValeurNominale,
    double TauxRendement,
    double MontantAPlacer
)
{
}