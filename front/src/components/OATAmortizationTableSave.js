import React, { useEffect, useState } from "react";

import { TranslationService } from "../services/TranslationService";
import { getAmortizationTable } from "../services/SimulatorService";

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

  const shouldFetchAmortizationTable = () => afficherTableauAmortissement && newResultRetrieved;

  const lineProperties = ["fraction", "date", "encours", "interets", "amortissement", "service"];

  return (
    <div class="mb-2">
      <div className="text-center">
        <input type="checkbox" className="form-check-input"
          checked={afficherTableauAmortissement}
          onChange={() => setAfficherTableauAmortissement(!afficherTableauAmortissement)}
        />
        &nbsp;
        <label className="form-check-label">{TranslationService.translate("afficher_tableau_amortissement", lang)}</label>
      </div>
      {afficherTableauAmortissement &&
        <>
        <table className="table mt-2">
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
                  {lineProperties.map(p => <td>{line[p]}</td>)}
                </tr>
            )}
          </tbody>
        </table>
        </>
      }
    </div>
  );
};

export default OATAmortizationTable;