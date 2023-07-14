namespace Umoa.Titres.Interest.Simulator.Data;

public class IsinsService : IIsinsService
{
    private static EmetteurList emetteurs = new EmetteurList();

    public IsinsService(IDataLoader loader)
    {
        emetteurs = loader.Load();
    }

    public IEnumerable<string> GetEmetteurs() => emetteurs.Emetteurs.Select(e => e.Nom);

    public IEnumerable<string> GetIsins(string emetteur)
    {
        var codes = emetteurs.Emetteurs
            .Where(e => e.Nom == emetteur)
            .SingleOrDefault()
            ?.Isins
            .Select(i => i.Isin);

        return codes ?? Enumerable.Empty<string>();
    }

    public IsinDetails GetIsinDetails(string code)
    {
        var isin = emetteurs.Emetteurs
            .SelectMany(e => e.Isins)
            .SingleOrDefault(i => i.Isin == code);

        return isin;
    }
}