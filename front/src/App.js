import React, { useState } from "react";
import OATSimulator from "./components/OATSimulator";
import BondsSimulator from "./components/BondsSimulator";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap.custom.css';
import { TranslationService } from "./services/TranslationService";

const App = () => {
  const [activeTab, setActiveTab] = useState("OAT");
  const [lang, setLang] = useState("fr");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const changeLang = (lang) => {
    console.log(lang);
    setLang(lang);
  }

  return (
    <div className="container">
      <p className="text-center">
        <img src="https://www.umoatitres.org/wp-content/uploads/2018/05/logo_UT_simple.png" alt="Logo" width="80%"/>
        <span role="button" onClick={()=>changeLang("fr")}><img src="https://flagcdn.com/24x18/fr.png" alt="FR"/></span>
        &nbsp;
        <span role="button" onClick={()=>changeLang("en")}><img src="https://flagcdn.com/24x18/gb.png" alt="EN"/></span>
      </p>
      <h2 className="text-center py-4 bg-primary text-white">{TranslationService.translate("titre_principal", lang)}</h2>
      <ul className="nav nav-pills nav-fill nav-justified">
        <li className="nav-item">
          <a
            className={`fw-bold nav-link ${activeTab === "OAT" ? "active bg-secondary" : "bg-light"}`}
            onClick={() => handleTabChange("OAT")}
          >
            {TranslationService.translate("titre_ot", lang)}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`fw-bold nav-link ${activeTab === "BONDS" ? "active bg-secondary" : "bg-light"}`}
            onClick={() => handleTabChange("BONDS")}
          >
            {TranslationService.translate("titre_bons", lang)}
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === "OAT" ? "active" : ""}`}
          id="oat-tab"
        >
          <OATSimulator lang={lang}/>
        </div>
        <div
          className={`tab-pane ${activeTab === "BONDS" ? "active" : ""}`}
          id="bonds-tab"
        >
          <BondsSimulator lang={lang}/>
        </div>
      </div>
    </div>
  );
};

export default App;

