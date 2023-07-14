using Newtonsoft.Json;

namespace Umoa.Titres.Interest.Simulator.Data;

public class IsinDetails
{
    private string _tauxInteret;
    public string Isin { get; set; }
    public string ModeAmortissement { get; set; }
    public string Periodicite { get; set; }
    public string DateValeur { get; set; }
    public string TauxInteret { get; set; }
    public string Coupon => TauxInteret.Replace("%", "").Trim();
    public string MaturiteEmission { get; set; }
    public string MaturiteEnAnnes => MaturiteEmission.Replace("ans","").Trim();
    public string DateEcheance { get; set; }
    public string ValeurNominale { get; set; }
}
