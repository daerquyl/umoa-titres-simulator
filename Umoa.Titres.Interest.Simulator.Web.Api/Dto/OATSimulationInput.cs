using System;
using Umoa.Titres.Interest.Simulator.Core;

namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public record OATSimulationInput(
    string ModeAmortissement,
    string Periodicite,
    DateTime DateValeur,
    double Coupon,
    int MaturiteEnAnnes,
    DateTime DateEcheance,
    double ValeurNominale,
    double MontantAPlacer,
    string Prix,
    string TauxRendement,
    string Differe
)
{
}
