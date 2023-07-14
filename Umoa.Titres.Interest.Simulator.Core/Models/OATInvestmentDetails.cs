namespace Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Utils;

public enum InvestmentPrixOrRendementType { PRIX, RENDEMENT }
public enum AmortizationType { IF, AC, ACD }
public enum InvestmentPeriodicityType { A, S, T }
public record OATInvestmentDetails(
    AmortizationType ModeAmortissement,
    InvestmentPeriodicityType Periodicite,
    DateTime DateValeur,
    double Coupon,
    int MaturiteEnAnnes,
    DateTime DateEcheance,
    double ValeurNominale,
    double MontantAPlacer,
    int Differe = 0
)
{
    public OATInvestmentDetails SetPrixOrRendement(InvestmentPrixOrRendementType prixOrRendementType, double value)
    {
        _ = prixOrRendementType switch
        {
            InvestmentPrixOrRendementType.PRIX => Prix = value,
            InvestmentPrixOrRendementType.RENDEMENT => TauxRendement = value,
            _ => throw new ArgumentException("Invalid prixOrRendementType value.")
        };

        return this;
    }

    public double? Prix { get; private set; }
    public double? TauxRendement { get; private set; }
    public int MaturiteReelle {
        get
        {
            var frac = DateValeur.YearFraction(DateEcheance);
            var temp = Math.Round(frac, 2);
            temp = Math.Max(Math.Ceiling(temp), (double)MaturiteEnAnnes);

            return (int)temp;
        }
       
    }
}