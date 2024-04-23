(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[26],{1359:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(143),o=n(56),c=n(14),i=n(188),s=n(189),u=n(183),l=n(152),d=n.n(l),f=n(153),p=n.n(f),b=n(64),j=n(144),m=n(150),g=n(141),h=n(18),O=p()(d.a),v=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"100px",selector:function(e){return e.id}},{name:"Raz\xe3o Social",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.razao_social}},{name:"Nome Fantasia",reorder:!0,sortable:!0,minWidth:"310px",selector:function(e){return e.nome_fantasia}},{name:"CNPJ",reorder:!0,sortable:!0,minWidth:"250px",selector:function(e){return Object(m.d)(e.cnpj)}},{name:"Status",reorder:!0,sortable:!0,minWidth:"50px",color:"light-warning",selector:function(e){return e.status?Object(h.jsx)(o.b,{color:"success",pill:!0,children:"Ativo"}):Object(h.jsx)(o.b,{color:"danger",pill:!0,children:"Inativo"})}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsxs)(o.C,{children:[Object(h.jsx)(o.o,{className:"pe-1",tag:"span",children:Object(h.jsx)(i.a,{size:15})}),Object(h.jsx)(o.n,{end:!0,children:Object(h.jsxs)(o.m,{className:"w-100",onClick:function(){return t=e.id,O.fire({title:"Deseja excluir?",text:"Voc\xea n\xe3o poder\xe1 reverter isso!",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim, deletar!",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(e){e.value?Object(j.b)("empresas/".concat(t),{method:"DELETE",token:Object(g.a)()}).then((function(){O.fire({icon:"success",title:"Deletado!",text:"Exclus\xe3o realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}).then((function(){window.location.reload(!1)}))})):e.dismiss===O.DismissReason.cancel&&O.close()}));var t},children:[Object(h.jsx)(s.a,{size:15}),Object(h.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})})]}),Object(h.jsx)(b.b,{className:"text-primary ms-1",title:"Editar",to:"/empresas/form/".concat(e.id),children:Object(h.jsx)(u.a,{size:15})})]})}}],y=(n(167),n(1330)),x=n(168),w=n.n(x),N=n(9),k=n(198),C=function(){var e=Object(N.o)(),t=Object(r.useState)([]),n=Object(c.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(""),u=Object(c.a)(s,2),l=u[0],d=u[1],f=Object(r.useState)(0),p=Object(c.a)(f,2),b=p[0],m=(p[1],Object(r.useState)([])),O=Object(c.a)(m,2),x=O[0],C=O[1],E=Object(k.a)().t;Object(r.useEffect)((function(){Object(j.b)("empresas",{method:"GET",token:Object(g.a)()}).then((function(e){i(e.body)}))}),[]);return Object(h.jsxs)(o.f,{className:"overflow-hidden",children:[Object(h.jsx)(o.h,{children:Object(h.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(h.jsx)(o.j,{tag:"h4",children:"Empresas"}),Object(h.jsx)(o.e,{type:"submit",color:"primary",onClick:function(){return e("/empresas/form")},children:"Nova Empresa"})]})}),Object(h.jsx)(o.z,{className:"justify-content-end mx-0",children:Object(h.jsxs)(o.k,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(h.jsx)(o.r,{className:"me-1",for:"search-input-1",children:E("Busca")}),Object(h.jsx)(o.q,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input-1",value:l,onChange:function(e){var t=e.target.value,n=[];d(t),t.length&&(n=a.filter((function(e){var n=e.razao_social.toLowerCase().startsWith(t.toLowerCase())||e.nome_fantasia.toLowerCase().startsWith(t.toLowerCase())||e.cnpj.toLowerCase().startsWith(t.toLowerCase()),r=e.razao_social.toLowerCase().includes(t.toLowerCase())||e.nome_fantasia.toLowerCase().includes(t.toLowerCase())||e.cnpj.toLowerCase().includes(t.toLowerCase());return n||(!n&&r?r:null)})),C(n),d(t))}})]})}),Object(h.jsx)("div",{className:"react-dataTable",children:Object(h.jsx)(w.a,{noHeader:!0,pagination:!0,data:l.length?x:a,columns:v,className:"react-dataTable",sortIcon:Object(h.jsx)(y.a,{size:10}),paginationDefaultPage:b+1,paginationRowsPerPageOptions:[100,150],paginationPerPage:100})})]})},E=(n(158),n(142));t.default=function(){return Object(E.a)(),Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(a.a,{title:"Empresas",data:[{title:"Empresas"},{title:"Todas as Empresas"}]}),Object(h.jsx)(o.z,{children:Object(h.jsx)(o.k,{sm:"12",children:Object(h.jsx)(C,{})})})]})}},142:function(e,t,n){"use strict";var r=n(1),a=n(9),o=n(66),c=n(141),i=n(151);t.a=function(){var e=Object(a.o)(),t=Object(o.d)();Object(r.useEffect)((function(){t?i.verify(Object(c.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,n){"use strict";var r=n(21),a=n(1),o=n(64),c=n(65),i=n.n(c),s=n(56),u=n(18);t.a=function(e){var t=e.data,n=e.title;return Object(u.jsx)("div",{className:"content-header row",children:Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[n?Object(u.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.d,{tag:"li",children:Object(u.jsx)(o.b,{to:"/",children:"Home"})}),t.map((function(e,n){var c=e.link?o.b:a.Fragment,l=t.length-1===n;return Object(u.jsx)(s.d,{tag:"li",active:!l,className:i()({"text-primary":!l}),children:Object(u.jsx)(c,Object(r.a)(Object(r.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})})})}},150:function(e,t,n){"use strict";function r(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}function a(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5")}function o(e){return e.match(/\d/g).join("")}function c(e){return new Date(e).toLocaleString("pt-BR",{year:"numeric",month:"numeric",day:"numeric"})}function i(e){var t=e.split("/");return[t[2],t[1],t[0]].join("-")}function s(e){var t=e.split("/");return[t[1],t[0]].join("-")}n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))},158:function(e,t,n){},183:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),c=n.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,u=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),a.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},u.displayName="Edit",t.a=u},188:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),c=n.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,u=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),a.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),a.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},u.displayName="MoreVertical",t.a=u},189:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),c=n.n(o);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,c=void 0===o?24:o,u=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("polyline",{points:"3 6 5 6 21 6"}),a.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));u.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},u.displayName="Trash",t.a=u},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(154),a=n.n(r),o=n(148),c=n.n(o),i=n(1),s=n(161),u=n.n(s),l=n(162),d=n.n(l),f=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,p={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},b=function(e){return p[e]};var j,m={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(f,b)}},g=Object(i.createContext)();var h=function(){function e(){u()(this,e),this.usedNamespaces={}}return d()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function O(){return j}function v(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var y={};function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&y[t[0]]||("string"===typeof t[0]&&(y[t[0]]=new Date),v.apply(void 0,t))}function w(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e,t){var n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(g)||{},o=r.i18n,c=r.defaultNS,s=n||o||O();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new h),!s){x("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}s.options.react&&void 0!==s.options.react.wait&&x("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=k(k(k({},m),s.options.react),t),f=d.useSuspense,p=d.keyPrefix,b=e||c||s.options&&s.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(b);var j=(s.isInitialized||s.initializedStoreOnce)&&b.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!c(r,e)||a&&!c(o,e)))}(e,t,n):(x("i18n.languages were undefined or empty",t.languages),!0)}(e,s,d)}));function v(){return s.getFixedT(null,"fallback"===d.nsMode?b:b[0],p)}var y=Object(i.useState)(v),N=a()(y,2),E=N[0],L=N[1],z=b.join(),S=C(z),P=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=d.bindI18n,t=d.bindI18nStore;function n(){P.current&&L(v)}return P.current=!0,j||f||w(s,b,(function(){P.current&&L(v)})),j&&S&&S!==z&&P.current&&L(v),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){P.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,z]);var I=Object(i.useRef)(!0);Object(i.useEffect)((function(){P.current&&!I.current&&L(v),I.current=!1}),[s,p]);var T=[E,s,j];if(T.t=E,T.i18n=s,T.ready=j,j)return T;if(!j&&!f)return T;throw new Promise((function(e){w(s,b,(function(){e()}))}))}}}]);
//# sourceMappingURL=26.055abfd0.chunk.js.map