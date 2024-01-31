(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[30],{1355:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(143),c=n(56),i=n(14),s=n(188),l=n(189),u=n(0),f=n.n(u);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,i=p(e,["color","size"]);return o.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.a.createElement("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"}))}));b.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},b.displayName="Activity";var m=b,j=n(799),O=n(181),g=n(152),h=n.n(g),v=n(153),y=n.n(v),x=n(64),w=n(144),k=n(141),N=n(18),E=y()(h.a),z=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"100px",selector:function(e){return e.id}},{name:"NOME",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.nome?e.nome.slice(0,30):""}},{name:"SETOR",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.Setore.setor}},{name:"TIPO",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.tipo}},{name:"STATUS",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.status?Object(N.jsx)(c.b,{color:"success",pill:!0,children:"Ativo"}):Object(N.jsx)(c.b,{color:"danger",pill:!0,children:"Inativo"})}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsxs)(c.C,{children:[Object(N.jsx)(c.o,{className:"pe-1",tag:"span",children:Object(N.jsx)(s.a,{size:15})}),Object(N.jsx)(c.n,{end:!0,children:Object(N.jsxs)(c.m,{className:"w-100",onClick:function(){return t=e.id,E.fire({title:"Deseja excluir?",text:"Voc\xea n\xe3o poder\xe1 reverter isso!",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim, deletar!",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(e){e.value?Object(w.b)("documentos/tipos/".concat(t),{method:"DELETE",token:Object(k.a)()}).then((function(){E.fire({icon:"success",title:"Deletado!",text:"Exclus\xe3o realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}).then((function(){window.location.reload(!1)}))})).catch((function(e){console.log(3),E.fire({icon:"error",title:"Erro!",text:e.response.data.error,customClass:{confirmButton:"btn btn-success"}})})):e.dismiss===E.DismissReason.cancel&&E.close()}));var t},children:[Object(N.jsx)(l.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})})]}),Object(N.jsx)(x.b,{className:"text-primary ms-1 ".concat("normal"===e.tipo?"d-block":"d-none"),title:"Parametriza\xe7\xe3o",to:"/documento/tipos/parametrizacao/".concat(e.id),children:Object(N.jsx)(m,{size:15})}),Object(N.jsx)(x.b,{className:"text-primary ms-1 ".concat("merge"===e.tipo?"d-block":"d-none"),title:"Parametriza\xe7\xe3o",to:"/documento/tipos/merge/".concat(e.id),children:Object(N.jsx)(j.a,{size:15})}),Object(N.jsx)(x.b,{className:"text-primary ms-1",title:"Editar",to:"/documento/tipos/form/".concat(e.id),children:Object(N.jsx)(O.a,{size:15})})]})}}],C=(n(167),n(1330)),S=n(168),P=n.n(S),T=n(9),L=n(198),I=function(){var e=Object(T.o)(),t=Object(r.useState)([]),n=Object(i.a)(t,2),o=n[0],a=n[1],s=Object(r.useState)(""),l=Object(i.a)(s,2),u=l[0],f=l[1],d=Object(r.useState)(0),p=Object(i.a)(d,2),b=p[0],m=(p[1],Object(r.useState)([])),j=Object(i.a)(m,2),O=j[0],g=j[1],h=Object(L.a)().t;Object(r.useEffect)((function(){Object(w.b)("documentos/tipos",{method:"GET",token:Object(k.a)()}).then((function(e){a(e.body)}))}),[]);return Object(N.jsxs)(c.f,{className:"overflow-hidden",children:[Object(N.jsx)(c.h,{children:Object(N.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(N.jsx)(c.j,{tag:"h4",children:"Tipos"}),Object(N.jsx)(c.e,{type:"submit",color:"primary",onClick:function(){return e("/documento/tipos/form")},children:"Novo Tipo"})]})}),Object(N.jsx)(c.z,{className:"justify-content-end mx-0",children:Object(N.jsxs)(c.k,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(N.jsx)(c.r,{className:"me-1",for:"search-input-1",children:h("Busca")}),Object(N.jsx)(c.q,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input-1",value:u,onChange:function(e){var t=e.target.value,n=[];f(t),t.length&&(n=o.filter((function(e){var n=e.nome.toLowerCase().startsWith(t.toLowerCase()),r=e.nome.toLowerCase().includes(t.toLowerCase());return n||(!n&&r?r:null)})),g(n),f(t))}})]})}),Object(N.jsx)("div",{className:"react-dataTable",children:Object(N.jsx)(P.a,{noHeader:!0,pagination:!0,data:u.length?O:o,columns:z,className:"react-dataTable",sortIcon:Object(N.jsx)(C.a,{size:10}),paginationDefaultPage:b+1,paginationRowsPerPageOptions:[100,150],paginationPerPage:100})})]})},B=(n(158),n(142));t.default=function(){return Object(B.a)(),Object(N.jsxs)(r.Fragment,{children:[Object(N.jsx)(a.a,{title:"Documentos",data:[{title:"Documentos",link:"/documentos"},{title:"Tipos"}]}),Object(N.jsx)(c.z,{children:Object(N.jsx)(c.k,{sm:"12",children:Object(N.jsx)(I,{})})})]})}},142:function(e,t,n){"use strict";var r=n(1),o=n(9),a=n(66),c=n(141),i=n(151);t.a=function(){var e=Object(o.o)(),t=Object(a.d)();Object(r.useEffect)((function(){t?i.verify(Object(c.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,n){"use strict";var r=n(21),o=n(1),a=n(64),c=n(65),i=n.n(c),s=n(56),l=n(18);t.a=function(e){var t=e.data,n=e.title;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[n?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.d,{tag:"li",children:Object(l.jsx)(a.b,{to:"/",children:"Home"})}),t.map((function(e,n){var c=e.link?a.b:o.Fragment,u=t.length-1===n;return Object(l.jsx)(s.d,{tag:"li",active:!u,className:i()({"text-primary":!u}),children:Object(l.jsx)(c,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})})})}},158:function(e,t,n){},181:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Edit",t.a=l},188:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),o.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),o.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="MoreVertical",t.a=l},189:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("polyline",{points:"3 6 5 6 21 6"}),o.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Trash",t.a=l},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n(154),o=n.n(r),a=n(148),c=n.n(a),i=n(1),s=n(161),l=n.n(s),u=n(162),f=n.n(u),d=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,p={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},b=function(e){return p[e]};var m,j={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(d,b)}},O=Object(i.createContext)();var g=function(){function e(){l()(this,e),this.usedNamespaces={}}return f()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function h(){return m}function v(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var y={};function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&y[t[0]]||("string"===typeof t[0]&&(y[t[0]]=new Date),v.apply(void 0,t))}function w(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t){var n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(O)||{},a=r.i18n,c=r.defaultNS,s=n||a||h();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new g),!s){x("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[l,{},!1];return u.t=l,u.i18n={},u.ready=!1,u}s.options.react&&void 0!==s.options.react.wait&&x("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=N(N(N({},j),s.options.react),t),d=f.useSuspense,p=f.keyPrefix,b=e||c||s.options&&s.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(b);var m=(s.isInitialized||s.initializedStoreOnce)&&b.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!c(r,e)||o&&!c(a,e)))}(e,t,n):(x("i18n.languages were undefined or empty",t.languages),!0)}(e,s,f)}));function v(){return s.getFixedT(null,"fallback"===f.nsMode?b:b[0],p)}var y=Object(i.useState)(v),k=o()(y,2),z=k[0],C=k[1],S=b.join(),P=E(S),T=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function n(){T.current&&C(v)}return T.current=!0,m||d||w(s,b,(function(){T.current&&C(v)})),m&&P&&P!==S&&T.current&&C(v),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){T.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,S]);var L=Object(i.useRef)(!0);Object(i.useEffect)((function(){T.current&&!L.current&&C(v),L.current=!1}),[s,p]);var I=[z,s,m];if(I.t=z,I.i18n=s,I.ready=m,m)return I;if(!m&&!d)return I;throw new Promise((function(e){w(s,b,(function(){e()}))}))}},799:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,c=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.a.createElement("polyline",{points:"14 2 14 8 20 8"}),o.a.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.a.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),o.a.createElement("polyline",{points:"10 9 9 9 8 9"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="FileText",t.a=l}}]);
//# sourceMappingURL=30.bdcfa266.chunk.js.map