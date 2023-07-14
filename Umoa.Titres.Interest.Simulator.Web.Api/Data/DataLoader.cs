using Newtonsoft.Json;

namespace Umoa.Titres.Interest.Simulator.Data;

public class DataLoader: IDataLoader
{
    private static string path = "/Users/yanness/Projects/Talents/umoa/simulator/umoa-titres-interest-simulator/data.json";
    public EmetteurList Load ()
    {
        //Load JSON
        string json = File.ReadAllText(path);

        //Load Emetteurs
        var emetteurs = JsonConvert.DeserializeObject<EmetteurList>(json);

        return emetteurs ?? new EmetteurList();
    }
}
