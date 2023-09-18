import React, { useState, useEffect } from "react";
import OATAmortizationTable from "./OATAmortizationTable";
import OATSimulatorResult from "./OATSimulatorResult";
import OATSimulatorInput from "./OATSimulatorInput";
import {getResultOATs} from "../services/SimulatorService";
import { TranslationService } from "../services/TranslationService";
import { debounce } from 'lodash';

const OATSimulator = ({lang}) => {
  const [formData, setFormData] = useState({
      modeAmortissement: "",
      periodicite: "",
      dateValeur: "",
      coupon: "",
      maturiteEnAnnes: "",
      dateEcheance: "",
      valeurNominale : "10000",
      montantAPlacer: "",
      prix: "",
      tauxRendement: "",
      differe: "0",
  })

  const initialResults = {
    prix: "",
    tauxRendement: "",
    couponCouru: "",
    interets: "",
    montantNet: "",
  }

  const [results, setResults] = useState(initialResults);
  const [newResultRetrieved, setNewResultRetrieved] = useState(false);

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
    return formData.modeAmortissement && 
    formData.periodicite && 
    formData.dateValeur && 
    formData.coupon && 
    formData.dateEcheance && 
    formData.valeurNominale && 
    (formData.prix || formData.tauxRendement)
  }

  const canSubmit = () => {
    return isFormValid();
  }

  const forgeAmortizationRequestData = () => {
    return {
      ...formData,
      maturiteEnAnnes: formData.maturiteEnAnnes || 0,
      montantAPlacer: formData.montantAPlacer || 0,
      prix: `${results.prix}` || "",
      tauxRendement: `${results.tauxRendement}` || ""
    }
  }

  const submitForm = async () => {
    const launchSimulation = async () => {
      let defaultValues = {
        maturiteEnAnnes: formData.maturiteEnAnnes || 0, 
        prix: formData.prix || 0, 
        tauxRendement: formData.tauxRendement || 0,
        montantAPlacer: formData.montantAPlacer || 0
      };

      let details = {...formData, ...defaultValues};
      let resultats = await getResultOATs(details);
      setResults(resultats);
      setNewResultRetrieved(true);
    }

    await launchSimulation();
  }

  const updateFormData = (updates) => {
    setFormData(prev => ({...prev, ...updates}));
  }

  return (
    <div>
      <hr />
        <h5 className="text-center">{TranslationService.translate("titre_caracteristiques_ot", lang)}</h5>
      <hr />
      <OATSimulatorInput formData={formData} updateFormData={updateFormData} lang={lang}/>

      <OATSimulatorResult results={results} lang={lang} />

      <OATAmortizationTable lang={lang} 
        newResultRetrieved={newResultRetrieved}
        resetNewResultRetrieved={() => setNewResultRetrieved(false)} 
        data={forgeAmortizationRequestData()}/>    
    </div>
  )
};

export default OATSimulator;
