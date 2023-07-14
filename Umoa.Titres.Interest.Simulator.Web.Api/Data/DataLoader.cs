using Newtonsoft.Json;

namespace Umoa.Titres.Interest.Simulator.Data;

public class DataLoader: IDataLoader
{
    private static string path = "/Users/yanness/Projects/Talents/umoa/simulator/umoa-titres-interest-simulator/data.json";
    public EmetteurList Load ()
    {
        //Load JSON
        string json = /*File.ReadAllText(path)*/dummy;

        //Load Emetteurs
        var emetteurs = JsonConvert.DeserializeObject<EmetteurList>(json);

        return emetteurs ?? new EmetteurList();
    }

    private static string dummy = $@"{{
    ""emetteurs"": [
        {{
            ""nom"": ""Bénin"",
            ""isins"": [
                {{
                    ""isin"": ""BJ0000000824"",
                    ""modeAmortissement"": ""IF"",
                    ""periodicite"": ""A"",
                    ""dateValeur"": ""2023-01-01"",
                    ""tauxInteret"": ""5%"",
                    ""maturiteEmission"": ""5 ans"",
                    ""dateEcheance"": ""2028-01-01"",
                    ""valeurNominale"": ""10000""
                }},
                {{
                    ""isin"": ""BJ0000000899"",
                    ""modeAmortissement"": ""AC"",
                    ""periodicite"": ""S"",
                    ""dateValeur"": ""2023-01-01"",
                    ""tauxInteret"": ""4.5%"",
                    ""maturiteEmission"": ""10 ans"",
                    ""dateEcheance"": ""2033-01-01"",
                    ""valeurNominale"": ""10000""
                }},
                {{
                    ""isin"": ""BJ0000000790"",
                    ""modeAmortissement"": ""ACD"",
                    ""periodicite"": ""A"",
                    ""dateValeur"": ""2023-01-01"",
                    ""tauxInteret"": ""6%"",
                    ""maturiteEmission"": ""7 ans"",
                    ""dateEcheance"": ""2030-01-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Burkina"",
            ""isins"": [
                {{
                    ""isin"": ""BF0000001234"",
                    ""modeAmortissement"": ""IF"",
                    ""periodicite"": ""S"",
                    ""dateValeur"": ""2023-02-01"",
                    ""tauxInteret"": ""5.5%"",
                    ""maturiteEmission"": ""6 ans"",
                    ""dateEcheance"": ""2029-02-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Cote d'Ivoire"",
            ""isins"": [
                {{
                    ""isin"": ""CI0000005678"",
                    ""modeAmortissement"": ""AC"",
                    ""periodicite"": ""A"",
                    ""dateValeur"": ""2023-03-01"",
                    ""tauxInteret"": ""6%"",
                    ""maturiteEmission"": ""8 ans"",
                    ""dateEcheance"": ""2031-03-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Guinée-Bissau"",
            ""isins"": [
                {{
                    ""isin"": ""GW0000009012"",
                    ""modeAmortissement"": ""ACD"",
                    ""periodicite"": ""S"",
                    ""dateValeur"": ""2023-04-01"",
                    ""tauxInteret"": ""4%"",
                    ""maturiteEmission"": ""4 ans"",
                    ""dateEcheance"": ""2027-04-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Mali"",
            ""isins"": [
                {{
                    ""isin"": ""ML0000003456"",
                    ""modeAmortissement"": ""IF"",
                    ""periodicite"": ""A"",
                    ""dateValeur"": ""2023-05-01"",
                    ""tauxInteret"": ""5.5%"",
                    ""maturiteEmission"": ""10 ans"",
                    ""dateEcheance"": ""2033-05-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Niger"",
            ""isins"": [
                {{
                    ""isin"": ""NE0000007890"",
                    ""modeAmortissement"": ""AC"",
                    ""periodicite"": ""S"",
                    ""dateValeur"": ""2023-06-01"",
                    ""tauxInteret"": ""6%"",
                    ""maturiteEmission"": ""7 ans"",
                    ""dateEcheance"": ""2030-06-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Sénégal"",
            ""isins"": [
                {{
                    ""isin"": ""SN0000001234"",
                    ""modeAmortissement"": ""ACD"",
                    ""periodicite"": ""A"",
                    ""dateValeur"": ""2023-07-01"",
                    ""tauxInteret"": ""5%"",
                    ""maturiteEmission"": ""5 ans"",
                    ""dateEcheance"": ""2028-07-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }},
        {{
            ""nom"": ""Togo"",
            ""isins"": [
                {{
                    ""isin"": ""TG0000005678"",
                    ""modeAmortissement"": ""IF"",
                    ""periodicite"": ""S"",
                    ""dateValeur"": ""2023-08-01"",
                    ""tauxInteret"": ""4.5%"",
                    ""maturiteEmission"": ""6 ans"",
                    ""dateEcheance"": ""2029-08-01"",
                    ""valeurNominale"": ""10000""
                }}
            ]
        }}
    ]
}}";
}
