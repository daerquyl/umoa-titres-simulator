import { TranslationService } from "../services/TranslationService";
import RateFormat from "./RateFormat";
import XofFormat from "./XOFFormat";


const OATSimulatorResult = ({results, lang}) => {

  return (
    <div className="bg-light">
      <h5 className="text-center bg-secondary text-white my-4 py-2 ">{TranslationService.translate("titre_resultats", lang)}</h5>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("coupon_couru", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><RateFormat value={results.couponCouru} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("taux_rendement", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary"><RateFormat value={results.tauxRendement} /></span></td>
          </tr>
          <tr>
            <td className="w-60 fw-bold bg-light">{TranslationService.translate("prix_placement", lang)}:</td>
            <td className="w-30 bg-light"><span className="badge bg-secondary">
              <RateFormat value={results.prix} />
              (<XofFormat value={results.prix * 100} />)
            </span></td>
          </tr>
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