import { TranslationService } from "../services/TranslationService";
import moment from 'moment';

export const BondFormBuilderDetails = ({
  emetteur,
  emetteurs,
  onEmetteurChange,
  isin,
  isins,
  onIsinChange,
  formData,
  onFormChange,
  triggerSubmit,
  lang,
}) => {
  const onTauxRendementDetailsChanged = (e) => {
    var coupon = e.target.name == "coupon" ? e.target.value : formData.coupon;
    var maturiteResiduel = e.target.name == "maturiteResiduel" ? e.target.value : formData.maturiteResiduel;
    if (formData.coupon === 0) return 0;
    formData.tauxRendement =
      (coupon / 100) /
      (1 - (coupon / 100) * (maturiteResiduel / 360)) *
      100;
    onFormChange(e);
  };

  const onDatesChanged = (e) => {
    var dateValeur = e.target.name == "dateValeur" ? e.target.value : formData.dateValeur;
    var dateEcheance = e.target.name == "dateEcheance" ? e.target.value : formData.dateEcheance;

    const dateValeurD = new Date(dateValeur) ;
    const dateEcheanceD = new Date(dateEcheance);

    if (!dateValeurD || !dateEcheanceD) {
      return 0;
    }

    const days = Math.floor(
      (dateEcheanceD - dateValeurD) / (1000 * 60 * 60 * 24)
    );
    formData.maturiteResiduel = days + 1;

    onFormChange(e);
  };

  var details = [
    {
      label: TranslationService.translate("emetteur", lang),
      name: "emetteur",
      value: emetteur,
      onChange: onEmetteurChange,
      options: {
        getList: () => emetteurs,
        getValue: (e) => e,
        getLabel: (e) => e,
      },
    },
    {
      label: TranslationService.translate("isin", lang),
      name: "isin",
      value: isin,
      onChange: onIsinChange,
      options: {
        getList: () => isins,
        getValue: (i) => i,
        getLabel: (i) => i,
      },
    },
    {
      label: TranslationService.translate("date_valeur", lang),
      type: "date",
      name: "dateValeur",
      value: formData.dateValeur,
      onChange: onDatesChanged,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("date_echeance", lang),
      type: "date",
      name: "dateEcheance",
      value: formData.dateEcheance,
      onChange: onDatesChanged,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("taux_pre_compte", lang),
      type: "number",
      step: "0.01",
      name: "coupon",
      value: formData.coupon,
      onChange: onTauxRendementDetailsChanged,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("maturite_residuel", lang),
      name: "maturiteResiduel",
      value: formData.maturiteResiduel,
      onChange: onFormChange,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("valeur_nominale", lang),
      type: "number",
      step: "0.01",
      name: "valeurNominale",
      value: formData.valeurNominale,
      onChange: onFormChange,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("taux_rendement", lang),
      type: "number",
      step: "0.01",
      name: "tauxRendement",
      value: formData.tauxRendement,
      onChange: onFormChange,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("montant_placement", lang),
      type: "number",
      name: "montantAPlacer",
      value: formData.montantAPlacer,
      onChange: onFormChange,
      onBlur: triggerSubmit,
    },
  ];

  return details;
};
