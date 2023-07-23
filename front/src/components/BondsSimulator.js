import React, { useState, useEffect } from "react";
import BondSimulatorInput  from "./BondSimulatorInput";
import {getResultBonds} from "../services/SimulatorService";
import BondSimulatorResult from "./BondSimulatorResult";

const BondsSimulator = ({lang}) => {
  // Code pour le simulateur des obligations (Bonds)
  const [formData, setFormData] = useState({
      dateValeur: "",
      dateEcheance: "",
      coupon: "",
      maturiteResiduel: "",
      valeurNominale : "",
      tauxRendement: "",
      montantAPlacer: "",
  })
  const [results, setResults] = useState({
    interets: "",
    montantNet: "",
  });

  useEffect(() => {
    if(canSubmit())
    { 
      submitForm();
    }
  }, [formData])

  const isFormValid = () => {
    const isValid = formData.dateValeur &&
    formData.dateEcheance && 
    formData.coupon && 
    formData.maturiteResiduel && 
    formData.valeurNominale && 
    formData.tauxRendement &&
    formData.montantAPlacer;

    return isValid;
  }

  const updateFormData = (updates) => {
    setFormData(prev => ({...prev, ...updates}));
  }

  const canSubmit = () => {
    return isFormValid();
  }

  const submitForm = () => {
    const launchSimulation = async () => {
      let resultats = await getResultBonds(formData);
      setResults(resultats);
    }

    launchSimulation();
  }

  return (
    <div>
      <BondSimulatorInput formData={formData} updateFormData={updateFormData} lang={lang}/>
      <BondSimulatorResult results={results} formData={formData} lang={lang}/>
    </div>
  );
};

export default BondsSimulator;

