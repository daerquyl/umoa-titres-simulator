namespace Umoa.Titres.Interest.Simulator.Data;

public interface IIsinsService
{
    public IEnumerable<string> GetEmetteurs();
    public IEnumerable<string> GetIsins(string emetteur);
    public IsinDetails? GetIsinDetails(string code);
}