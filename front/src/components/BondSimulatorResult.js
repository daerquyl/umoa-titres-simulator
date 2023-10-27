import React, { useState } from "react";
import { TranslationService } from "../services/TranslationService";
import RateFormat from "./RateFormat";
import XofFormat from "./XofFormat";

const BondSimulatorResult = ({results, lang}) => {

  const dureeResiduelleString = (duration, lang) => {
    let description = "";
    let removePluralIfNeeded = (number, desc) => number === 1 ? desc.replace("s","") : desc;
    description = duration?.years && duration?.years !== 0 ? `${duration.years} ${removePluralIfNeeded(duration.years, TranslationService.translate("years", lang))}` : description;
    description = duration?.days && duration?.days !== 0 ? `${description} ${duration.days} ${removePluralIfNeeded(duration.days, TranslationService.translate("days", lang))}` : description;
    return description.trim();
  }

  return (
    <div className="bg-light">
      <h5 className="text-center bg-secondary text-white my-4 py-2 ">{TranslationService.translate("titre_resultats", lang)}</h5>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("maturite_residuel", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary">{dureeResiduelleString(results?.dureeResiduelle, lang)}</span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("taux_rendement", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><RateFormat value={results?.tauxRendement} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("montant_net", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><XofFormat value={results?.montantNet} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("interets", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><XofFormat value={results?.interets} /></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BondSimulatorResult;