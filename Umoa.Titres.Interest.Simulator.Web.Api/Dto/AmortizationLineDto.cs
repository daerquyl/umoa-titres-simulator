using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api.Dto;

public class AmortizationLineDto
{
    public double Fraction { get; set; }
    public string Date { get; set; }
    public string Encours { get; set; }
    public string Interets { get; set; }
    public string Amortissement { get; set; }
    public string Service { get; set; }
}

