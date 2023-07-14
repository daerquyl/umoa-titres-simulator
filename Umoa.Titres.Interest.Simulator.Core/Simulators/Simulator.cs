using Umoa.Titres.Interest.Simulator.Core.Models;

namespace Umoa.Titres.Interest.Simulator.Core.Simulators;

public interface ISimulator
{
    double CalculPrix(OATInvestmentDetails details);

    double CalculRendement(OATInvestmentDetails details);

    double CalculCouponCouru(DateTime dateEcheance, DateTime dateValeur, int maturiteEnAnnes, double coupon, InvestmentPeriodicityType periodicite);

    OATAmortizationTable CalculAmortissement(OATInvestmentDetails details);
}

public class Simulator : ISimulator
{
    private ICouponCouruSimulator couponCouruSimulator;
    private IPrixSimulator prixSimulator;
    private IRendementSimulator rendementSimulator;
    private IAmortissementSimulator amortissementSimulator;
    private ISimulatorCommonRoutines routines;

    public Simulator(ICouponCouruSimulator couponCouruSimulator, IPrixSimulator prixSimulator, IRendementSimulator rendementSimulator, IAmortissementSimulator amortissementSimulator, ISimulatorCommonRoutines routines)
    {
        this.couponCouruSimulator = couponCouruSimulator;
        this.prixSimulator = prixSimulator;
        this.rendementSimulator = rendementSimulator;
        this.amortissementSimulator = amortissementSimulator;
        this.routines = routines;
    }

    public double CalculPrix(OATInvestmentDetails details) => prixSimulator.CalculPrix(details);

    public double CalculRendement(OATInvestmentDetails details) => rendementSimulator.CalculRendement(details);

    public double CalculCouponCouru(DateTime dateEcheance, DateTime dateValeur, int maturiteEnAnnes, double coupon, InvestmentPeriodicityType periodicite)
        => couponCouruSimulator.CalculCouponCouru(dateEcheance, dateValeur, maturiteEnAnnes, coupon, periodicite);

    public OATAmortizationTable CalculAmortissement(OATInvestmentDetails details) => amortissementSimulator.CalculAmortissement(details);

    //private static double DureeResiduel(List<(double value, DateTime date)> echeancier, double rendement, DateTime dateValeur)
    //{
    //    var echeancierReelle = echeancier.Where(t => t.value != 0).ToList();
    //    var annees = new List<double>(){0};
    //    var ft = new List<double>(){0};

    //    for (int i = 1; i < echeancierReelle.Count; i++)
    //    {
    //        annees.Add(i == 1 ? echeancierReelle[0].date.YearFraction(echeancierReelle[i].date) : annees[i - 1] + echeancierReelle[i - 1].date.YearFraction(echeancierReelle[i].date));
    //        ft.Add(echeancierReelle[i].value * Math.Pow(1 + rendement, -annees[i]));
    //    }

    //    var total = ft.Sum();
    //    var duree = ft.Select((ft, index) => (ft / total) * annees[index]).Sum();

    //    return duree;
    //}
}

