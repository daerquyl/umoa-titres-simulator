(this.webpackJsonpumoa_simulator=this.webpackJsonpumoa_simulator||[]).push([[0],{281:function(e,t){},320:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(82),s=n.n(c),u=(n(91),n(3)),i=n(4),o=n(5),l=n(2),m=(n(92),{dictionary:{titre_principal:{fr:"Simulateur d'int\xe9r\xeats et de rentabilit\xe9",en:"Interest Simulator"},titre_caracteristiques_ot:{fr:"Caract\xe9ristiques de votre placement (OT) - convention de base : Exact/Exact ISMA",en:"Features of your investment (OT) - base convention: Exact/Exact ISMA"},titre_caracteristiques_bonds:{fr:"Caract\xe9ristiques de votre placement (BT) - convention de base : Exact/360",en:"Features of your investment (BT) - base convention: Exact/360"},emetteur:{fr:"Emetteur",en:"Issuer"},isin:{fr:"ISIN",en:"ISIN"},mode_amortissement:{fr:"Mode Amortissement",en:"Amortization Type"},periodicite:{fr:"Periodicit\xe9",en:"Frequency"},date_valeur:{fr:"Date de valeur",en:"Value Date"},coupon:{fr:"Taux d'int\xe9r\xeat (coupon) de votre placement(%)",en:"Interest rate on your investment(%)"},differe:{fr:"Differ\xe9",en:"Deferred"},date_echeance:{fr:"Date d'\xe9ch\xe9ance",en:"Maturity Date"},maturite:{fr:"Maturit\xe9 en ann\xe9es",en:"Maturity in years"},maturite_jour:{fr:"Maturit\xe9 (jours)",en:"Maturity (days)"},valeur_nominale:{fr:"Valeur nominale (FCFA)",en:"Face value (FCFA)"},montant_placement:{fr:"Montant souhait\xe9 pour le placement (FCFA)",en:"Amount intended for the investment(FCFA)"},titre_resultats:{fr:"R\xe9sultats de votre placement",en:"Investment Results"},determiner_prix:{fr:"D\xe9terminer mon prix%",en:"Calculate my price%"},determiner_rendement:{fr:"D\xe9terminer mon rendement",en:"Calculate my return (yield)"},taux_rendement:{fr:"Le taux de rendement du placement%",en:"The yield%"},taux_rendement_voulu:{fr:"Taux de rendement du placement%",en:"Calculate my return (yield)%"},coupon_couru:{fr:"Le Coupon Couru",en:"Accrued coupon"},prix_placement:{fr:"Le prix du placement%",en:"The price of investment%"},prix_placement_voulu:{fr:"Prix souhait\xe9 pour le placement%",en:"Desired price for the investment"},montant_net:{fr:"Le montant net",en:"Net amount"},interet_couru:{fr:"Dont inter\xeats couru",en:"Including accrued interest"},titre_tableau_amortissement:{fr:"Tableau d'amortissement",en:"Amortization plan"},afficher_tableau_amortissement:{fr:"Afficher le tableau d'amortissement",en:"Show amortization plan"},ta_fraction:{fr:"Fraction Ann\xe9e",en:"Fraction"},ta_date:{fr:"Date",en:"Date"},ta_encours:{fr:"Encours(FCFA)",en:"Outstanding(FCFA)"},ta_interet:{fr:"Int\xe9r\xeats(FCFA)",en:"Interest(FCFA)"},ta_amortissement:{fr:"Amortissement(FCFA)",en:"Amortization(FCFA)"},ta_service:{fr:"Service(FCFA)",en:"Service(FCFA)"},taux_pre_compte:{fr:"Taux Pr\xe9 Compt\xe9",en:"Rate Pr\xe9 Compt\xe9"},maturite_residuel:{fr:"Maturit\xe9 r\xe9siduel",en:"Remaining Maturity"},close_modal:{fr:"Fermer",en:"Close"}},translate:function(e,t){var n=m.dictionary[e];return n?"fr"==t?n.fr:n.en:""}}),b="http://ec2-16-170-208-138.eu-north-1.compute.amazonaws.com",d=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching data at ".concat(t," : ").concat(e.t0)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t,n){var a,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Error posting data");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error posting data at ".concat(t,": ").concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),f="simulator/emetteurs",p="simulator/isins",h="simulator/isins/details",O="simulator/run/oat",x="simulator/run/bonds",g="simulator/amortization/oat",v=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(p,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(h,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{code:"IF",label:"IN FINE"},{code:"AC",label:"Constant"},{code:"ACD",label:"Constant Diff\xe9r\xe9"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{code:"A",label:"Annuelle"},{code:"S",label:"Semestrielle"},{code:"T",label:"Trimestre"}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["3","5","7","10","12","15"]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["28","91","182","364"]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(O,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(x,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(g,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(84),D=n(21),R=n(0),B=function(e){var t=e.lang,n=e.newResultRetrieved,r=e.resetNewResultRetrieved,c=e.data,s=Object(a.useState)(!1),l=Object(u.a)(s,2),b=l[0],d=l[1],j=Object(a.useState)([]),f=Object(u.a)(j,2),p=f[0],h=f[1];function O(){d(!1)}Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x()){e.next=6;break}return e.next=3,E(c);case 3:c=e.sent,h(c),r();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,b]);var x=function(){return b&&n},g=["fraction","date","encours","interets","amortissement","service"];return Object(R.jsxs)("div",{className:"mb-2",children:[Object(R.jsxs)("div",{className:"text-center",children:[Object(R.jsx)("input",{type:"checkbox",className:"form-check-input",checked:b,onChange:function(){return d(!b)}}),"\xa0",Object(R.jsx)("label",{className:"form-check-label",children:m.translate("afficher_tableau_amortissement",t)})]}),b&&Object(R.jsxs)(D.a,{show:b,onHide:O,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(R.jsx)(D.a.Header,{closeButton:!0,children:Object(R.jsx)(D.a.Title,{children:Object(R.jsx)("h5",{className:"text-primary",children:m.translate("titre_tableau_amortissement",t)})})}),Object(R.jsx)(D.a.Body,{children:Object(R.jsxs)("table",{className:"table table-striped mt-2",children:[Object(R.jsxs)("thead",{children:[Object(R.jsx)("th",{children:m.translate("ta_fraction",t)}),Object(R.jsx)("th",{children:m.translate("ta_date",t)}),Object(R.jsx)("th",{children:m.translate("ta_encours",t)}),Object(R.jsx)("th",{children:m.translate("ta_interet",t)}),Object(R.jsx)("th",{children:m.translate("ta_amortissement",t)}),Object(R.jsx)("th",{children:m.translate("ta_service",t)})]}),Object(R.jsx)("tbody",{children:p&&p.map((function(e,t){return Object(R.jsx)("tr",{children:g.map((function(t){return Object(R.jsx)("td",{children:e[t]})}))},t)}))})]})}),Object(R.jsx)(D.a.Footer,{children:Object(R.jsx)(k.a,{variant:"secondary",onClick:O,children:m.translate("close_modal",t)})})]})]})},I=n(7),L=function(e){var t=e.formData,n=e.formStateIsValid,r=e.updateFormData,c=e.results,s=e.triggerSubmit,i=e.lang,o=Object(a.useState)(!0),b=Object(u.a)(o,2),d=b[0],j=b[1],f=function(e){return r(Object(I.a)({},e.target.name,e.target.value))},p=function(){j(!d),r(Object(l.a)(Object(l.a)({},t),{},{prix:"",tauxRendement:""}))};return Object(R.jsxs)("div",{className:"bg-light",children:[Object(R.jsx)("h5",{className:"text-center bg-secondary text-white my-4 py-2 ",children:m.translate("titre_resultats",i)}),Object(R.jsxs)("div",{className:"form-group row mb-4 text-center",children:[Object(R.jsxs)("div",{className:"col-md-6",children:[Object(R.jsx)("input",{type:"radio",name:"prix_rendement",className:"form-check-input",checked:d,onChange:p}),"\xa0",Object(R.jsx)("label",{className:"form-check-label",children:m.translate("determiner_prix",i)})]}),Object(R.jsxs)("div",{className:"col-md-6",children:[Object(R.jsx)("input",{type:"radio",name:"prix_rendement",className:"form-check-input",checked:!d,onChange:p}),"\xa0",Object(R.jsx)("label",{className:"form-check-label",children:m.translate("determiner_rendement",i)})]})]}),d&&Object(R.jsxs)("div",{className:"form-group row px-2",children:[Object(R.jsxs)("label",{className:"col-md-8 col-form-label",children:[m.translate("taux_rendement_voulu",i),":"]}),Object(R.jsx)("div",{className:"col-md-4",children:Object(R.jsx)("input",{type:"number",step:"0.01",className:"form-control form-control-sm",name:"tauxRendement",value:t.tauxRendement,onChange:f,onBlur:s,disabled:!n})})]}),!d&&Object(R.jsxs)("div",{className:"form-group row px-2",children:[Object(R.jsxs)("label",{className:"col-md-8 col-form-label",children:[m.translate("prix_placement_voulu",i),":"]}),Object(R.jsx)("div",{className:"col-md-4",children:Object(R.jsx)("input",{type:"number",className:"form-control form-control-sm",name:"prix",value:t.prix,onChange:f,onBlur:s,disabled:!n})})]}),Object(R.jsx)("table",{className:"table table-borderless",children:Object(R.jsxs)("tbody",{children:[Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("coupon_couru",i),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsx)("span",{className:"badge bg-secondary",children:c.couponCouru})})]}),!d&&Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("taux_rendement",i),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsxs)("span",{className:"badge bg-secondary",children:[c.tauxRendement," %"]})})]}),d&&Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("prix_placement",i),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsx)("span",{className:"badge bg-secondary",children:c.prix})})]}),Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("montant_net",i),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsxs)("span",{className:"badge bg-secondary",children:["FCFA ",c.montantNet]})})]}),Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("interet_couru",i),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsxs)("span",{className:"badge bg-secondary",children:["FCFA ",c.interets]})})]})]})})]})},T={buildSelect:function(e){return Object(R.jsxs)("select",{className:"form-control form-control-sm",name:e.name,value:e.value,onChange:e.onChange,onBlur:e.onBlur,children:[Object(R.jsx)("option",{value:"",children:"-"}),e.options.getList().map((function(t){return Object(R.jsx)("option",{value:e.options.getValue(t),children:e.options.getLabel(t)},"".concat(e.name,"-").concat(e.options.getValue(t)))}))]})},buildInput:function(e){return Object(R.jsx)("input",{className:"form-control form-control-sm",type:e.type,step:e.step,name:e.name,value:e.value,onChange:e.onChange,onBlur:e.onBlur})},build:function(e){return e.options?T.buildSelect(e):T.buildInput(e)},buildFieldGroup:function(e,t){return Object(R.jsxs)("div",{className:"form-group row",children:[Object(R.jsx)("label",{className:"col-md-8 col-form-label",children:e.label}),Object(R.jsx)("div",{className:"col-md-4 col-sm-12",children:T.build(e)})]},"".concat(e.name,"-").concat(t))}},V=function(e){var t=e.formData,n=e.updateFormData,r=e.triggerSubmit,c=e.lang,s=Object(a.useState)([]),b=Object(u.a)(s,2),d=b[0],j=b[1],f=Object(a.useState)(),p=Object(u.a)(f,2),h=p[0],O=p[1],x=Object(a.useState)([]),g=Object(u.a)(x,2),F=g[0],A=g[1],S=Object(a.useState)(),E=Object(u.a)(S,2),k=E[0],D=E[1],B=Object(a.useState)([]),L=Object(u.a)(B,2),V=L[0],P=L[1],M=Object(a.useState)([]),J=Object(u.a)(M,2),q=J[0],z=J[1],G=Object(a.useState)([]),H=Object(u.a)(G,2),U=H[0],K=H[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,v();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=P,e.next=8,_();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=z,e.next=13,y();case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=K,e.next=18,C();case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Q=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,O(n),e.t0=A,e.next=5,N(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,D(a),e.t0=n,e.next=5,w(a);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){var t=e.emetteur,n=e.emetteurs,a=e.onEmetteurChange,r=e.isin,c=e.isins,s=e.onIsinChange,u=e.modeAmortissements,i=e.periodicites,o=e.maturiteEnAnnes,l=e.formData,b=e.onFormChange,d=e.triggerSubmit,j=e.lang;return[{label:m.translate("emetteur",j),name:"emetteur",value:t,onChange:a,options:{getList:function(){return n},getValue:function(e){return e},getLabel:function(e){return e}}},{label:m.translate("isin",j),name:"isin",value:r,onChange:s,options:{getList:function(){return c},getValue:function(e){return e},getLabel:function(e){return e}}},{label:m.translate("mode_amortissement",j),name:"modeAmortissement",value:l.modeAmortissement,onChange:b,options:{getList:function(){return u},getValue:function(e){return e.code},getLabel:function(e){return e.label}}},{label:m.translate("differe",j),type:"number",step:"1",name:"differe",value:l.differe,onChange:b,onBlur:d},{label:m.translate("periodicite",j),name:"periodicite",value:l.periodicite,onChange:b,onBlur:d,options:{getList:function(){return i},getValue:function(e){return e.code},getLabel:function(e){return e.label}}},{label:m.translate("date_valeur",j),type:"date",name:"dateValeur",value:l.dateValeur,onChange:b,onBlur:d},{label:m.translate("coupon",j),type:"number",step:"0.01",name:"coupon",value:l.coupon,onChange:b,onBlur:d},{label:m.translate("maturite",j),name:"maturiteEnAnnes",value:l.maturiteEnAnnes,onChange:b,onBlur:d,options:{getList:function(){return o},getValue:function(e){return e},getLabel:function(e){return e}}},{label:m.translate("date_echeance",j),type:"date",name:"dateEcheance",value:l.dateEcheance,onChange:b,onBlur:d},{label:m.translate("valeur_nominale",j),type:"number",step:"0.01",name:"valeurNominale",value:l.valeurNominale,onChange:b,onBlur:d},{label:m.translate("montant_placement",j),type:"number",name:"montantAPlacer",value:l.montantAPlacer,onChange:b,onBlur:d}]}({emetteur:h,emetteurs:d,onEmetteurChange:Q,isin:k,isins:F,onIsinChange:W,modeAmortissements:V,periodicites:q,maturiteEnAnnes:U,formData:t,onFormChange:function(e){var a=e.target,r=a.name,c=a.value;n(Object(l.a)(Object(l.a)({},t),{},Object(I.a)({},r,c)))},triggerSubmit:r,lang:c});return Object(R.jsxs)("div",{children:[Object(R.jsx)("hr",{}),Object(R.jsx)("h5",{className:"text-center",children:m.translate("titre_caracteristiques_ot")}),Object(R.jsx)("hr",{}),X.map((function(e,t){return T.buildFieldGroup(e)}))]})},P=function(e){var t=e.lang,n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=r[0],s=r[1],m=Object(a.useState)({modeAmortissement:"",periodicite:"",dateValeur:"",coupon:"",maturiteEnAnnes:"",dateEcheance:"",valeurNominale:"",montantAPlacer:"",prix:"",tauxRendement:"",differe:""}),b=Object(u.a)(m,2),d=b[0],j=b[1],f=Object(a.useState)({prix:"",tauxRendement:"",couponCouru:"",interets:"",montantNet:""}),p=Object(u.a)(f,2),h=p[0],O=p[1],x=Object(a.useState)(!1),g=Object(u.a)(x,2),v=g[0],N=g[1],w=Object(a.useState)(!1),_=Object(u.a)(w,2),y=_[0],C=_[1];Object(a.useEffect)((function(){S()&&E(),N(!1)}),[v]);var F=function(){return d.modeAmortissement&&d.periodicite&&d.dateValeur&&d.coupon&&d.maturiteEnAnnes&&d.dateEcheance&&d.valeurNominale&&d.montantAPlacer&&("ACD"==d.modeAmortissement&&d.differe||"ACD"!=d.modeAmortissement)},S=function(){return v&&F()&&(d.prix||d.tauxRendement)},E=function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(d);case 2:t=e.sent,O(t),C(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()},k=function(e){var t=Object(l.a)(Object(l.a)({},d),e);j(t),s(F())},D=function(){return N(!0)};return Object(R.jsxs)("div",{children:[Object(R.jsx)(V,{formData:d,updateFormData:k,triggerSubmit:D,lang:t}),Object(R.jsx)(L,{formData:d,formStateIsValid:c,updateFormData:k,results:h,triggerSubmit:D,lang:t}),Object(R.jsx)(B,{lang:t,newResultRetrieved:y,resetNewResultRetrieved:function(){return C(!1)},data:Object(l.a)(Object(l.a)({},d),{},{prix:"".concat(h.prix),tauxRendement:"".concat(h.tauxRendement)})})]})},M=(n(319),function(e){var t=e.formData,n=e.updateFormData,r=e.lang,c=Object(a.useState)([]),s=Object(u.a)(c,2),b=s[0],d=s[1],j=Object(a.useState)(),f=Object(u.a)(j,2),p=f[0],h=f[1],O=Object(a.useState)([]),x=Object(u.a)(O,2),g=x[0],w=x[1],_=Object(a.useState)(),y=Object(u.a)(_,2),C=y[0],A=y[1],S=Object(a.useState)([]),E=Object(u.a)(S,2),k=E[0],D=E[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,v();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=D,e.next=8,F();case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var B=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,h(n),e.t0=w,e.next=5,N(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,A(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){var t=e.emetteur,n=e.emetteurs,a=e.onEmetteurChange,r=e.isin,c=e.isins,s=e.onIsinChange,u=e.maturiteEnJours,i=e.formData,o=e.onFormChange,l=e.triggerSubmit,b=(e.updateFormData,e.lang),d=function(e){var t="dateValeur"==e.target.name?e.target.value:i.dateValeur,n="dateEcheance"==e.target.name?e.target.value:i.dateEcheance,a=new Date(t),r=new Date(n);if(!a||!r)return 0;var c=Math.floor((r-a)/864e5);i.maturiteResiduel=c+1,o(e)};return[{label:m.translate("emetteur",b),name:"emetteur",value:t,onChange:a,options:{getList:function(){return n},getValue:function(e){return e},getLabel:function(e){return e}}},{label:m.translate("isin",b),name:"isin",value:r,onChange:s,options:{getList:function(){return c},getValue:function(e){return e},getLabel:function(e){return e}}},{label:m.translate("maturite_jour",b),name:"maturiteEnJours",value:i.maturiteEnJours,onChange:o,onBlur:l,options:{getList:function(){return u},getValue:function(e){return e},getLabel:function(e){return e}}},{label:m.translate("date_valeur",b),type:"date",name:"dateValeur",value:i.dateValeur,onChange:d,onBlur:l},{label:m.translate("date_echeance",b),type:"date",name:"dateEcheance",value:i.dateEcheance,onChange:d,onBlur:l},{label:m.translate("taux_pre_compte",b),type:"number",step:"0.01",name:"coupon",value:i.coupon,onChange:function(e){var t="coupon"==e.target.name?e.target.value:i.coupon,n="maturiteResiduel"==e.target.name?e.target.value:i.maturiteResiduel;if(console.log("COUPON",t),console.log("maturiteResiduel",n),0===i.coupon)return 0;i.tauxRendement=t/100/(1-t/100*(n/360))*100,o(e)},onBlur:l},{label:m.translate("maturite_residuel",b),name:"maturiteResiduel",value:i.maturiteResiduel,onChange:o,onBlur:l},{label:m.translate("valeur_nominale",b),type:"number",step:"0.01",name:"valeurNominale",value:i.valeurNominale,onChange:o,onBlur:l},{label:m.translate("taux_rendement",b),type:"number",step:"0.01",name:"tauxRendement",value:i.tauxRendement,onChange:o,onBlur:l},{label:m.translate("montant_placement",b),type:"number",name:"montantAPlacer",value:i.montantAPlacer,onChange:o,onBlur:l}]}({emetteur:p,emetteurs:b,onEmetteurChange:B,isin:C,isins:g,onIsinChange:L,maturiteEnJours:k,formData:t,onFormChange:function(e){var a=e.target,r=a.name,c=a.value;n(Object(l.a)(Object(l.a)({},t),{},Object(I.a)({},r,c)))},updateFormData:n,lang:r});return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)("hr",{}),Object(R.jsx)("h5",{className:"text-center",children:m.translate("titre_caracteristiques_bonds")}),Object(R.jsx)("hr",{}),V.map((function(e,t){return T.buildFieldGroup(e)}))]})})}),J=function(e){var t=e.results,n=e.lang;return Object(R.jsxs)("div",{className:"bg-light",children:[Object(R.jsx)("h5",{className:"text-center bg-secondary text-white my-4 py-2 ",children:m.translate("titre_resultats",n)}),Object(R.jsx)("table",{className:"table table-borderless",children:Object(R.jsxs)("tbody",{children:[Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("montant_net",n),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsxs)("span",{className:"badge bg-secondary",children:["FCFA ",t.montantNet]})})]}),Object(R.jsxs)("tr",{children:[Object(R.jsxs)("td",{className:"w-60 fw-bold bg-light",children:[m.translate("interet_couru",n),":"]}),Object(R.jsx)("td",{className:"w-30 bg-light",children:Object(R.jsxs)("span",{className:"badge bg-secondary",children:["FCFA ",t.interets]})})]})]})})]})},q=(n(76),function(e){var t=e.lang,n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=(r[0],r[1]),s=Object(a.useState)({maturiteEnJours:"",dateValeur:"",dateEcheance:"",coupon:"",maturiteResiduel:"",valeurNominale:"",tauxRendement:"",montantAPlacer:""}),m=Object(u.a)(s,2),b=m[0],d=m[1],j=Object(a.useState)({interets:"",montantNet:""}),f=Object(u.a)(j,2),p=f[0],h=f[1];Object(a.useEffect)((function(){x()&&g()}),[b]);var O=function(){return console.log(b),b.maturiteEnJours&&b.dateValeur&&b.dateEcheance&&b.coupon&&b.maturiteResiduel&&b.valeurNominale&&b.tauxRendement&&b.montantAPlacer},x=function(){return O()},g=function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(b);case 2:t=e.sent,console.log(t),h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()};return Object(R.jsxs)("div",{children:[Object(R.jsx)(M,{formData:b,updateFormData:function(e){var t=Object(l.a)(Object(l.a)({},b),e);d(t),c(O())},lang:t}),Object(R.jsx)(J,{results:p,lang:t})]})}),z=(n(320),n(321),n(322),function(){var e=Object(a.useState)("OAT"),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("fr"),s=Object(u.a)(c,2),i=s[0],o=s[1],l=function(e){r(e)},b=function(e){console.log(e),o(e)};return Object(R.jsxs)("div",{className:"container",children:[Object(R.jsxs)("p",{className:"text-center",children:[Object(R.jsx)("img",{src:"https://www.umoatitres.org/wp-content/uploads/2018/05/logo_UT_simple.png",alt:"Logo",width:"80%"}),Object(R.jsx)("span",{role:"button",onClick:function(){return b("fr")},children:Object(R.jsx)("img",{src:"https://flagcdn.com/24x18/fr.png",alt:"FR"})}),"\xa0",Object(R.jsx)("span",{role:"button",onClick:function(){return b("en")},children:Object(R.jsx)("img",{src:"https://flagcdn.com/24x18/gb.png",alt:"EN"})})]}),Object(R.jsx)("h2",{className:"text-center py-4 bg-primary text-white",children:m.translate("titre_principal",i)}),Object(R.jsxs)("ul",{className:"nav nav-pills nav-fill nav-justified",children:[Object(R.jsx)("li",{className:"nav-item",children:Object(R.jsx)("a",{className:"fw-bold nav-link ".concat("OAT"===n?"active bg-secondary":"bg-light"),onClick:function(){return l("OAT")},children:"OAT"})}),Object(R.jsx)("li",{className:"nav-item",children:Object(R.jsx)("a",{className:"fw-bold nav-link ".concat("BONDS"===n?"active bg-secondary":"bg-light"),onClick:function(){return l("BONDS")},children:"BONDS"})})]}),Object(R.jsxs)("div",{className:"tab-content",children:[Object(R.jsx)("div",{className:"tab-pane ".concat("OAT"===n?"active":""),id:"oat-tab",children:Object(R.jsx)(P,{lang:i})}),Object(R.jsx)("div",{className:"tab-pane ".concat("BONDS"===n?"active":""),id:"bonds-tab",children:Object(R.jsx)(q,{lang:i})})]})]})}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,325)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(z,{})})),G()},91:function(e,t,n){}},[[323,1,2]]]);
//# sourceMappingURL=main.2361d3b7.chunk.js.map