namespace Umoa.Titres.Interest.Simulator.Core.Models;

public class OATAmortizationTable
{
    public List<OATAmortizationTableLine> Lines { get; }

    public int Total => Lines.Count;

    public OATAmortizationTable()
    {
        Lines = new List<OATAmortizationTableLine>();
    }

    public OATAmortizationTable AddLine(double fraction, DateTime date, double encours, double interets, double amortissement)
    {
        var service = interets + amortissement;
        var line = new OATAmortizationTableLine(date, encours, interets, amortissement, fraction, service);
        Lines.Add(line);

        return this;
    }
}

public class OATAmortizationTableLine
{
    public DateTime Date { get; set; }
    public double Encours { get; set; }
    public double Interets { get; set; }
    public double Amortissement { get; set; }
    public double Fraction { get; set; }
    public double Service { get; set; }

    public OATAmortizationTableLine(DateTime date, double encours, double interets, double amortissement, double fraction, double service)
    {
        Date = date;
        Encours = encours;
        Interets = interets;
        Amortissement = amortissement;
        Fraction = fraction;
        Service = service;
    }

    public void UpdateAmortissement(double amortissement)
    {
        this.Amortissement = amortissement;
        this.Service = this.Amortissement + this.Interets;
    }

    public void UpdateEncours(double encours)
    {
        this.Encours = encours;
    }
}
