(this.webpackJsonpumoa_simulator=this.webpackJsonpumoa_simulator||[]).push([[0],{281:function(e,t){},320:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(81),s=n.n(c),i=(n(90),n(3)),u=n(4),o=n(5),l=n(2),b=(n(91),{dictionary:{titre_principal:{fr:"Simulateur d'int\xe9r\xeats et de rentabilit\xe9",en:"Interest Simulator"},titre_caracteristiques_ot:{fr:"Caract\xe9ristiques de votre placement (OT) - convention de base : Exact/Exact ISMA",en:"Features of your investment (OT) - base convention: Exact/Exact ISMA"},titre_caracteristiques_bonds:{fr:"Caract\xe9ristiques de votre placement (BT) - convention de base : Exact/360",en:"Features of your investment (BT) - base convention: Exact/360"},titre_ot:{fr:"OAT",en:"OAT"},titre_bons:{fr:"BONS",en:"BONDS"},emetteur:{fr:"Emetteur",en:"Issuer"},isin:{fr:"ISIN",en:"ISIN"},mode_amortissement:{fr:"Mode Amortissement",en:"Amortization Type"},periodicite:{fr:"Periodicit\xe9",en:"Frequency"},date_valeur:{fr:"Date de valeur",en:"Value Date"},coupon:{fr:"Taux d'int\xe9r\xeat (coupon) de votre placement",en:"Interest rate on your investment"},differe:{fr:"Differ\xe9",en:"Deferred"},date_echeance:{fr:"Date d'\xe9ch\xe9ance",en:"Maturity Date"},maturite:{fr:"Maturit\xe9 en ann\xe9es",en:"Maturity in years"},maturite_jour:{fr:"Maturit\xe9 (jours)",en:"Maturity (days)"},valeur_nominale:{fr:"Valeur nominale",en:"Face value"},montant_placement:{fr:"Montant souhait\xe9 pour le placement",en:"Amount intended for the investment"},titre_resultats:{fr:"R\xe9sultats de votre placement",en:"Investment Results"},determiner_prix:{fr:"D\xe9terminer mon prix",en:"Calculate my price"},determiner_rendement:{fr:"D\xe9terminer mon rendement",en:"Calculate my return (yield)"},taux_rendement:{fr:"Le taux de rendement du placement",en:"The yield"},taux_rendement_voulu:{fr:"Taux de rendement du placement",en:"Calculate my return (yield)"},coupon_couru:{fr:"Le Coupon Couru",en:"Accrued coupon"},prix_placement:{fr:"Le prix du placement",en:"The price of investment"},prix_placement_voulu:{fr:"Prix souhait\xe9 pour le placement",en:"Desired price for the investment"},montant_net:{fr:"Le montant net",en:"Net amount"},interet_couru:{fr:"Dont inter\xeats couru",en:"Including accrued interest"},interets:{fr:"Inter\xeats",en:"Interest"},titre_tableau_amortissement:{fr:"Tableau d'amortissement",en:"Amortization plan"},afficher_tableau_amortissement:{fr:"Afficher le tableau d'amortissement",en:"Show amortization plan"},ta_fraction:{fr:"Fraction",en:"Fraction"},ta_date:{fr:"Date",en:"Date"},ta_encours_debut:{fr:"Encours Debut(FCFA)",en:"Outstanding Before(FCFA)"},ta_encours_fin:{fr:"Encours Fin(FCFA)",en:"Outstanding After(FCFA)"},ta_interet:{fr:"Int\xe9r\xeats(FCFA)",en:"Interest(FCFA)"},ta_amortissement:{fr:"Amortissement(FCFA)",en:"Amortization(FCFA)"},ta_service:{fr:"Service(FCFA)",en:"Service(FCFA)"},taux_pre_compte:{fr:"Taux Pr\xe9 Compt\xe9",en:"Rate Pr\xe9 Compt\xe9"},maturite_residuel:{fr:"Maturit\xe9 r\xe9siduel",en:"Remaining Maturity"},close_modal:{fr:"Fermer",en:"Close"}},translate:function(e,t){var n=b.dictionary[e];return n?"fr"==t?n.fr:n.en:""}}),m="http://ec2-16-170-208-138.eu-north-1.compute.amazonaws.com",d=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching data at ".concat(t," : ").concat(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t,n){var a,r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Error posting data");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error posting data at ".concat(t,": ").concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),f="simulator/emetteurs",p="simulator/isins",h="simulator/isins/details",O="simulator/run/oat",x="simulator/run/bonds",v="simulator/amortization/oat",g=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(p,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(h,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{code:"IF",label:"IN FINE"},{code:"ACD",label:"Constant Diff\xe9r\xe9"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{code:"A",label:"Annuelle"},{code:"S",label:"Semestrielle"},{code:"T",label:"Trimestre"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["3","5","7","10","12","15"]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(O,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(x,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(v,t);case 2:return(n=e.sent).forEach((function(e){return e.fraction=Number(e.fraction.toFixed(2))})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(83),k=n(21),D=n(0),I=function(e){var t,n=e.value,a=e.printCurrency,r=void 0===a||a;return Object(D.jsxs)("span",{children:[r?"FCFA":""," ",(t=n,0==t?0:t?t.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}).replace(/,/g," "):void 0)]})},R=function(e){var t=e.lang,n=e.newResultRetrieved,r=e.resetNewResultRetrieved,c=e.data,s=Object(a.useState)(!1),l=Object(i.a)(s,2),m=l[0],d=l[1],j=Object(a.useState)([]),f=Object(i.a)(j,2),p=f[0],h=f[1];function O(){d(!1)}Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x()){e.next=6;break}return e.next=3,S(c);case 3:c=e.sent,h(c),r();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,m]);var x=function(){return m&&n},v=[{name:"fraction"},{name:"date"},{name:"encoursDebut",cfa:!0},{name:"interets",cfa:!0},{name:"amortissement",cfa:!0},{name:"encoursFin",cfa:!0},{name:"service",cfa:!0}];return Object(D.jsxs)("div",{className:"mb-2",children:[Object(D.jsxs)("div",{className:"text-center",children:[Object(D.jsx)("input",{type:"checkbox",className:"form-check-input",checked:m,onChange:function(){return d(!m)}}),"\xa0",Object(D.jsx)("label",{className:"form-check-label",children:b.translate("afficher_tableau_amortissement",t)})]}),m&&Object(D.jsxs)(k.a,{show:m,onHide:O,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(D.jsx)(k.a.Header,{closeButton:!0,children:Object(D.jsx)(k.a.Title,{children:Object(D.jsx)("h5",{className:"text-primary",children:b.translate("titre_tableau_amortissement",t)})})}),Object(D.jsx)(k.a.Body,{children:Object(D.jsxs)("table",{className:"table table-striped mt-2",style:{fontSize:"0.75em"},children:[Object(D.jsxs)("thead",{children:[Object(D.jsx)("th",{children:b.translate("ta_fraction",t)}),Object(D.jsx)("th",{children:b.translate("ta_date",t)}),Object(D.jsx)("th",{children:b.translate("ta_encours_debut",t)}),Object(D.jsx)("th",{children:b.translate("ta_interet",t)}),Object(D.jsx)("th",{children:b.translate("ta_amortissement",t)}),Object(D.jsx)("th",{children:b.translate("ta_encours_fin",t)}),Object(D.jsx)("th",{children:b.translate("ta_service",t)})]}),Object(D.jsx)("tbody",{children:p&&p.map((function(e,t){return Object(D.jsx)("tr",{children:v.map((function(t){return Object(D.jsx)("td",{children:t.cfa?Object(D.jsx)(I,{value:e[t.name],printCurrency:!1}):e[t.name]})}))},t)}))})]})}),Object(D.jsx)(k.a.Footer,{children:Object(D.jsx)(E.a,{variant:"secondary",onClick:O,children:b.translate("close_modal",t)})})]})]})},T=function(e){var t,n=e.value;return Object(D.jsxs)("span",{children:[(t=n,0==t?0:t?Number(t.toFixed(4)):void 0)," %"]})},L=function(e){var t=e.results,n=e.lang;return Object(D.jsxs)("div",{className:"bg-light",children:[Object(D.jsx)("h5",{className:"text-center bg-secondary text-white my-4 py-2 ",children:b.translate("titre_resultats",n)}),Object(D.jsx)("table",{className:"table table-borderless",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("coupon_couru",n),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(T,{value:t.couponCouru})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("taux_rendement",n),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(T,{value:t.tauxRendement})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("prix_placement",n),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsxs)("span",{className:"badge bg-secondary",children:[Object(D.jsx)(T,{value:t.prix}),"(",Object(D.jsx)(I,{value:100*t.prix}),")"]})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("montant_net",n),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(I,{value:t.montantNet})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("interet_couru",n),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(I,{value:t.interets})})})]})]})})]})},P=n(8),V=n(47),B={buildSelect:function(e){return Object(D.jsxs)("select",{className:"form-control form-control-sm",name:e.name,value:e.value,onChange:e.onChange,onBlur:e.onBlur,disabled:e.disabled,children:[Object(D.jsx)("option",{value:"",children:"-"}),e.options.getList().map((function(t){return Object(D.jsx)("option",{value:e.options.getValue(t),children:e.options.getLabel(t)},"".concat(e.name,"-").concat(e.options.getValue(t)))}))]})},buildInput:function(e){return Object(D.jsx)("input",{className:"form-control form-control-sm",type:e.type,step:e.step,name:e.name,value:e.value,onChange:e.onChange,onBlur:e.onBlur,disabled:e.disabled})},buildNumberFormat:function(e){return Object(D.jsx)(V.a,{className:"form-control form-control-sm",thousandSeparator:" ",decimalSeparator:".",decimalScale:0,fixedDecimalScale:!0,allowNegative:!1,prefix:"",suffix:" CFA",value:e.value,onValueChange:function(t){e.onChange({target:{value:t.value,name:e.name}})},onBlur:e.onBlur,name:e.name,disabled:e.disabled})},buildPercentFormat:function(e){return Object(D.jsx)(V.a,{className:"form-control form-control-sm",decimalSeparator:".",decimalScale:4,fixedDecimalScale:!1,allowNegative:!1,prefix:"",suffix:" %",value:e.value,onValueChange:function(t){e.onChange({target:{value:t.value,name:e.name}})},onBlur:e.onBlur,name:e.name,disabled:e.disabled})},build:function(e){return e.options?B.buildSelect(e):e.formatNumber?B.buildNumberFormat(e):e.formatPercent?B.buildPercentFormat(e):B.buildInput(e)},buildFieldGroup:function(e,t){return Object(D.jsxs)("div",{className:"form-group row",children:[Object(D.jsx)("label",{className:"col-md-8 col-form-label",children:e.label}),Object(D.jsx)("div",{className:"col-md-4 col-sm-12",children:B.build(e)})]},"".concat(e.name,"-").concat(t))}},M=function(e){var t=e.formData,n=e.updateFormData,r=(e.triggerSubmit,e.lang),c=Object(a.useState)([]),s=Object(i.a)(c,2),m=s[0],d=s[1],j=Object(a.useState)(),f=Object(i.a)(j,2),p=f[0],h=f[1],O=Object(a.useState)([]),x=Object(i.a)(O,2),v=x[0],F=x[1],A=Object(a.useState)(),S=Object(i.a)(A,2),E=S[0],k=S[1],I=Object(a.useState)([]),R=Object(i.a)(I,2),T=R[0],L=R[1],V=Object(a.useState)([]),M=Object(i.a)(V,2),z=M[0],q=M[1],G=Object(a.useState)([]),J=Object(i.a)(G,2),H=J[0],U=J[1],K=Object(a.useState)(!0),Q=Object(i.a)(K,2),W=Q[0],X=Q[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,g();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=L,e.next=8,_();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=q,e.next=13,y();case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=U,e.next=18,C();case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Y=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,h(n),e.t0=F,e.next=5,N(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){var a,r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,k(a),e.next=4,w(a);case 4:r=e.sent,n(r),X("IF"==r.modeAmortissement);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e){var t=e.emetteur,n=e.emetteurs,a=e.onEmetteurChange,r=e.isin,c=e.isins,s=e.onIsinChange,i=e.onModeAmortissementChanged,u=e.isInFine,o=e.modeAmortissements,l=e.periodicites,m=e.maturiteEnAnnes,d=e.formData,j=e.onFormChange,f=e.lang;return[{label:b.translate("emetteur",f),name:"emetteur",value:t,onChange:a,options:{getList:function(){return n},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("isin",f),name:"isin",value:r,onChange:s,options:{getList:function(){return c},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("mode_amortissement",f),name:"modeAmortissement",value:d.modeAmortissement,onChange:i,options:{getList:function(){return o},getValue:function(e){return e.code},getLabel:function(e){return e.label}}},{label:b.translate("differe",f),type:"number",step:"1",name:"differe",value:d.differe,onChange:j,disabled:u},{label:b.translate("periodicite",f),name:"periodicite",value:d.periodicite,onChange:j,options:{getList:function(){return l},getValue:function(e){return e.code},getLabel:function(e){return e.label}}},{label:b.translate("date_valeur",f),type:"date",name:"dateValeur",value:d.dateValeur,onChange:j},{label:b.translate("coupon",f),type:"number",name:"coupon",value:d.coupon,onChange:j,formatPercent:!0},{label:b.translate("maturite",f),name:"maturiteEnAnnes",value:d.maturiteEnAnnes,onChange:j,options:{getList:function(){return m},getValue:function(e){return e},getLabel:function(e){return e}},disabled:u},{label:b.translate("date_echeance",f),type:"date",name:"dateEcheance",value:d.dateEcheance,onChange:j},{label:b.translate("valeur_nominale",f),type:"number",name:"valeurNominale",value:d.valeurNominale,onChange:j,formatNumber:!0,disabled:!0},{label:b.translate("montant_placement",f),type:"number",name:"montantAPlacer",value:d.montantAPlacer,onChange:j,formatNumber:!0},{label:b.translate("taux_rendement_voulu",f),type:"number",name:"tauxRendement",value:d.tauxRendement,onChange:j,formatPercent:!0},{label:b.translate("prix_placement_voulu",f),type:"number",name:"prix",value:d.prix,onChange:j,formatPercent:!0}]}({emetteur:p,emetteurs:m,onEmetteurChange:Y,isin:E,isins:v,onIsinChange:Z,onModeAmortissementChanged:function(e){var a="IF"==e.target.value,r={modeAmortissement:e.target.value,differe:a?"0":t.differe};n(r),X(a)},isInFine:W,modeAmortissements:T,periodicites:z,maturiteEnAnnes:H,formData:t,onFormChange:function(e){var a=e.target,r=a.name,c=a.value;n(Object(l.a)(Object(l.a)({},t),{},Object(P.a)({},r,c)))},lang:r});return Object(D.jsx)("div",{children:$.map((function(e,t){return B.buildFieldGroup(e)}))})},z=function(e){var t=e.lang,n=Object(a.useState)({modeAmortissement:"",periodicite:"",dateValeur:"",coupon:"",maturiteEnAnnes:"",dateEcheance:"",valeurNominale:"10000",montantAPlacer:"",prix:"",tauxRendement:"",differe:"0"}),r=Object(i.a)(n,2),c=r[0],s=r[1],m=Object(a.useState)({prix:"",tauxRendement:"",couponCouru:"",interets:"",montantNet:""}),d=Object(i.a)(m,2),j=d[0],f=d[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),O=h[0],x=h[1];Object(a.useEffect)((function(){v()&&g()}),[c]);var v=function(){return c.modeAmortissement&&c.periodicite&&c.dateValeur&&c.coupon&&c.dateEcheance&&c.valeurNominale&&c.montantAPlacer&&(c.prix||c.tauxRendement)},g=function(){var e=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){var t,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(Object(l.a)({},c),{},{maturiteEnAnnes:0}),e.next=3,F(t);case 3:n=e.sent,f(n),x(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()};return Object(D.jsxs)("div",{children:[Object(D.jsx)("hr",{}),Object(D.jsx)("h5",{className:"text-center",children:b.translate("titre_caracteristiques_ot",t)}),Object(D.jsx)("hr",{}),Object(D.jsx)(M,{formData:c,updateFormData:function(e){s((function(t){return Object(l.a)(Object(l.a)({},t),e)}))},lang:t}),Object(D.jsx)(L,{results:j,lang:t}),Object(D.jsx)(R,{lang:t,newResultRetrieved:O,resetNewResultRetrieved:function(){return x(!1)},data:function(){var e,t;return Object(l.a)(Object(l.a)({},c),{},{prix:null!==(e="".concat(j.prix))&&void 0!==e?e:"",tauxRendement:null!==(t="".concat(j.tauxRendement))&&void 0!==t?t:""})}()})]})},q=function(e){var t=e.formData,n=e.updateFormData,r=e.lang,c=Object(a.useState)([]),s=Object(i.a)(c,2),l=s[0],m=s[1],d=Object(a.useState)(),j=Object(i.a)(d,2),f=j[0],p=j[1],h=Object(a.useState)([]),O=Object(i.a)(h,2),x=O[0],v=O[1],w=Object(a.useState)(),_=Object(i.a)(w,2),y=_[0],C=_[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var F=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,p(n),e.t0=v,e.next=5,N(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,C(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.emetteur,n=e.emetteurs,a=e.onEmetteurChange,r=e.isin,c=e.isins,s=e.onIsinChange,i=e.formData,u=e.onFormChange,o=e.lang;return[{label:b.translate("emetteur",o),name:"emetteur",value:t,onChange:a,options:{getList:function(){return n},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("isin",o),name:"isin",value:r,onChange:s,options:{getList:function(){return c},getValue:function(e){return e},getLabel:function(e){return e}}},{label:b.translate("date_valeur",o),type:"date",name:"dateValeur",value:i.dateValeur,onChange:u},{label:b.translate("date_echeance",o),type:"date",name:"dateEcheance",value:i.dateEcheance,onChange:u},{label:b.translate("taux_pre_compte",o),type:"number",step:"0.01",name:"coupon",value:i.coupon,onChange:u,formatPercent:!0},{label:b.translate("valeur_nominale",o),type:"number",name:"valeurNominale",value:i.valeurNominale,onChange:u,formatNumber:!0,disabled:!0},{label:b.translate("montant_placement",o),type:"number",name:"montantAPlacer",value:i.montantAPlacer,onChange:u,formatNumber:!0}]}({emetteur:f,emetteurs:l,onEmetteurChange:F,isin:y,isins:x,onIsinChange:A,formData:t,onFormChange:function(e){var t=e.target,a=t.name,r=t.value,c=Object(P.a)({},a,r);n(c)},lang:r});return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{children:S.map((function(e,t){return B.buildFieldGroup(e)}))})})},G=function(e){var t,n=e.results,a=e.lang;return Object(D.jsxs)("div",{className:"bg-light",children:[Object(D.jsx)("h5",{className:"text-center bg-secondary text-white my-4 py-2 ",children:b.translate("titre_resultats",a)}),Object(D.jsx)("table",{className:"table table-borderless",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("maturite_residuel",a),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsxs)("span",{className:"badge bg-secondary",children:[null!==(t=n.maturiteResiduelle)&&void 0!==t?t:0," jours"]})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("taux_rendement",a),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(T,{value:n.tauxRendement})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("montant_net",a),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(I,{value:n.montantNet})})})]}),Object(D.jsxs)("tr",{children:[Object(D.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[b.translate("interets",a),":"]}),Object(D.jsx)("td",{className:"w-30 bg-light",children:Object(D.jsx)("span",{className:"badge bg-secondary",children:Object(D.jsx)(I,{value:n.interets})})})]})]})})]})},J=function(e){var t=e.lang,n=Object(a.useState)({dateValeur:"",dateEcheance:"",coupon:"",valeurNominale:"1000000",montantAPlacer:""}),r=Object(i.a)(n,2),c=r[0],s=r[1],m=Object(a.useState)({interets:"",montantNet:"",tauxRendement:"",maturiteResiduelle:""}),d=Object(i.a)(m,2),j=d[0],f=d[1];Object(a.useEffect)((function(){p()&&h()}),[c]);var p=function(){return c.dateValeur&&c.dateEcheance&&c.coupon&&c.valeurNominale&&c.montantAPlacer},h=function(){var e=function(){var e=Object(o.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(c);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()};return Object(D.jsxs)("div",{children:[Object(D.jsx)("hr",{}),Object(D.jsx)("h5",{className:"text-center",children:b.translate("titre_caracteristiques_bonds",t)}),Object(D.jsx)("hr",{}),Object(D.jsx)(q,{formData:c,updateFormData:function(e){s((function(t){return Object(l.a)(Object(l.a)({},t),e)}))},lang:t}),Object(D.jsx)(G,{results:j,lang:t})]})},H=(n(320),n(321),n(322),function(){var e=Object(a.useState)("OAT"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("fr"),s=Object(i.a)(c,2),u=s[0],o=s[1],l=function(e){r(e)},m=function(e){o(e)};return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("p",{className:"text-center",children:[Object(D.jsx)("img",{src:"https://www.umoatitres.org/wp-content/uploads/2018/05/logo_UT_simple.png",alt:"Logo",width:"80%"}),Object(D.jsx)("span",{role:"button",onClick:function(){return m("fr")},children:Object(D.jsx)("img",{src:"https://flagcdn.com/24x18/fr.png",alt:"FR"})}),"\xa0",Object(D.jsx)("span",{role:"button",onClick:function(){return m("en")},children:Object(D.jsx)("img",{src:"https://flagcdn.com/24x18/gb.png",alt:"EN"})})]}),Object(D.jsx)("h2",{className:"text-center py-4 bg-primary text-white",children:b.translate("titre_principal",u)}),Object(D.jsxs)("ul",{className:"nav nav-pills nav-fill nav-justified",children:[Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)("a",{className:"fw-bold nav-link ".concat("OAT"===n?"active bg-secondary":"bg-light"),onClick:function(){return l("OAT")},children:b.translate("titre_ot",u)})}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)("a",{className:"fw-bold nav-link ".concat("BONDS"===n?"active bg-secondary":"bg-light"),onClick:function(){return l("BONDS")},children:b.translate("titre_bons",u)})})]}),Object(D.jsxs)("div",{className:"tab-content",children:[Object(D.jsx)("div",{className:"tab-pane ".concat("OAT"===n?"active":""),id:"oat-tab",children:Object(D.jsx)(z,{lang:u})}),Object(D.jsx)("div",{className:"tab-pane ".concat("BONDS"===n?"active":""),id:"bonds-tab",children:Object(D.jsx)(J,{lang:u})})]})]})}),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,325)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(H,{})})),U()},90:function(e,t,n){}},[[323,1,2]]]);
//# sourceMappingURL=main.0eb45157.chunk.js.map