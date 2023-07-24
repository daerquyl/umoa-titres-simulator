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
  updateFormData,
  triggerSubmit,
  lang,
}) => {
  const onCouponChanged = (e, maturiteResiduel) => {
    onFormChange(e);

    let coupon = e.target.name == "coupon" ? e.target.value : formData.coupon;
    let maturite = maturiteResiduel ? maturiteResiduel : formData.maturiteResiduel;

    if(!maturite) return;
    if(!coupon) return;

    let newTauxRendement = (coupon / 100) / (1 - (coupon / 100) * (formData.maturiteResiduel / 360)) * 100;
    updateFormData({tauxRendement: newTauxRendement})
  };

  const onDatesChanged = (e) => {
    onFormChange(e);

    var dateValeur = e.target.name == "dateValeur" ? e.target.value : formData.dateValeur;
    var dateEcheance = e.target.name == "dateEcheance" ? e.target.value : formData.dateEcheance;

    if (!dateValeur || !dateEcheance) return

    const dateValeurD = new Date(dateValeur) ;
    const dateEcheanceD = new Date(dateEcheance);

    const days = Math.floor(
      (dateEcheanceD - dateValeurD) / (1000 * 60 * 60 * 24)
    );

    let newMaturiteResiduel = days + 1;
    updateFormData({maturiteResiduel: newMaturiteResiduel})
    onCouponChanged(e, newMaturiteResiduel);
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
      onChange: onCouponChanged,
      onBlur: triggerSubmit,
    },
    {
      label: TranslationService.translate("valeur_nominale", lang),
      type: "number",
      name: "valeurNominale",
      value: formData.valeurNominale,
      onChange: onFormChange,
      onBlur: triggerSubmit,
      formatNumber: true,
      disabled: true,
    },
    {
      label: TranslationService.translate("montant_placement", lang),
      type: "number",
      name: "montantAPlacer",
      value: formData.montantAPlacer,
      onChange: onFormChange,
      onBlur: triggerSubmit,
      formatNumber: true,
    },
  ];

  return details;
};
