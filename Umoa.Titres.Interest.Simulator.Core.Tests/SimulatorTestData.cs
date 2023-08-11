namespace Umoa.Titres.Interest.Simulator.Core.Tests;

public abstract class SimulatortTestData : IEnumerable<object[]>
{
    protected List<object[]> _data;

    protected static object[] CreateTestData(OATInvestmentDetails details, object expectedValue)
    {
        return new object[]{ details,  expectedValue};
    }

    public IEnumerator<object[]> GetEnumerator() => _data.GetEnumerator();;

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}

public class SimulatorPrixInFineTestData : SimulatortTestData
{
    public SimulatorPrixInFineTestData()
    {
        _data = new List<object[]>
        {
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.A, new DateTime(2017, 7, 26), 6.15, 5, new DateTime(2022, 7, 26), 10000, 15000), 94.54),
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.S, new DateTime(2017, 7, 26), 6.15, 3, new DateTime(2020, 7, 26), 10000, 15000), 96.77),
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.T, new DateTime(2017, 7, 26), 6.15, 7, new DateTime(2024, 7, 26), 10000, 15000), 93.74)
        };
    }
}

public class SimulatorPrixACTestData : SimulatortTestData
{
    public SimulatorPrixACTestData()
    {
        _data = new List<object[]>
        {
            CreateTestData(new OATInvestmentDetails(AmortizationType.AC, InvestmentPeriodicityType.A, new DateTime(2017, 7, 26), 6.15, 5, new DateTime(2022, 7, 26), 10000, 15000), 94.54),
            CreateTestData(new OATInvestmentDetails(AmortizationType.AC, InvestmentPeriodicityType.S, new DateTime(2017, 7, 26), 6.15, 3, new DateTime(2020, 7, 26), 10000, 15000), 96.77),
            CreateTestData(new OATInvestmentDetails(AmortizationType.AC, InvestmentPeriodicityType.T, new DateTime(2017, 7, 26), 6.15, 7, new DateTime(2024, 7, 26), 10000, 15000), 93.74)
        };
    }
}

public class SimulatorPrixACDTestData : SimulatortTestData
{
    public SimulatorPrixACDTestData()
    {
        _data = new List<object[]>
        {
            CreateTestData(new OATInvestmentDetails(AmortizationType.ACD, InvestmentPeriodicityType.A, new DateTime(2017, 7, 26), 6.15, 5, new DateTime(2022, 7, 26), 10000, 15000, 2), 94.5),
            CreateTestData(new OATInvestmentDetails(AmortizationType.ACD, InvestmentPeriodicityType.S, new DateTime(2017, 7, 26), 6.15, 3, new DateTime(2020, 7, 26), 10000, 15000, 2), 96.77),
            CreateTestData(new OATInvestmentDetails(AmortizationType.ACD, InvestmentPeriodicityType.T, new DateTime(2017, 7, 26), 6.15, 7, new DateTime(2024, 7, 26), 10000, 15000, 2), 93.74)
        };
    }
}

public class SimulatorRendementTestData : SimulatortTestData
{
    public SimulatorRendementTestData()
    {
        _data = new List<object[]>
        {
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.A, new DateTime(2017, 7, 26), 6.15, 5, new DateTime(2022, 7, 26), 10000, 15000), 100),
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.S, new DateTime(2017, 7, 26), 6.15, 3, new DateTime(2020, 7, 26), 10000, 15000), 100),
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.T, new DateTime(2017, 7, 26), 6.15, 7, new DateTime(2024, 7, 26), 10000, 15000), 100)
        };
    }
}

public class SimulatorCouponCouruTestData : SimulatortTestData
{
    public SimulatorCouponCouruTestData()
    {
        _data = new List<object[]>
        {
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.A, new DateTime(2017, 7, 26), 6.15, 5, new DateTime(2022, 7, 26), 10000, 15000), 0),
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.S, new DateTime(2017, 7, 26), 6.15, 3, new DateTime(2020, 7, 26), 10000, 15000), 0),
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.T, new DateTime(2017, 7, 26), 6.15, 7, new DateTime(2024, 7, 26), 10000, 15000), 0)
        };
    }
}

public class SimulatorTableauAmortissementTestData : SimulatortTestData
{
    public SimulatorTableauAmortissementTestData()
    {
        var amortizationLines = new OATAmortizationTable()
            .AddLine(new DateTime(2018, 7, 26), 15000, 923, 0)
            .AddLine(new DateTime(2019, 7, 26), 15000, 923, 0)
            .AddLine(new DateTime(2020, 7, 26), 15000, 923, 0)
            .AddLine(new DateTime(2021, 7, 26), 15000, 923, 0)
            .AddLine(new DateTime(2022, 7, 26), 0, 923, 15000);

        _data = new List<object[]>
        {
            CreateTestData(new OATInvestmentDetails(AmortizationType.IF, InvestmentPeriodicityType.A, new DateTime(2017, 7, 26), 6.15, 5, new DateTime(2022, 7, 26), 10000, 15000), amortizationLines),
        };
    }
}

