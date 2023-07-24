import React, { useState, useEffect } from "react";
import OATAmortizationTable from "./OATAmortizationTable";
import OATSimulatorResult from "./OATSimulatorResult";
import OATSimulatorInput from "./OATSimulatorInput";
import {getResultOATs} from "../services/SimulatorService";

const OATSimulator = ({lang}) => {
  const [formStateIsValid, setFormStateIsValid] = useState(false);
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
      differe: "",
  })
  const [results, setResults] = useState({
    prix: "",
    tauxRendement: "",
    couponCouru: "",
    interets: "",
    montantNet: "",
  });
  const [triggerSubmit, setTriggerSubmit] = useState(false);
  const [newResultRetrieved, setNewResultRetrieved] = useState(false);
  

  useEffect(() => {
    if(canSubmit())
    { 
      submitForm();
    }
    setTriggerSubmit(false);
  }, [triggerSubmit])

  const isFormValid = () => {
    return formData.modeAmortissement && 
    formData.periodicite && 
    formData.dateValeur && 
    formData.coupon && 
    formData.maturiteEnAnnes && 
    formData.dateEcheance && 
    formData.valeurNominale && 
    formData.montantAPlacer
    && ((formData.modeAmortissement == 'ACD' && formData.differe) || (formData.modeAmortissement != 'ACD'))
  }

  const canSubmit = () => {
    return triggerSubmit && isFormValid() && (formData.prix || formData.tauxRendement);
  }

  const forgeAmortizationRequestData = () => {
    return {
      ...formData,
      prix: `${results.prix}`,
      tauxRendement: `${results.tauxRendement}`
    }
  }

  const submitForm = () => {
    const launchSimulation = async () => {
      let resultats = await getResultOATs(formData);
      setResults(resultats);
      setNewResultRetrieved(true);
    }

    launchSimulation();
  }

  const updateFormData = (updates) => {
    var newFormData = {...formData, ...updates};
    setFormData(newFormData);
    setFormStateIsValid(isFormValid(newFormData));
  }

  const doTriggerSubmit = () => setTriggerSubmit(true);

  return (
    <div>
      <OATSimulatorInput formData={formData} 
      updateFormData={updateFormData} 
      triggerSubmit={doTriggerSubmit}
      lang={lang}/>

      <OATSimulatorResult formData={formData} 
        formStateIsValid={formStateIsValid} 
        updateFormData={updateFormData} 
        results={results} 
        triggerSubmit={doTriggerSubmit}
        lang={lang}
        />

      <OATAmortizationTable lang={lang} 
        newResultRetrieved={newResultRetrieved}
        resetNewResultRetrieved={() => setNewResultRetrieved(false)} 
        data={forgeAmortizationRequestData()}/>    
    </div>
  )
};

export default OATSimulator;
