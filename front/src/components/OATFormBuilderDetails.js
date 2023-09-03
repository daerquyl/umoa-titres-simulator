import { TranslationService } from "../services/TranslationService"

export const OATFormBuilderInputDetails = ({
    emetteur,
    emetteurs,
    onEmetteurChange,
    isin,
    isins,
    onIsinChange,
    onModeAmortissementChanged,
    isInFine,
    modeAmortissements,
    periodicites,
    maturiteEnAnnes,
    formData,
    onFormChange,
    lang
}) => {

    return [
        { label: TranslationService.translate("emetteur", lang), name: "emetteur", value: emetteur, onChange: onEmetteurChange, options: { getList: () => emetteurs, getValue: (e) => e, getLabel: e => e }},
        { label: TranslationService.translate("isin", lang), name: "isin", value: isin, onChange: onIsinChange, options: { getList: () => isins, getValue: (i) => i, getLabel: i => i } },
        { label: TranslationService.translate("mode_amortissement", lang), name: "modeAmortissement", value: formData.modeAmortissement, onChange: onModeAmortissementChanged, options: { getList: () => modeAmortissements, getValue: (ma) => ma.code, getLabel: ma => ma.label } },
        { label: TranslationService.translate("differe", lang), type: "number", step: "1", name: "differe", value: formData.differe, onChange: onFormChange, disabled: isInFine },
        { label: TranslationService.translate("periodicite", lang), name: "periodicite", value: formData.periodicite, onChange: onFormChange, options: { getList: () => periodicites, getValue: (p) => p.code, getLabel: p => p.label } },
        { label: TranslationService.translate("date_valeur", lang), type: "date", name: "dateValeur", value: formData.dateValeur, onChange: onFormChange },
        { label: TranslationService.translate("coupon", lang), type: "number", name: "coupon", value: formData.coupon, onChange: onFormChange, formatPercent: true },
        { label: TranslationService.translate("maturite", lang), name: "maturiteEnAnnes", value: formData.maturiteEnAnnes, onChange: onFormChange, options: { getList: () => maturiteEnAnnes, getValue: m => m, getLabel: m => m }, disabled: isInFine },
        { label: TranslationService.translate("date_echeance", lang), type: "date", name: "dateEcheance", value: formData.dateEcheance, onChange: onFormChange },
        { label: TranslationService.translate("valeur_nominale", lang), type: "number", name: "valeurNominale", value: formData.valeurNominale, onChange: onFormChange, formatNumber: true, disabled: true },
        { label: TranslationService.translate("montant_placement", lang), type: "number", name: "montantAPlacer", value: formData.montantAPlacer, onChange: onFormChange, formatNumber: true},
        { label: TranslationService.translate("taux_rendement_voulu", lang), type: "number", name: "tauxRendement", value: formData.tauxRendement, onChange: onFormChange, formatPercent: true},
        { label: TranslationService.translate("prix_placement_voulu", lang), type: "number", name: "prix", value: formData.prix, onChange: onFormChange, formatPercent: true}
    ]
}