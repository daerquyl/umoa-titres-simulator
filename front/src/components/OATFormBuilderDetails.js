import { TranslationService } from "../services/TranslationService"
import { useState } from "react";

export const OATFormBuilderInputDetails = ({
    emetteur,
    emetteurs,
    onEmetteurChange,
    isin,
    isins,
    onIsinChange,
    onModeAmortissementChanged,
    showDiffere,
    modeAmortissements,
    periodicites,
    maturiteEnAnnes,
    formData,
    onFormChange,
    triggerSubmit,
    lang
}) => {

    return [
        { label: TranslationService.translate("emetteur", lang), name: "emetteur", value: emetteur, onChange: onEmetteurChange, options: { getList: () => emetteurs, getValue: (e) => e, getLabel: e => e }},
        { label: TranslationService.translate("isin", lang), name: "isin", value: isin, onChange: onIsinChange, options: { getList: () => isins, getValue: (i) => i, getLabel: i => i } },
        { label: TranslationService.translate("mode_amortissement", lang), name: "modeAmortissement", value: formData.modeAmortissement, onChange: onModeAmortissementChanged, options: { getList: () => modeAmortissements, getValue: (ma) => ma.code, getLabel: ma => ma.label } },
        { label: TranslationService.translate("differe", lang), type: "number", step: "1", name: "differe", value: formData.differe, onChange: onFormChange, onBlur: triggerSubmit, disabled: !showDiffere },
        { label: TranslationService.translate("periodicite", lang), name: "periodicite", value: formData.periodicite, onChange: onFormChange, onBlur: triggerSubmit, options: { getList: () => periodicites, getValue: (p) => p.code, getLabel: p => p.label } },
        { label: TranslationService.translate("date_valeur", lang), type: "date", name: "dateValeur", value: formData.dateValeur, onChange: onFormChange, onBlur: triggerSubmit },
        { label: TranslationService.translate("coupon", lang), type: "number", step: "0.01", name: "coupon", value: formData.coupon, onChange: onFormChange, onBlur: triggerSubmit },
        { label: TranslationService.translate("maturite", lang), name: "maturiteEnAnnes", value: formData.maturiteEnAnnes, onChange: onFormChange, onBlur: triggerSubmit, options: { getList: () => maturiteEnAnnes, getValue: m => m, getLabel: m => m } },
        { label: TranslationService.translate("date_echeance", lang), type: "date", name: "dateEcheance", value: formData.dateEcheance, onChange: onFormChange, onBlur: triggerSubmit },
        { label: TranslationService.translate("valeur_nominale", lang), type: "number", step: "0.01", name: "valeurNominale", value: formData.valeurNominale, onChange: onFormChange, onBlur: triggerSubmit },
        { label: TranslationService.translate("montant_placement", lang), type: "number", name: "montantAPlacer", value: formData.montantAPlacer, onChange: onFormChange, onBlur: triggerSubmit}
    ]
}