import { fetchData, postData } from "./SimulatorApiService";

const endpoints = {
    getEmetteurs: "simulator/emetteurs",
    getIsins: "simulator/isins",
    getOATSimulationDetails: "simulator/isins/details",
    getPeriodicites: "simulator/frequencies",
    getMaturity: "simulator/maturity",
    getResultOATs: "simulator/run/oat",
    getResultBonds: "simulator/run/bonds",
    getAmortizationTable: "simulator/amortization/oat",
}

export const getEmetteurs = async () => {
    return await fetchData(endpoints.getEmetteurs);
}

export const getISINs = async (emetteur) => {
    return await fetchData(`${endpoints.getIsins}/${emetteur}`);
}

export const getOATSimulationDetails = async (isin) => {
    return await fetchData(`${endpoints.getOATSimulationDetails}/${isin}`);
}

export const getModeAmortissements = async () => {
    return [{code:"IF", label:"IN FINE"}/*, {code: "AC", label:"Constant"}*/, {code: "ACD", label:"Constant Différé"}]
}

export const getPeriodicites = async () => {
    return [{code: "A", label: "Annuelle"}, {code: "S", label: "Semestrielle"}, {code: "T", label: "Trimestre"}]
}

export const getMaturites = async () => {
    return ["3", "5", "7", "10", "12", "15"]
}

export const getMaturiteJours = async () => {
    return ["28", "91", "182", "364"]
}

export const getResultOATs = async (data) => {
    return await postData(endpoints.getResultOATs, data);
}

export const getResultBonds = async (data) => {
    return await postData(endpoints.getResultBonds, data);
}

export const getAmortizationTable = async (data) => {
    return await postData(endpoints.getAmortizationTable, data);
}