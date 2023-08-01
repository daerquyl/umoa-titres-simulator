import React, { useState, useEffect } from "react";
import {getEmetteurs, getISINs} from "../services/SimulatorService";

import { FormBuilder } from "./FormBuilder"
import { BondFormBuilderDetails } from "./BondFormBuilderDetails";

const BondSimulatorInput = ({formData, updateFormData, lang}) => {
  const [emetteurs, setEmetteurs] = useState([]);
  const [emetteur, setEmetteur] = useState();

  const [isins, setIsins] = useState([]);
  const [isin, setIsin] = useState();
 
  useEffect(() => {
    const fetchData = async () => {
      setEmetteurs(await getEmetteurs());
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
  };

  const onFormChange = (event) => {
    const { name, value } = event.target;
    let newValue = {[name]: value };
    updateFormData(newValue);
  };

  const formDetails = BondFormBuilderDetails ({
    emetteur,
    emetteurs,
    onEmetteurChange,
    isin,
    isins,
    onIsinChange,
    formData,
    onFormChange,
    updateFormData,
    lang
  })

  return (
    <>
    <div>
      {formDetails.map((field, index) => (FormBuilder.buildFieldGroup(field)))}
    </div>
    </>
  );  
};

export default BondSimulatorInput;
