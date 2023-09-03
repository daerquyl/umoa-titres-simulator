namespace Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;


public record BondInvestmentDetails(
    DateTime DateValeur,
    DateTime DateEcheance,
    double Coupon,
    double ValeurNominale,
    double MontantAPlacer
)
{
}