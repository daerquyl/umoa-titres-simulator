using System.Globalization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Umoa.Titres.Interest.Simulator.Core;
using Umoa.Titres.Interest.Simulator.Core.Models;
using Umoa.Titres.Interest.Simulator.Core.Simulators;
using Umoa.Titres.Interest.Simulator.Data;
using Umoa.Titres.Interest.Simulator.Web.Api;
using Umoa.Titres.Interest.Simulator.Web.Api.Dto;
using static System.Runtime.InteropServices.JavaScript.JSType;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddSingleton<IDataLoader, DataLoader>();
builder.Services.AddSingleton<IIsinsService, IsinsService>();
builder.Services.AddSingleton<ISimulatorController, SimulatorController>();

//
builder.Services.AddSingleton<ICouponCouruSimulator, CouponCouruSimulator>();
builder.Services.AddSingleton<IPrixSimulator, PrixSimulator>();
builder.Services.AddSingleton<IRendementSimulator, RendementSimulator>();
builder.Services.AddSingleton<IAmortissementSimulator, AmortissementSimulator>();
builder.Services.AddSingleton<ISimulatorCommonRoutines, SimulatorCommonRoutines>();
builder.Services.AddSingleton<IOATSimulator, OATSimulator>();
builder.Services.AddSingleton<IBondSimulator, BondSimulator>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseCors();

app.UseStaticFiles();

app.MapGet("/simulator/amortization_modes", () => 
{
    var modes = new List<EnumWithDescription>(){
        new EnumWithDescription(AmortizationType.IF.ToString(), "IN FINE"),
        new EnumWithDescription(AmortizationType.AC.ToString(), "Constant"),
        new EnumWithDescription(AmortizationType.ACD.ToString(), "Constant Différé"),
    };

    return modes;
});

app.MapGet("/simulator/frequencies", () => 
{
    var modes = new List<EnumWithDescription>(){
        new EnumWithDescription(InvestmentPeriodicityType.A.ToString(), "Annuelle"),
        new EnumWithDescription(InvestmentPeriodicityType.S.ToString(), "Semestrielle"),
        new EnumWithDescription(InvestmentPeriodicityType.T.ToString(), "Trimestrielle"),
    };

    return modes;
});

app.MapGet("/simulator/maturity", () =>  new List<int>(){3, 5, 7, 10, 12, 15});

app.MapGet("/simulator/emetteurs", (IIsinsService isinService) => {
    return isinService.GetEmetteurs().ToList();
});

app.MapGet("/simulator/isins/{emetteur}", (string emetteur, IIsinsService isinService) => {
    return isinService.GetIsins(emetteur).ToList();
});

app.MapGet("/simulator/isins/details/{isin}", (string isin, IIsinsService isinService) => {
    return isinService.GetIsinDetails(isin);
});

app.MapPost("/simulator/run/oat", ([FromBody] OATSimulationInput details, ISimulatorController simulator) => {
    var investmentDetails = new OATInvestmentDetails(
        Enum.Parse<AmortizationType>(details.ModeAmortissement),
        Enum.Parse<InvestmentPeriodicityType>(details.Periodicite),
        details.DateValeur,
        details.Coupon,
        details.MaturiteEnAnnes,
        details.DateEcheance,
        details.ValeurNominale,
        details.MontantAPlacer,
        string.IsNullOrEmpty(details.Differe) ? 0 : int.Parse(details.Differe)
    );

    if (!string.IsNullOrEmpty(details.Prix))
    {
        investmentDetails.SetPrixOrRendement(InvestmentPrixOrRendementType.PRIX, double.Parse(details.Prix.Trim(), CultureInfo.InvariantCulture));
    }
    else
    {
        investmentDetails.SetPrixOrRendement(InvestmentPrixOrRendementType.RENDEMENT, double.Parse(details.TauxRendement.Trim(), CultureInfo.InvariantCulture));
    }

    return simulator.Run(investmentDetails);
});

app.MapPost("/simulator/run/bonds", ([FromBody] BondSimulationInput details, ISimulatorController simulator) => {
    var investmentDetails = new BondInvestmentDetails(
        details.DateValeur,
        details.DateEcheance,
        details.Coupon,
        details.MaturiteEnJours,
        details.MaturiteResiduel,
        details.ValeurNominale,
        details.TauxRendement,
        details.MontantAPlacer
    );

    return simulator.Run(investmentDetails);
});

app.MapPost("/simulator/amortization/oat", ([FromBody] OATSimulationInput details, ISimulatorController simulator) => {
    var investmentDetails = new OATInvestmentDetails(
            Enum.Parse<AmortizationType>(details.ModeAmortissement),
            Enum.Parse<InvestmentPeriodicityType>(details.Periodicite),
            details.DateValeur,
            details.Coupon,
            details.MaturiteEnAnnes,
            details.DateEcheance,
            details.ValeurNominale,
            details.MontantAPlacer,
            string.IsNullOrEmpty(details.Differe) ? 0 : int.Parse(details.Differe)
        );

    investmentDetails.SetPrixOrRendement(InvestmentPrixOrRendementType.PRIX, double.Parse(details.Prix.Trim(), CultureInfo.InvariantCulture));
    investmentDetails.SetPrixOrRendement(InvestmentPrixOrRendementType.RENDEMENT, double.Parse(details.TauxRendement.Trim(), CultureInfo.InvariantCulture));

    var amortissement = simulator.GetAmortizationTable(investmentDetails);

    return amortissement.Lines.Select(line => new AmortizationLineDto()
    {
        Fraction = Math.Round(line.Fraction, 9),
        Date = line.Date.ToString("dd.MMM.yy"),
        Encours = Utils.Round(line.Encours).ToCFA(),
        Interets = Utils.Round(line.Interets).ToCFA(),
        Amortissement = Utils.Round(line.Amortissement).ToCFA(),
        Service = Utils.Round(line.Service).ToCFA()
    }).ToList();
});

app.Run();

record EnumWithDescription (string Code, string Label);
