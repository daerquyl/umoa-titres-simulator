(this.webpackJsonpumoa_simulator=this.webpackJsonpumoa_simulator||[]).push([[0],{281:function(e,t){},320:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(80),s=n.n(c),u=(n(90),n(3)),i=n(4),o=n(5),l=n(2),b=(n(91),{dictionary:{titre_principal:{fr:"Simulateur d'int\xe9r\xeats et de rentabilit\xe9",en:"Interest Simulator"},titre_caracteristiques_ot:{fr:"Caract\xe9ristiques de votre placement (OT) - convention de base : Exact/Exact ISMA",en:"Features of your investment (OT) - base convention: Exact/Exact ISMA"},titre_caracteristiques_bonds:{fr:"Caract\xe9ristiques de votre placement (BT) - convention de base : Exact/360",en:"Features of your investment (BT) - base convention: Exact/360"},titre_ot:{fr:"OAT",en:"OAT"},titre_bons:{fr:"BONS",en:"BONDS"},emetteur:{fr:"Emetteur",en:"Issuer"},isin:{fr:"ISIN",en:"ISIN"},mode_amortissement:{fr:"Mode Amortissement",en:"Amortization Type"},periodicite:{fr:"Periodicit\xe9",en:"Frequency"},date_valeur:{fr:"Date de valeur",en:"Value Date"},coupon:{fr:"Taux d'int\xe9r\xeat (coupon) de votre placement(%)",en:"Interest rate on your investment(%)"},differe:{fr:"Differ\xe9",en:"Deferred"},date_echeance:{fr:"Date d'\xe9ch\xe9ance",en:"Maturity Date"},maturite:{fr:"Maturit\xe9 en ann\xe9es",en:"Maturity in years"},maturite_jour:{fr:"Maturit\xe9 (jours)",en:"Maturity (days)"},valeur_nominale:{fr:"Valeur nominale (FCFA)",en:"Face value (FCFA)"},montant_placement:{fr:"Montant souhait\xe9 pour le placement (FCFA)",en:"Amount intended for the investment(FCFA)"},titre_resultats:{fr:"R\xe9sultats de votre placement",en:"Investment Results"},determiner_prix:{fr:"D\xe9terminer mon prix%",en:"Calculate my price%"},determiner_rendement:{fr:"D\xe9terminer mon rendement",en:"Calculate my return (yield)"},taux_rendement:{fr:"Le taux de rendement du placement%",en:"The yield%"},taux_rendement_voulu:{fr:"Taux de rendement du placement%",en:"Calculate my return (yield)%"},coupon_couru:{fr:"Le Coupon Couru",en:"Accrued coupon"},prix_placement:{fr:"Le prix du placement%",en:"The price of investment%"},prix_placement_voulu:{fr:"Prix souhait\xe9 pour le placement%",en:"Desired price for the investment"},montant_net:{fr:"Le montant net",en:"Net amount"},interet_couru:{fr:"Dont inter\xeats couru",en:"Including accrued interest"},interets:{fr:"Inter\xeats",en:"Interest"},titre_tableau_amortissement:{fr:"Tableau d'amortissement",en:"Amortization plan"},afficher_tableau_amortissement:{fr:"Afficher le tableau d'amortissement",en:"Show amortization plan"},ta_fraction:{fr:"Fraction",en:"Fraction"},ta_date:{fr:"Date",en:"Date"},ta_encours_debut:{fr:"Encours Debut(FCFA)",en:"Outstanding Before(FCFA)"},ta_encours_fin:{fr:"Encours Fin(FCFA)",en:"Outstanding After(FCFA)"},ta_interet:{fr:"Int\xe9r\xeats(FCFA)",en:"Interest(FCFA)"},ta_amortissement:{fr:"Amortissement(FCFA)",en:"Amortization(FCFA)"},ta_service:{fr:"Service(FCFA)",en:"Service(FCFA)"},taux_pre_compte:{fr:"Taux Pr\xe9 Compt\xe9",en:"Rate Pr\xe9 Compt\xe9"},maturite_residuel:{fr:"Maturit\xe9 r\xe9siduel",en:"Remaining Maturity"},close_modal:{fr:"Fermer",en:"Close"}},translate:function(e,t){var n=b.dictionary[e];return n?"fr"==t?n.fr:n.en:""}}),m="http://ec2-16-170-208-138.eu-north-1.compute.amazonaws.com",d=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching data at ".concat(t," : ").concat(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t,n){var a,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Error posting data");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error posting data at ".concat(t,": ").concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),f="simulator/emetteurs",p="simulator/isins",h="simulator/isins/details",O="simulator/run/oat",x="simulator/run/bonds",v="simulator/amortization/oat",g=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(p,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(h,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{code:"IF",label:"IN FINE"},{code:"ACD",label:"Constant Diff\xe9r\xe9"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{code:"A",label:"Annuelle"},{code:"S",label:"Semestrielle"},{code:"T",label:"Trimestre"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["3","5","7","10","12","15"]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(O,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(x,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(v,t);case 2:return(n=e.sent).forEach((function(e){return e.fraction=Number(e.fraction.toFixed(2))})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=n(83),E=n(21),k=n(0),B=function(e){var t,n=e.value,a=e.printCurrency,r=void 0===a||a;return Object(k.jsxs)("span",{children:[r?"FCFA":""," ",(t=n,0==t?0:t?t.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}).replace(/,/g," "):void 0)]})},R=function(e){var t=e.lang,n=e.newResultRetrieved,r=e.resetNewResultRetrieved,c=e.data,s=Object(a.useState)(!1),l=Object(u.a)(s,2),m=l[0],d=l[1],j=Object(a.useState)([]),f=Object(u.a)(j,2),p=f[0],h=f[1];function O(){d(!1)}Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x()){e.next=6;break}return e.next=3,S(c);case 3:c=e.sent,h(c),r();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,m]);var x=function(){return m&&n},v=[{name:"fraction"},{name:"date"},{name:"encoursDebut",cfa:!0},{name:"interets",cfa:!0},{name:"amortissement",cfa:!0},{name:"encoursFin",cfa:!0},{name:"service",cfa:!0}];return Object(k.jsxs)("div",{className:"mb-2",children:[Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsx)("input",{type:"checkbox",className:"form-check-input",checked:m,onChange:function(){return d(!m)}}),"\xa0",Object(k.jsx)("label",{className:"form-check-label",children:b.translate("afficher_tableau_amortissement",t)})]}),m&&Object(k.jsxs)(E.a,{show:m,onHide:O,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(k.jsx)(E.a.Header,{closeButton:!0,children:Object(k.jsx)(E.a.Title,{children:Object(k.jsx)("h5",{className:"text-primary",children:b.translate("titre_tableau_amortissement",t)})})}),Object(k.jsx)(E.a.Body,{children:Object(k.jsxs)("table",{className:"table table-striped mt-2",style:{fontSize:"0.75em"},children:[Object(k.jsxs)("thead",{children:[Object(k.jsx)("th",{children:b.translate("ta_fraction",t)}),Object(k.jsx)("th",{children:b.translate("ta_date",t)}),Object(k.jsx)("th",{children:b.translate("ta_encours_debut",t)}),Object(k.jsx)("th",{children:b.translate("ta_interet",t)}),Object(k.jsx)("th",{children:b.translate("ta_amortissement",t)}),Object(k.jsx)("th",{children:b.translate("ta_encours_fin",t)}),Object(k.jsx)("th",{children:b.translate("ta_service",t)})]}),Object(k.jsx)("tbody",{children:p&&p.map((function(e,t){return Object(k.jsx)("tr",{children:v.map((function(t){return Object(k.jsx)("td",{children:t.cfa?Object(k.jsx)(B,{value:e[t.name],printCurrency:!1}):e[t.name]})}))},t)}))})]})}),Object(k.jsx)(E.a.Footer,{children:Object(k.jsx)(D.a,{variant:"secondary",onClick:O,children:b.translate("close_modal",t)})})]})]})},I=function(e){var t,n=e.value;return Object(k.jsxs)("span",{children:[(t=n,0==t?0:t?Number(t.toFixed(4)):void 0)," %"]})},T=function(e){var t=e.results,n=e.lang;return Object(k.jsxs)("div",{className:"bg-light",children:[Object(k.jsx)("h5",{className:"text-center bg-secondary text-white my-4 py-2 ",children:b.translate("titre_resultats",n)}),Object(k.jsx)("table",{className:"table table-borderless",children:Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("coupon_couru",n),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(I,{value:t.couponCouru})})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("taux_rendement",n),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(I,{value:t.tauxRendement})})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("prix_placement",n),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsxs)("span",{className:"badge bg-secondary",children:[Object(k.jsx)(I,{value:t.prix}),"(",Object(k.jsx)(B,{value:100*t.prix}),")"]})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("montant_net",n),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(B,{value:t.montantNet})})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("interet_couru",n),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(B,{value:t.interets})})})]})]})})]})},L=n(8),V=n(82),M={buildSelect:function(e){return Object(k.jsxs)("select",{className:"form-control form-control-sm",name:e.name,value:e.value,onChange:e.onChange,onBlur:e.onBlur,disabled:e.disabled,children:[Object(k.jsx)("option",{value:"",children:"-"}),e.options.getList().map((function(t){return Object(k.jsx)("option",{value:e.options.getValue(t),children:e.options.getLabel(t)},"".concat(e.name,"-").concat(e.options.getValue(t)))}))]})},buildInput:function(e){return Object(k.jsx)("input",{className:"form-control form-control-sm",type:e.type,step:e.step,name:e.name,value:e.value,onChange:e.onChange,onBlur:e.onBlur,disabled:e.disabled})},buildNumberFormat:function(e){return Object(k.jsx)(V.a,{className:"form-control form-control-sm",thousandSeparator:" ",decimalSeparator:".",decimalScale:0,fixedDecimalScale:!0,allowNegative:!1,prefix:"",suffix:" CFA",value:e.value,onValueChange:function(t){e.onChange({target:{value:t.value,name:e.name}})},onBlur:e.onBlur,name:e.name,disabled:e.disabled})},build:function(e){return e.options?M.buildSelect(e):e.formatNumber?M.buildNumberFormat(e):M.buildInput(e)},buildFieldGroup:function(e,t){return Object(k.jsxs)("div",{className:"form-group row",children:[Object(k.jsx)("label",{className:"col-md-8 col-form-label",children:e.label}),Object(k.jsx)("div",{className:"col-md-4 col-sm-12",children:M.build(e)})]},"".concat(e.name,"-").concat(t))}},P=function(e){var t=e.formData,n=e.updateFormData,r=e.triggerSubmit,c=e.lang,s=Object(a.useState)([]),m=Object(u.a)(s,2),d=m[0],j=m[1],f=Object(a.useState)(),p=Object(u.a)(f,2),h=p[0],O=p[1],x=Object(a.useState)([]),v=Object(u.a)(x,2),F=v[0],A=v[1],S=Object(a.useState)(),D=Object(u.a)(S,2),E=D[0],B=D[1],R=Object(a.useState)([]),I=Object(u.a)(R,2),T=I[0],V=I[1],P=Object(a.useState)([]),z=Object(u.a)(P,2),q=z[0],G=z[1],J=Object(a.useState)([]),H=Object(u.a)(J,2),U=H[0],K=H[1],Q=Object(a.useState)(!0),W=Object(u.a)(Q,2),X=W[0],Y=W[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,g();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=V,e.next=8,_();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=G,e.next=13,y();case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=K,e.next=18,C();case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Z=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,O(n),e.t0=A,e.next=5,N(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var a,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,B(a),e.next=4,w(a);case 4:r=e.sent,n(r),Y("IF"==r.modeAmortissement);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t=e.emetteur,n=e.emetteurs,a=e.onEmetteurChange,r=e.isin,c=e.isins,s=e.onIsinChange,u=e.onModeAmortissementChanged,i=e.isInFine,o=e.modeAmortissements,l=e.periodicites,m=e.maturiteEnAnnes,d=e.formData,j=e.onFormChange,f=e.triggerSubmit,p=e.lang;return[{label:b.translate("emetteur",p),name:"emetteur",value:t,onChange:a,options:{getList:function(){return n},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("isin",p),name:"isin",value:r,onChange:s,options:{getList:function(){return c},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("mode_amortissement",p),name:"modeAmortissement",value:d.modeAmortissement,onChange:u,options:{getList:function(){return o},getValue:function(e){return e.code},getLabel:function(e){return e.label}}},{label:b.translate("differe",p),type:"number",step:"1",name:"differe",value:d.differe,onChange:j,onBlur:f,disabled:i},{label:b.translate("periodicite",p),name:"periodicite",value:d.periodicite,onChange:j,onBlur:f,options:{getList:function(){return l},getValue:function(e){return e.code},getLabel:function(e){return e.label}}},{label:b.translate("date_valeur",p),type:"date",name:"dateValeur",value:d.dateValeur,onChange:j,onBlur:f},{label:b.translate("coupon",p),type:"number",step:"0.01",name:"coupon",value:d.coupon,onChange:j,onBlur:f},{label:b.translate("maturite",p),name:"maturiteEnAnnes",value:d.maturiteEnAnnes,onChange:j,onBlur:f,options:{getList:function(){return m},getValue:function(e){return e},getLabel:function(e){return e}},disabled:i},{label:b.translate("date_echeance",p),type:"date",name:"dateEcheance",value:d.dateEcheance,onChange:j,onBlur:f},{label:b.translate("valeur_nominale",p),type:"number",step:"0.01",name:"valeurNominale",value:d.valeurNominale,onChange:j,onBlur:f,formatNumber:!0,disabled:!0},{label:b.translate("montant_placement",p),type:"number",name:"montantAPlacer",value:d.montantAPlacer,onChange:j,onBlur:f,formatNumber:!0},{label:b.translate("taux_rendement_voulu",p),type:"number",name:"tauxRendement",value:d.tauxRendement,onChange:j,onBlur:f},{label:b.translate("prix_placement_voulu",p),type:"number",name:"prix",value:d.prix,onChange:j,onBlur:f}]}({emetteur:h,emetteurs:d,onEmetteurChange:Z,isin:E,isins:F,onIsinChange:$,onModeAmortissementChanged:function(e){var a="IF"==e.target.value,c={modeAmortissement:e.target.value,differe:a?"0":t.differe};n(c),Y(a),r()},isInFine:X,modeAmortissements:T,periodicites:q,maturiteEnAnnes:U,formData:t,onFormChange:function(e){var a=e.target,r=a.name,c=a.value;n(Object(l.a)(Object(l.a)({},t),{},Object(L.a)({},r,c)))},triggerSubmit:r,lang:c});return Object(k.jsx)("div",{children:ee.map((function(e,t){return M.buildFieldGroup(e)}))})},z=function(e){var t=e.lang,n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=(r[0],r[1]),s=Object(a.useState)({modeAmortissement:"",periodicite:"",dateValeur:"",coupon:"",maturiteEnAnnes:"",dateEcheance:"",valeurNominale:"10000",montantAPlacer:"",prix:"",tauxRendement:"",differe:"0"}),m=Object(u.a)(s,2),d=m[0],j=m[1],f=Object(a.useState)({prix:"",tauxRendement:"",couponCouru:"",interets:"",montantNet:""}),p=Object(u.a)(f,2),h=p[0],O=p[1],x=Object(a.useState)(!1),v=Object(u.a)(x,2),g=v[0],N=v[1],w=Object(a.useState)(!1),_=Object(u.a)(w,2),y=_[0],C=_[1];Object(a.useEffect)((function(){S()&&D(),N(!1)}),[g]);var A=function(){return d.modeAmortissement&&d.periodicite&&d.dateValeur&&d.coupon&&d.maturiteEnAnnes&&d.dateEcheance&&d.valeurNominale&&d.montantAPlacer&&(d.prix||d.tauxRendement)},S=function(){return g&&A()},D=function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(d);case 2:t=e.sent,O(t),C(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()};return Object(k.jsxs)("div",{children:[Object(k.jsx)("hr",{}),Object(k.jsx)("h5",{className:"text-center",children:b.translate("titre_caracteristiques_ot",t)}),Object(k.jsx)("hr",{}),Object(k.jsx)(P,{formData:d,updateFormData:function(e){var t=Object(l.a)(Object(l.a)({},d),e);j(t),c(A())},triggerSubmit:function(){return N(!0)},lang:t}),Object(k.jsx)(T,{results:h,lang:t}),Object(k.jsx)(R,{lang:t,newResultRetrieved:y,resetNewResultRetrieved:function(){return C(!1)},data:Object(l.a)(Object(l.a)({},d),{},{prix:"".concat(h.prix),tauxRendement:"".concat(h.tauxRendement)})})]})},q=function(e){var t=e.formData,n=e.updateFormData,r=e.lang,c=Object(a.useState)([]),s=Object(u.a)(c,2),l=s[0],m=s[1],d=Object(a.useState)(),j=Object(u.a)(d,2),f=j[0],p=j[1],h=Object(a.useState)([]),O=Object(u.a)(h,2),x=O[0],v=O[1],w=Object(a.useState)(),_=Object(u.a)(w,2),y=_[0],C=_[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var F=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,p(n),e.t0=v,e.next=5,N(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,C(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.emetteur,n=e.emetteurs,a=e.onEmetteurChange,r=e.isin,c=e.isins,s=e.onIsinChange,u=e.formData,i=e.onFormChange,o=e.updateFormData,l=e.triggerSubmit,m=e.lang,d=function(e,t){i(e);var n="coupon"==e.target.name?e.target.value:u.coupon;if((t||u.maturiteResiduel)&&n){var a=n/100/(1-n/100*(u.maturiteResiduel/360))*100;o({tauxRendement:a})}},j=function(e){i(e);var t="dateValeur"==e.target.name?e.target.value:u.dateValeur,n="dateEcheance"==e.target.name?e.target.value:u.dateEcheance;if(t&&n){var a=new Date(t),r=new Date(n),c=Math.floor((r-a)/864e5)+1;o({maturiteResiduel:c}),d(e,c)}};return[{label:b.translate("emetteur",m),name:"emetteur",value:t,onChange:a,options:{getList:function(){return n},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("isin",m),name:"isin",value:r,onChange:s,options:{getList:function(){return c},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("date_valeur",m),type:"date",name:"dateValeur",value:u.dateValeur,onChange:j,onBlur:l},{label:b.translate("date_echeance",m),type:"date",name:"dateEcheance",value:u.dateEcheance,onChange:j,onBlur:l},{label:b.translate("taux_pre_compte",m),type:"number",step:"0.01",name:"coupon",value:u.coupon,onChange:d,onBlur:l},{label:b.translate("valeur_nominale",m),type:"number",name:"valeurNominale",value:u.valeurNominale,onChange:i,onBlur:l,formatNumber:!0,disabled:!0},{label:b.translate("montant_placement",m),type:"number",name:"montantAPlacer",value:u.montantAPlacer,onChange:i,onBlur:l,formatNumber:!0}]}({emetteur:f,emetteurs:l,onEmetteurChange:F,isin:y,isins:x,onIsinChange:A,formData:t,onFormChange:function(e){var t=e.target,a=t.name,r=t.value,c=Object(L.a)({},a,r);n(c)},updateFormData:n,lang:r});return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{children:S.map((function(e,t){return M.buildFieldGroup(e)}))})})},G=function(e){var t,n=e.results,a=e.formData,r=e.lang;return Object(k.jsxs)("div",{className:"bg-light",children:[Object(k.jsx)("h5",{className:"text-center bg-secondary text-white my-4 py-2 ",children:b.translate("titre_resultats",r)}),Object(k.jsx)("table",{className:"table table-borderless",children:Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("maturite_residuel",r),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsxs)("span",{className:"badge bg-secondary",children:[null!==(t=a.maturiteResiduel)&&void 0!==t?t:0," jours"]})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("taux_rendement",r),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(I,{value:a.tauxRendement})})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("montant_net",r),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(B,{value:n.montantNet})})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("interets",r),":"]}),Object(k.jsx)("td",{className:"w-30 bg-light",children:Object(k.jsx)("span",{className:"badge bg-secondary",children:Object(k.jsx)(B,{value:n.interets})})})]})]})})]})},J=function(e){var t=e.lang,n=Object(a.useState)({dateValeur:"",dateEcheance:"",coupon:"",maturiteResiduel:"",valeurNominale:"1000000",tauxRendement:"",montantAPlacer:""}),r=Object(u.a)(n,2),c=r[0],s=r[1],m=Object(a.useState)({interets:"",montantNet:""}),d=Object(u.a)(m,2),j=d[0],f=d[1];Object(a.useEffect)((function(){p()&&h()}),[c]);var p=function(){return c.dateValeur&&c.dateEcheance&&c.coupon&&c.maturiteResiduel&&c.valeurNominale&&c.tauxRendement&&c.montantAPlacer},h=function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(c);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()};return Object(k.jsxs)("div",{children:[Object(k.jsx)("hr",{}),Object(k.jsx)("h5",{className:"text-center",children:b.translate("titre_caracteristiques_bonds",t)}),Object(k.jsx)("hr",{}),Object(k.jsx)(q,{formData:c,updateFormData:function(e){s((function(t){return Object(l.a)(Object(l.a)({},t),e)}))},lang:t}),Object(k.jsx)(G,{results:j,formData:c,lang:t})]})},H=(n(320),n(321),n(322),function(){var e=Object(a.useState)("OAT"),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("fr"),s=Object(u.a)(c,2),i=s[0],o=s[1],l=function(e){r(e)},m=function(e){o(e)};return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("p",{className:"text-center",children:[Object(k.jsx)("img",{src:"https://www.umoatitres.org/wp-content/uploads/2018/05/logo_UT_simple.png",alt:"Logo",width:"80%"}),Object(k.jsx)("span",{role:"button",onClick:function(){return m("fr")},children:Object(k.jsx)("img",{src:"https://flagcdn.com/24x18/fr.png",alt:"FR"})}),"\xa0",Object(k.jsx)("span",{role:"button",onClick:function(){return m("en")},children:Object(k.jsx)("img",{src:"https://flagcdn.com/24x18/gb.png",alt:"EN"})})]}),Object(k.jsx)("h2",{className:"text-center py-4 bg-primary text-white",children:b.translate("titre_principal",i)}),Object(k.jsxs)("ul",{className:"nav nav-pills nav-fill nav-justified",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("a",{className:"fw-bold nav-link ".concat("OAT"===n?"active bg-secondary":"bg-light"),onClick:function(){return l("OAT")},children:b.translate("titre_ot",i)})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("a",{className:"fw-bold nav-link ".concat("BONDS"===n?"active bg-secondary":"bg-light"),onClick:function(){return l("BONDS")},children:b.translate("titre_bons",i)})})]}),Object(k.jsxs)("div",{className:"tab-content",children:[Object(k.jsx)("div",{className:"tab-pane ".concat("OAT"===n?"active":""),id:"oat-tab",children:Object(k.jsx)(z,{lang:i})}),Object(k.jsx)("div",{className:"tab-pane ".concat("BONDS"===n?"active":""),id:"bonds-tab",children:Object(k.jsx)(J,{lang:i})})]})]})}),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,325)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(H,{})})),U()},90:function(e,t,n){}},[[323,1,2]]]);
//# sourceMappingURL=main.77aab628.chunk.js.map