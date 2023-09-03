import { paste } from "@testing-library/user-event/dist/paste";

export const TranslationService = {
    dictionary: {
        titre_principal: {fr: "Simulateur d'intérêts et de rentabilité", en: "Interest Simulator"},

        titre_caracteristiques_ot: {
            fr: "Caractéristiques de votre placement (OT) - convention de base : Exact/Exact ISMA", 
            en: "Features of your investment (OT) - base convention: Exact/Exact ISMA"
        },

        titre_caracteristiques_bonds: {
            fr: "Caractéristiques de votre placement (BT) - convention de base : Exact/360", 
            en: "Features of your investment (BT) - base convention: Exact/360"
        },

        titre_ot: { fr: "OAT", en: "OAT" },
        titre_bons: { fr: "BONS", en: "BONDS" },

        emetteur: {fr: "Emetteur", en: "Issuer"},
        isin: {fr: "ISIN", en: "ISIN"},
        mode_amortissement: {fr: "Mode Amortissement", en: "Amortization Type"},
        periodicite: {fr: "Periodicité", en: "Frequency"},
        date_valeur: {fr: "Date de valeur", en: "Value Date"},
        coupon: {fr: "Taux d'intérêt (coupon) de votre placement", en: "Interest rate on your investment"},
        differe: {fr: "Differé", en: "Deferred"},
        date_echeance: {fr: "Date d'échéance", en: "Maturity Date"},
        maturite: {fr: "Maturité en années", en: "Maturity in years"},
        maturite_jour: {fr: "Maturité (jours)", en: "Maturity (days)"},
        valeur_nominale: {fr: "Valeur nominale", en: "Face value"},
        montant_placement: {fr: "Montant souhaité pour le placement", en: "Amount intended for the investment"},

        titre_resultats: {fr: "Résultats de votre placement", en: "Investment Results"},
        determiner_prix: {fr: "Déterminer mon prix", en: "Calculate my price"},
        determiner_rendement: {fr: "Déterminer mon rendement", en: "Calculate my return (yield)"},
        taux_rendement: {fr: "Le taux de rendement du placement", en: "The yield"},
        taux_rendement_voulu: {fr: "Taux de rendement du placement", en: "Calculate my return (yield)"},
        coupon_couru: {fr: "Le Coupon Couru", en: "Accrued coupon"},
        prix_placement: {fr: "Le prix du placement", en: "The price of investment"},
        prix_placement_voulu: {fr: "Prix souhaité pour le placement", en: "Desired price for the investment"},
        montant_net: {fr: "Le montant net", en: "Net amount"},
        interet_couru: {fr: "Dont interêts couru", en: "Including accrued interest"},
        interets: {fr: "Interêts", en: "Interest"},

        titre_tableau_amortissement: {fr: "Tableau d'amortissement (FCFA)", en: "Amortization plan"},
        afficher_tableau_amortissement: {fr: "Afficher le tableau d'amortissement", en: "Show amortization plan"},
        ta_fraction: {fr: "Fraction", en: "Fraction"},
        ta_date: {fr: "Date", en: "Date"},
        ta_encours_debut: {fr: "Encours Debut", en: "Outstanding Before"},
        ta_encours_fin: {fr: "Encours Fin", en: "Outstanding After"},
        ta_interet: {fr: "Intérêts", en: "Interest"},
        ta_amortissement: {fr: "Amortissement", en: "Amortization"},
        ta_service: {fr: "Service", en: "Service"},
        

        taux_pre_compte: {fr: "Taux Pré Compté", en: "Rate Pré Compté"},

        maturite_residuel: {fr: "Maturité résiduel", en: "Remaining Maturity"},
        
        close_modal: {fr: "Fermer", en: "Close"},
    },

    translate: (word, lang) => {
        let words = TranslationService.dictionary[word];
        return words ? lang == "fr" ? words.fr : words.en : '';
    },
};
