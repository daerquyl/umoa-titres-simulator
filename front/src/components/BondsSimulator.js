import React, { useState, useEffect } from "react";
import BondSimulatorInput  from "./BondSimulatorInput";
import {getResultBonds} from "../services/SimulatorService";
import BondSimulatorResult from "./BondSimulatorResult";
import { TranslationService } from "../services/TranslationService";

import { debounce } from 'lodash'; // Import debounce from lodash

const BondsSimulator = ({lang}) => {
  // Code pour le simulateur des obligations (Bonds)
  const [formData, setFormData] = useState({
      dateValeur: "",
      dateEcheance: "",
      coupon: "",
      valeurNominale : "1000000",
      montantAPlacer: "",
  })

  const initialResults = {
    interets: "",
    montantNet: "",
    tauxRendement: "",
    maturiteResiduelle: ""
  };

  const [results, setResults] = useState(initialResults);

  const debouncedFetchData = debounce(async () => {
    try {
      if (!canSubmit()) {
        setResults(initialResults);
        return;
      }
      await submitForm();
    } catch (error) {
      console.error(error);
    }
  }, 300);

  useEffect(() => {
    debouncedFetchData();
    return () => debouncedFetchData.cancel();
  }, [formData]);

  const isFormValid = () => {
    const isValid = formData.dateValeur &&
    formData.dateEcheance && 
    formData.coupon && 
    formData.valeurNominale
    return isValid;
  }

  const updateFormData = (updates) => {
    setFormData(prev => ({...prev, ...updates}));
  }

  const canSubmit = () => {
    return isFormValid();
  }

  const submitForm = async () => {
    const launchSimulation = async () => {
      var data = !formData.montantAPlacer ? {...formData, montantAPlacer: 0} : formData;
      let resultats = await getResultBonds(data);
      setResults(resultats);
    }

    await launchSimulation();
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

