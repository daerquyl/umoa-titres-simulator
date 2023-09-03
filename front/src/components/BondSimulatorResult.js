import React, { useState } from "react";
import { TranslationService } from "../services/TranslationService";
import RateFormat from "./RateFormat";
import XofFormat from "./XOFFormat";

const BondSimulatorResult = ({results, lang}) => {
  return (
    <div className="bg-light">
      <h5 className="text-center bg-secondary text-white my-4 py-2 ">{TranslationService.translate("titre_resultats", lang)}</h5>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("maturite_residuel", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary">{results.maturiteResiduelle ?? 0} jours</span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("taux_rendement", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><RateFormat value={results.tauxRendement} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("montant_net", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><XofFormat value={results.montantNet} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("interets", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><XofFormat value={results.interets} /></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BondSimulatorResult;