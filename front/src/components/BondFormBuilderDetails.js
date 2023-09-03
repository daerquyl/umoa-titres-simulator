import { TranslationService } from "../services/TranslationService";

export const BondFormBuilderDetails = ({
  emetteur,
  emetteurs,
  onEmetteurChange,
  isin,
  isins,
  onIsinChange,
  formData,
  onFormChange,
  lang,
}) => {
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
      onChange: onFormChange,
    },
    {
      label: TranslationService.translate("date_echeance", lang),
      type: "date",
      name: "dateEcheance",
      value: formData.dateEcheance,
      onChange: onFormChange,
    },
    {
      label: TranslationService.translate("taux_pre_compte", lang),
      type: "number",
      step: "0.01",
      name: "coupon",
      value: formData.coupon,
      onChange: onFormChange,
      formatPercent: true
    },
    {
      label: TranslationService.translate("valeur_nominale", lang),
      type: "number",
      name: "valeurNominale",
      value: formData.valeurNominale,
      onChange: onFormChange,
      formatNumber: true,
      disabled: true,
    },
    {
      label: TranslationService.translate("montant_placement", lang),
      type: "number",
      name: "montantAPlacer",
      value: formData.montantAPlacer,
      onChange: onFormChange,
      formatNumber: true,
    },
  ];

  return details;
};
