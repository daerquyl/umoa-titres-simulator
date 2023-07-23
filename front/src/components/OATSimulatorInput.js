import React, { useState, useEffect } from "react";
import {getEmetteurs, 
  getISINs, 
  getModeAmortissements,
  getPeriodicites,
  getMaturites, 
  getOATSimulationDetails} from "../services/SimulatorService";
import { TranslationService } from "../services/TranslationService";

import { FormBuilder } from "./FormBuilder"
import { OATFormBuilderInputDetails } from "./OATFormBuilderDetails"

const OATSimulatorInput = ({formData, updateFormData, triggerSubmit, lang}) => {
  const [emetteurs, setEmetteurs] = useState([]);
  const [emetteur, setEmetteur] = useState();

  const [isins, setIsins] = useState([]);
  const [isin, setIsin] = useState();

  const [modeAmortissements, setModeAmortissements] = useState([]);
  const [periodicites, setPeriodicites] = useState([]);
  const [maturiteEnAnnes, setMaturiteEnAnnes] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      setEmetteurs(await getEmetteurs());
      setModeAmortissements(await getModeAmortissements());
      setPeriodicites(await getPeriodicites());
      setMaturiteEnAnnes(await getMaturites());
    };

    fetchData();
  }, []);

  const onEmetteurChange = async (event) => {
    const newEmetteur = event.target.value;
    setEmetteur(newEmetteur);
    setIsins(await getISINs(newEmetteur));
  };

  const onIsinChange = async (event) => {
    const newIsin = event.target.value;
    setIsin(newIsin);
    updateFormData(await getOATSimulationDetails(newIsin));
  };

  const onFormChange = (event) => {
    const { name, value } = event.target;
    updateFormData({ ...formData, [name]: value });
  };

  const formDetails = OATFormBuilderInputDetails ({
    emetteur,
    emetteurs,
    onEmetteurChange,
    isin,
    isins,
    onIsinChange,
    modeAmortissements,
    periodicites,
    maturiteEnAnnes,
    formData,
    onFormChange,
    triggerSubmit,
    lang
  })

  return (
    <div>
      <hr />
      <h5 className="text-center">{TranslationService.translate("titre_caracteristiques_ot")}</h5>
      <hr />
      {formDetails.map((field, index) => (FormBuilder.buildFieldGroup(field)))}
    </div>
  );  
};

export default OATSimulatorInput;
