import React, { useEffect, useState } from "react";

import { TranslationService } from "../services/TranslationService";
import { getAmortizationTable } from "../services/SimulatorService";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import XofFormat from "./XOFFormat";

const OATAmortizationTable = ({lang, newResultRetrieved, resetNewResultRetrieved, data}) => {
  const [afficherTableauAmortissement, setAfficherTableauAmortissement] = useState(false);
  const [amortizationTable, setAmortizationTable] = useState([]);

  useEffect(() => {
    const fetchAmortization = async () => {
      if(shouldFetchAmortizationTable()){
        data = await getAmortizationTable(data)
        setAmortizationTable(data)
        resetNewResultRetrieved();
      }
    }
    fetchAmortization();
  }, [newResultRetrieved, afficherTableauAmortissement])

  function closeModal() {
    setAfficherTableauAmortissement(false);
  }

  const shouldFetchAmortizationTable = () => afficherTableauAmortissement && newResultRetrieved;

  const lineProperties = [
    {name: "fraction"}, 
    {name: "date"}, 
    {name: "encours", cfa: true}, 
    {name: "interets", cfa: true}, 
    {name: "amortissement", cfa: true}, 
    {name: "service", cfa: true}
  ];

  return (
    <div className="mb-2">
      <div className="text-center">
        <input type="checkbox" className="form-check-input"
          checked={afficherTableauAmortissement}
          onChange={() => setAfficherTableauAmortissement(!afficherTableauAmortissement)}
        />
        &nbsp;
        <label className="form-check-label">{TranslationService.translate("afficher_tableau_amortissement", lang)}</label>
      </div>
      {afficherTableauAmortissement &&
        <Modal show={afficherTableauAmortissement} onHide={closeModal} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
            <Modal.Title><h5 className="text-primary">{TranslationService.translate("titre_tableau_amortissement", lang)}</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table table-striped mt-2">
              <thead>
                <th>{TranslationService.translate("ta_fraction", lang)}</th>
                <th>{TranslationService.translate("ta_date", lang)}</th>
                <th>{TranslationService.translate("ta_encours", lang)}</th>
                <th>{TranslationService.translate("ta_interet", lang)}</th>
                <th>{TranslationService.translate("ta_amortissement", lang)}</th>
                <th>{TranslationService.translate("ta_service", lang)}</th>
              </thead>
              <tbody>
                {amortizationTable && amortizationTable.map((line, index) => 
                    <tr key={index}>
                      {lineProperties.map(p => <td>{ p.cfa ? <XofFormat value={p} printCurrency={false} /> : line[p]}</td>)}
                    </tr>
                )}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>{TranslationService.translate("close_modal", lang)}</Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
};

export default OATAmortizationTable;