import React, { useState } from "react";
import { TranslationService } from "../services/TranslationService";
import RateFormat from "./RateFormat";
import XofFormat from "./XOFFormat";


const OATSimulatorResult = ({formData, formStateIsValid, updateFormData, results, triggerSubmit, lang}) => {
  const [calculatePrice, setCalculatePrice] = useState(true);

  const onFormChange = (event) => updateFormData({
    [event.target.name] : event.target.value
  });

  const onCalculationTypeChanged = () =>{
    setCalculatePrice(!calculatePrice);
    updateFormData({
      ...formData,
      prix: "",
      tauxRendement: ""
    })
  }

  return (
    <div className="bg-light">
      <h5 className="text-center bg-secondary text-white my-4 py-2 ">{TranslationService.translate("titre_resultats", lang)}</h5>
      <div className="form-group row mb-4 text-center">
        <div className="col-md-6">
          <input type="radio" name="prix_rendement" className="form-check-input" checked={calculatePrice}
            onChange={onCalculationTypeChanged}
          />
          &nbsp;
          <label className="form-check-label">{TranslationService.translate("determiner_prix", lang)}</label>
        </div>
        <div className="col-md-6">
          <input type="radio" name="prix_rendement" className="form-check-input" checked={!calculatePrice}
            onChange={onCalculationTypeChanged}
          />
          &nbsp;
          <label className="form-check-label">{TranslationService.translate("determiner_rendement", lang)}</label>
        </div>
      </div>
      {calculatePrice && (
        <div className="form-group row px-2">
          <label className="col-md-8 col-form-label">{TranslationService.translate("taux_rendement_voulu", lang)}:</label>
          <div className="col-md-4">
            <input type="number" step="0.01" className="form-control form-control-sm" name="tauxRendement" value={formData.tauxRendement}
            onChange={onFormChange}
            onBlur={triggerSubmit}
            disabled={!formStateIsValid}
            />
          </div>
        </div>
      )}
      {!calculatePrice && (
        <div className="form-group row px-2">
          <label className="col-md-8 col-form-label">{TranslationService.translate("prix_placement_voulu", lang)}:</label>
          <div className="col-md-4">
            <input type="number" className="form-control form-control-sm" name="prix" value={formData.prix}
            onChange={onFormChange} 
            onBlur={triggerSubmit}
            disabled={!formStateIsValid}/>
          </div>
        </div>
      )}

      <table className="table table-borderless">
        <tbody>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("coupon_couru", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><RateFormat value={results.couponCouru} /></span></td>
          </tr>
          {!calculatePrice &&
            <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("taux_rendement", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><RateFormat value={results.tauxRendement} /></span></td>
          </tr>
          }
          {calculatePrice &&
            <tr>
              <td className="w-60 fw-bold bg-light">{TranslationService.translate("prix_placement", lang)}:</td>
              <td className="w-30 bg-light"><span className="badge bg-secondary">
                <RateFormat value={results.prix} />
                (<XofFormat value={results.prix * 100} />)
              </span></td>
            </tr>
          }
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("montant_net", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><XofFormat value={results.montantNet} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("interet_couru", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><XofFormat value={results.interets} /></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OATSimulatorResult;