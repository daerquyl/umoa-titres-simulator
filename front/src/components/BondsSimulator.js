import React, { useState, useEffect } from "react";
import BondSimulatorInput  from "./BondSimulatorInput";
import {getResultBonds} from "../services/SimulatorService";
import BondSimulatorResult from "./BondSimulatorResult";
import { TranslationService } from "../services/TranslationService";

const BondsSimulator = ({lang}) => {
  // Code pour le simulateur des obligations (Bonds)
  const [formData, setFormData] = useState({
      dateValeur: "",
      dateEcheance: "",
      coupon: "",
      valeurNominale : "1000000",
      montantAPlacer: "",
  })
  const [results, setResults] = useState({
    interets: "",
    montantNet: "",
    tauxRendement: "",
    maturiteResiduelle: ""
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
    formData.valeurNominale && 
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
      <hr />
      <h5 className="text-center">{TranslationService.translate("titre_caracteristiques_bonds", lang)}</h5>
      <hr />
      <BondSimulatorInput formData={formData} updateFormData={updateFormData} lang={lang}/>
      <BondSimulatorResult results={results} lang={lang}/>
    </div>
  );
};

export default BondsSimulator;

