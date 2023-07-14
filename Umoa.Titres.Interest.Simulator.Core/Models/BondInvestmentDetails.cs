namespace Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;


public record BondInvestmentDetails(
    DateTime DateValeur,
    DateTime DateEcheance,
    double Coupon,
    int MaturiteEnJours,
    int MaturiteResiduel,
    double ValeurNominale,
    double TauxRendement,
    double MontantAPlacer
)
{
}