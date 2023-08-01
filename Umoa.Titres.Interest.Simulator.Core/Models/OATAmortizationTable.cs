namespace Umoa.Titres.Interest.Simulator.Core.Models;

public class OATAmortizationTable
{
    private double _nominale { get; }
    public List<OATAmortizationTableLine> Lines { get; }

    public int Total => Lines.Count;

    public OATAmortizationTable(double nominale)
    {
        Lines = new List<OATAmortizationTableLine>();
        _nominale = nominale;
    }

    public OATAmortizationTable AddLine(double fraction, DateTime date, double interets, double amortissement)
    {
        var service = interets + amortissement;
        var line = new OATAmortizationTableLine(date, GetEncoursDebut(), interets, amortissement, GetEncoursFin(amortissement), fraction, service);
        Lines.Add(line);

        return this;
    }

    private double GetEncoursDebut()
    {
        var encours = Lines.Any() ? Lines.Last().EncoursFin : _nominale;
        return encours;
    }

    private double GetEncoursFin(double amortissement)
    {
        var encours = Lines.Any() ? Lines.Last().EncoursFin - amortissement : _nominale - amortissement;
        return encours;
    }
}

public class OATAmortizationTableLine
{
    public DateTime Date { get; set; }
    public double EncoursDebut { get; set; }
    public double EncoursFin { get; set; }
    public double Interets { get; set; }
    public double Amortissement { get; set; }
    public double Fraction { get; set; }
    public double Service { get; set; }

    public OATAmortizationTableLine(DateTime date, double encoursDebut, double interets, double amortissement, double encoursFin, double fraction, double service)
    {
        Date = date;
        EncoursDebut = encoursDebut;
        Interets = interets;
        Amortissement = amortissement;
        EncoursFin = encoursFin;
        Fraction = fraction;
        Service = service;
    }

    public void UpdateAmortissement(double amortissement)
    {
        this.Amortissement = amortissement;
        
        UpdateEncoursFin();
        UpdateService();
    }

    //public void UpdateEncoursDebut(double encours)
    //{
    //    this.EncoursDebut = encours;
    //    UpdateEncoursFin();
    //}

    private void UpdateEncoursFin()
    {
        this.EncoursFin = this.EncoursDebut - this.Amortissement;
    }

    private void UpdateService()
    {
        this.Service = this.Amortissement + this.Interets;
    }
}
