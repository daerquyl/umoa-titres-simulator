using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public class AmortizationLineDto
{
    public double Fraction { get; set; }
    public string Date { get; set; }
    public double EncoursDebut { get; set; }
    public double EncoursFin { get; set; }
    public double Interets { get; set; }
    public double Amortissement { get; set; }
    public double Service { get; set; }
}

