namespace Umoa.Titres.Interest.Simulator.Core.Models;

public class OATAmortizationTable
{
    public List<OATAmortizationTableLine> Lines { get; }

    public int Total => Lines.Count;

    public OATAmortizationTable()
    {
        Lines = new List<OATAmortizationTableLine>();
    }

    public OATAmortizationTable AddLine(DateTime date, double encours, double interets, double amortissement)
    {
        var service = interets + amortissement;
        var line = new OATAmortizationTableLine(date, encours, interets, amortissement, service);
        Lines.Add(line);

        return this;
    }
}

public record OATAmortizationTableLine(DateTime Date, double Encours, double Interets, double Amortissement, double Service)
{
}