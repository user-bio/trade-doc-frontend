(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[41],{131:function(e,t,n){"use strict";var r=n(1),c=n(11),a=n(48),o=n(130),i=n(139);t.a=function(){var e=Object(c.f)(),t=Object(a.d)();Object(r.useEffect)((function(){t?i.verify(Object(o.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},138:function(e,t,n){"use strict";function r(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}function c(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5")}function a(e){return e.match(/\d/g).join("")}function o(e){return new Date(e).toLocaleString("pt-BR",{year:"numeric",month:"numeric",day:"numeric"})}function i(e){var t=e.split("/");return[t[2],t[1],t[0]].join("-")}function s(e){var t=e.split("/");return[t[1],t[0]].join("-")}n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},175:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(0),o=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,u=s(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),c.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),c.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));u.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},u.displayName="Edit",t.a=u},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(162),c=n.n(r),a=n(137),o=n.n(a),i=n(1),s=n.n(i),u=n(170),d=n.n(u),l=n(171),b=n.n(l);var j,f={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},O=s.a.createContext();function m(){return f}var v=function(){function e(){d()(this,e),this.usedNamespaces={}}return b()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function p(){return j}function h(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var g={};function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&g[t[0]]||("string"===typeof t[0]&&(g[t[0]]=new Date),h.apply(void 0,t))}function y(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],c=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(r,e)||c&&!o(a,e))))}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return x("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):N(e,t,n)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(O)||{},a=r.i18n,o=r.defaultNS,s=n||a||p();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new v),!s){x("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}s.options.react&&void 0!==s.options.react.wait&&x("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=P(P(P({},m()),s.options.react),t),b=l.useSuspense,j=l.keyPrefix,f=e||o||s.options&&s.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(f);var h=(s.isInitialized||s.initializedStoreOnce)&&f.every((function(e){return w(e,s,l)}));function g(){return s.getFixedT(null,"fallback"===l.nsMode?f:f[0],j)}var N=Object(i.useState)(g),S=c()(N,2),k=S[0],z=S[1],T=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){T.current&&z(g)}return T.current=!0,h||b||y(s,f,(function(){T.current&&z(g)})),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){T.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,f.join()]);var I=Object(i.useRef)(!0);Object(i.useEffect)((function(){T.current&&!I.current&&z(g),I.current=!1}),[s]);var _=[k,s,h];if(_.t=k,_.i18n=s,_.ready=h,h)return _;if(!h&&!b)return _;throw new Promise((function(e){y(s,f,(function(){e()}))}))}},567:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(0),o=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,u=s(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),c.a.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),c.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));u.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},u.displayName="Eye",t.a=u},870:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(131),a=n(41),o=n(14),i=n(567),s=n(175),u=n(47),d=n(138),l=n(13),b=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"50px",selector:function(e){return e.envio_id}},{name:"Tipo",reorder:!0,sortable:!0,selector:function(e){return e.tipo}},{name:"Cliente",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.cliente}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)(u.b,{className:"text-primary ms-1",title:"Visualizar",to:"/envios/detalhe/".concat(e.envio_id),children:Object(l.jsx)(i.a,{size:15})}),Object(l.jsx)(u.b,{className:"text-primary ms-1",title:"Editar",to:"/envios/form/".concat(e.envio_id),children:Object(l.jsx)(s.a,{size:15})})]})}}],j=(n(160),n(850)),f=n(161),O=n.n(f),m=n(11),v=n(187),p=n(133),h=n(130),g=function(){Object(m.f)();var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)(0)),f=Object(o.a)(d,2),g=f[0],x=(f[1],Object(r.useState)([])),y=Object(o.a)(x,2),N=y[0];y[1],Object(v.a)().t;Object(r.useEffect)((function(){Object(p.b)("dashboard/envios?vencidos[gt]=0",{method:"GET",token:Object(h.a)()}).then((function(e){var t=function(e){var t=e.reduce((function(e,t){var n=t.envio_id;return e[n]||(e[n]=t),e}),{});return Object.values(t)}(e.body);c(t)}))}),[]);return Object(l.jsx)(a.f,{className:"overflow-hidden",children:Object(l.jsx)("div",{className:"react-dataTable",children:Object(l.jsx)(O.a,{noHeader:!0,pagination:!0,data:u.length?N:n,columns:b,className:"react-dataTable",sortIcon:Object(l.jsx)(j.a,{size:10}),paginationDefaultPage:g+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},x=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"50px",selector:function(e){return e.envio_id}},{name:"Tipo",reorder:!0,sortable:!0,selector:function(e){return e.tipo}},{name:"Cliente",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.cliente}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)(u.b,{className:"text-primary ms-1",title:"Visualizar",to:"/envios/detalhe/".concat(e.envio_id),children:Object(l.jsx)(i.a,{size:15})}),Object(l.jsx)(u.b,{className:"text-primary ms-1",title:"Editar",to:"/envios/form/".concat(e.envio_id),children:Object(l.jsx)(s.a,{size:15})})]})}}],y=function(){Object(m.f)();var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)(0)),b=Object(o.a)(d,2),f=b[0],g=(b[1],Object(r.useState)([])),y=Object(o.a)(g,2),N=y[0];y[1],Object(v.a)().t;Object(r.useEffect)((function(){Object(p.b)("dashboard/envios?inconsistencia_dominios[gt]=0",{method:"GET",token:Object(h.a)()}).then((function(e){var t=function(e){var t=e.reduce((function(e,t){var n=t.envio_id;return e[n]||(e[n]=t),e}),{});return Object.values(t)}(e.body);c(t)}))}),[]);return Object(l.jsx)(a.f,{className:"overflow-hidden",children:Object(l.jsx)("div",{className:"react-dataTable",children:Object(l.jsx)(O.a,{noHeader:!0,pagination:!0,data:u.length?N:n,columns:x,className:"react-dataTable",sortIcon:Object(l.jsx)(j.a,{size:10}),paginationDefaultPage:f+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},N=function(){var e=Object(r.useState)("1"),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(e){n!==e&&c(e)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Inconsist\xeancias de envios"}),Object(l.jsxs)(a.u,{className:"mt-2",tabs:!0,children:[Object(l.jsx)(a.v,{children:Object(l.jsx)(a.w,{className:"1"===n?"active":"",onClick:function(){return i("1")},children:"Documento vencido"})}),Object(l.jsx)(a.v,{children:Object(l.jsx)(a.w,{className:"2"===n?"active":"",onClick:function(){return i("2")},children:"Dom\xednio"})})]}),Object(l.jsxs)(a.A,{activeTab:n,children:[Object(l.jsx)(a.B,{tabId:"1",children:Object(l.jsx)(a.z,{children:Object(l.jsx)(a.k,{sm:"12",children:Object(l.jsx)(g,{})})})}),Object(l.jsx)(a.B,{tabId:"2",children:Object(l.jsx)(a.z,{children:Object(l.jsx)(a.k,{sm:"12",children:Object(l.jsx)(y,{})})})})]})]})},w=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"50px",selector:function(e){return e.envio_id}},{name:"Tipo",reorder:!0,sortable:!0,selector:function(e){return e.tipo}},{name:"Cliente",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.cliente}},{name:"Data",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return Object(d.c)(e.proxima_data)}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)(u.b,{className:"text-primary ms-1",title:"Visualizar",to:"/envios/detalhe/".concat(e.envio_id),children:Object(l.jsx)(i.a,{size:15})}),Object(l.jsx)(u.b,{className:"text-primary ms-1",title:"Editar",to:"/envios/form/".concat(e.envio_id),children:Object(l.jsx)(s.a,{size:15})})]})}}],S=function(){Object(m.f)();var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)(0)),b=Object(o.a)(d,2),f=b[0],g=(b[1],Object(r.useState)([])),x=Object(o.a)(g,2),y=x[0];x[1],Object(v.a)().t;Object(r.useEffect)((function(){Object(p.b)("dashboard/envios?aprovacao=aprovada",{method:"GET",token:Object(h.a)()}).then((function(e){var t=function(e){var t=e.reduce((function(e,t){var n=t.envio_id;return e[n]||(e[n]=t),e}),{});return Object.values(t)}(e.body);c(t)}))}),[]);return Object(l.jsx)(a.f,{className:"overflow-hidden pt-2",children:Object(l.jsx)("div",{className:"react-dataTable",children:Object(l.jsx)(O.a,{noHeader:!0,pagination:!0,data:u.length?y:n,columns:w,className:"react-dataTable",sortIcon:Object(l.jsx)(j.a,{size:10}),paginationDefaultPage:f+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},P=function(){var e=Object(r.useState)("1"),t=Object(o.a)(e,2);t[0],t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Pr\xf3ximos envios"}),Object(l.jsx)(S,{})]})},k=[{name:"Tipo de documento",reorder:!0,sortable:!0,minWidth:"250px",selector:function(e){return e.nome}},{name:"Quantidade de documentos",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.vencido}}],z=function(e){Object(m.f)();var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=(n[1],Object(r.useState)(0)),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)([])),b=Object(o.a)(d,2),f=b[0],p=(b[1],Object(v.a)().t,e.documentos);return Object(l.jsx)(a.f,{className:"overflow-hidden",children:Object(l.jsx)("div",{className:"react-dataTable",children:Object(l.jsx)(O.a,{noHeader:!0,pagination:!0,data:c.length?f:p,columns:k,className:"react-dataTable",sortIcon:Object(l.jsx)(j.a,{size:10}),paginationDefaultPage:u+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},T=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(o.a)(i,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){Object(p.b)("dashboard/setores",{method:"GET",token:Object(h.a)()}).then((function(e){var t=e.body.reduce((function(e,t){var n=t.setor_id,r=t.setor,c=t.documentos_tipo_id,a=t.nome,o=t.a_vencer,i=t.vencido,s=t.list_id;return e[n]||(e[n]={setor:r,documentos:[]}),e[n].documentos.push({documentos_tipo_id:c,nome:a,a_vencer:o,vencido:i,list_id:s}),e}),{}),n=Object.values(t);d(n);var r=n.findIndex((function(e){return e.documentos.some((function(e){return e.vencido>0}))}));c(r>=0?r.toString():"0")}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Documentos vencidos"}),Object(l.jsx)(a.u,{className:"mt-2",tabs:!0,children:u.map((function(e,t){return e.documentos.some((function(e){return e.vencido>0}))?Object(l.jsx)(a.v,{children:Object(l.jsx)(a.w,{className:n==="".concat(t)?"active":"",onClick:function(){return e="".concat(t),void(n!==e&&c(e));var e},children:e.setor})},t):null}))}),Object(l.jsx)(a.A,{activeTab:n,children:u.map((function(e,t){if(e.documentos.some((function(e){return e.vencido>0}))){var n=e.documentos.filter((function(e){return e.vencido>0}));return Object(l.jsx)(a.B,{tabId:"".concat(t),children:Object(l.jsx)(a.z,{children:Object(l.jsx)(a.k,{sm:"12",children:Object(l.jsx)(z,{documentos:n})})})})}return null}))})]})},I=[{name:"Tipo de documento",reorder:!0,sortable:!0,minWidth:"250px",selector:function(e){return e.nome}},{name:"Quantidade de documentos",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.a_vencer}}],_=function(e){Object(m.f)();var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=(n[1],Object(r.useState)(0)),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)([])),b=Object(o.a)(d,2),f=b[0],p=(b[1],Object(v.a)().t,e.documentos);return Object(l.jsx)(a.f,{className:"overflow-hidden",children:Object(l.jsx)("div",{className:"react-dataTable",children:Object(l.jsx)(O.a,{noHeader:!0,pagination:!0,data:c.length?f:p,columns:I,className:"react-dataTable",sortIcon:Object(l.jsx)(j.a,{size:10}),paginationDefaultPage:u+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},E=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(o.a)(i,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){Object(p.b)("dashboard/setores",{method:"GET",token:Object(h.a)()}).then((function(e){var t=e.body.reduce((function(e,t){var n=t.setor_id,r=t.setor,c=t.documentos_tipo_id,a=t.nome,o=t.a_vencer,i=t.vencido,s=t.list_id;return e[n]||(e[n]={setor:r,documentos:[]}),e[n].documentos.push({documentos_tipo_id:c,nome:a,a_vencer:o,vencido:i,list_id:s}),e}),{}),n=Object.values(t);d(n);var r=n.findIndex((function(e){return e.documentos.some((function(e){return e.a_vencer>0}))}));c(r>=0?r.toString():"0")}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Documentos vencimento pr\xf3ximo"}),Object(l.jsx)(a.u,{className:"mt-2",tabs:!0,children:u.map((function(e,t){return e.documentos.some((function(e){return e.a_vencer>0}))?Object(l.jsx)(a.v,{children:Object(l.jsx)(a.w,{className:n==="".concat(t)?"active":"",onClick:function(){return e="".concat(t),void(n!==e&&c(e));var e},children:e.setor})},t):null}))}),Object(l.jsx)(a.A,{activeTab:n,children:u.map((function(e,t){if(e.documentos.some((function(e){return e.a_vencer>0}))){var n=e.documentos.filter((function(e){return e.a_vencer>0}));return Object(l.jsx)(a.B,{tabId:"".concat(t),children:Object(l.jsx)(a.z,{children:Object(l.jsx)(a.k,{sm:"12",children:Object(l.jsx)(_,{documentos:n})})})})}return null}))})]})};t.default=function(){return Object(c.a)(),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsx)(a.f,{children:Object(l.jsx)(a.g,{className:"pb-0",children:Object(l.jsx)(N,{})})})}),Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsx)(a.f,{children:Object(l.jsx)(a.g,{className:"pb-0",children:Object(l.jsx)(P,{})})})}),Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsx)(a.f,{children:Object(l.jsx)(a.g,{className:"pb-0",children:Object(l.jsx)(T,{})})})}),Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsx)(a.f,{children:Object(l.jsx)(a.g,{className:"pb-0",children:Object(l.jsx)(E,{})})})})]})})}}}]);
//# sourceMappingURL=41.031cf69e.chunk.js.map