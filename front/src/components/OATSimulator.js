import React, { useState, useEffect } from "react";
import OATAmortizationTable from "./OATAmortizationTable";
import OATSimulatorResult from "./OATSimulatorResult";
import OATSimulatorInput from "./OATSimulatorInput";
import {getResultOATs} from "../services/SimulatorService";
import { TranslationService } from "../services/TranslationService";

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
      differe: "0",
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
    formData.montantAPlacer &&
    (formData.prix || formData.tauxRendement)
  }

  const canSubmit = () => {
    return triggerSubmit && isFormValid() ;
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
      <hr />
        <h5 className="text-center">{TranslationService.translate("titre_caracteristiques_ot")}</h5>
      <hr />
      <OATSimulatorInput formData={formData} 
      updateFormData={updateFormData} 
      triggerSubmit={doTriggerSubmit}
      lang={lang}/>

      <OATSimulatorResult results={results} lang={lang} />

      <OATAmortizationTable lang={lang} 
        newResultRetrieved={newResultRetrieved}
        resetNewResultRetrieved={() => setNewResultRetrieved(false)} 
        data={forgeAmortizationRequestData()}/>    
    </div>
  )
};

export default OATSimulator;
