using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Simulators;
using CoreSimulator = Umoa.Titres.Interest.Simulator.Core.Simulators.OATSimulator;
namespace Umoa.Titres.Interest.Simulator.Core.Tests;


public class SimulatorTests

{
    private CoreSimulator simulator;

    public SimulatorTests()
    {
        SimulatorCommonRoutines routines = new();
        CouponCouruSimulator couponCouruSimulator = new (); ;
        PrixSimulator prixSimulator = new (couponCouruSimulator, routines);
        RendementSimulator rendementSimulator = new (couponCouruSimulator, prixSimulator, routines);
        AmortissementSimulator amortissementSimulator = new();

        simulator = new CoreSimulator(couponCouruSimulator, prixSimulator, rendementSimulator, amortissementSimulator, routines);
    }


    [Theory]
    [ClassData(typeof(SimulatorPrixInFineTestData))]
    public void Should_ReturnCorrectPriceForInFineOAT(OATInvestmentDetails details, double expected)
    {
        //Given Taux de rendement 
        details.SetPrixOrRendement(InvestmentPrixOrRendementType.RENDEMENT, 7.5);

        //When calculate price
        var prix = simulator.CalculPrix(details);

        //Then
        Assert.Equal(expected, prix);
    }

    [Theory]
    [ClassData(typeof(SimulatorPrixACTestData))]
    public void Should_ReturnCorrectPriceForACOAT(OATInvestmentDetails details, double expected)
    {
        //Given Taux de rendement 
        details.SetPrixOrRendement(InvestmentPrixOrRendementType.RENDEMENT, 7.5);

        //When calculate price
        var prix = simulator.CalculPrix(details);

        //Then
        Assert.Equal(expected, prix);
    }
    
    [Theory]
    [ClassData(typeof(SimulatorPrixACDTestData))]
    public void Should_ReturnCorrectPriceForACDOAT(OATInvestmentDetails details, double expected)
    {
        //Given Taux de rendement 
        details.SetPrixOrRendement(InvestmentPrixOrRendementType.RENDEMENT, 7.5);

        //When calculate price
        var prix = simulator.CalculPrix(details);

        //Then
        Assert.Equal(expected, prix);
    }

    [Theory]
    [ClassData(typeof(SimulatorRendementTestData))]
    public void Should_ReturnCorrectRendementForInFineOAT(OATInvestmentDetails details, double expected)
    {
        //Given Taux de rendement 
        details.SetPrixOrRendement(InvestmentPrixOrRendementType.PRIX, 7);

        //When calculate price
        var rendement = simulator.CalculRendement(details);

        //Then
        Assert.Equal(expected, rendement);
    }

    [Theory]
    [ClassData(typeof(SimulatorCouponCouruTestData))]
    public void Should_ReturnCorrectCouponCouruForInFineOAT(OATInvestmentDetails details, double expected)
    {
        //When calculate price
        var couponCouru = simulator.CalculCouponCouru(details.DateEcheance, details.DateValeur, details.MaturiteReelle, details.Coupon, details.Periodicite);

        //Then
        Assert.Equal(expected, couponCouru);
    }

    [Theory]
    [ClassData(typeof(SimulatorTableauAmortissementTestData))]
    public void Should_ReturnCorrectTableauAmortissementForInFineOAT(OATInvestmentDetails details, OATAmortizationTable expected)
    {
        //Given Taux de rendement et prix
        details.SetPrixOrRendement(InvestmentPrixOrRendementType.PRIX, 75);
        details.SetPrixOrRendement(InvestmentPrixOrRendementType.RENDEMENT, 13.31);

        //When calculate price
        var amortissement = simulator.CalculAmortissement(details);

        //Then
        Assert.Equal(expected, amortissement);
    }
}