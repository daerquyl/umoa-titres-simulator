namespace Umoa.Titres.Interest.Simulator.Data;

public class EmetteurList
{
     public List<Emetteur> Emetteurs { get; set; } = new List<Emetteur>();
}

public class Emetteur
{
    public string Nom { get; set; }
    public List<IsinDetails> Isins { get; set; } = new List<IsinDetails>{};
}