(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[41],{131:function(e,t,n){"use strict";var r=n(1),c=n(11),a=n(48),o=n(130),i=n(139);t.a=function(){var e=Object(c.f)(),t=Object(a.d)();Object(r.useEffect)((function(){t?i.verify(Object(o.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},138:function(e,t,n){"use strict";function r(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}function c(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5")}function a(e){return e.match(/\d/g).join("")}function o(e){return new Date(e).toLocaleString("pt-BR",{year:"numeric",month:"numeric",day:"numeric"})}function i(e){var t=e.split("/");return[t[2],t[1],t[0]].join("-")}function s(e){var t=e.split("/");return[t[1],t[0]].join("-")}n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},175:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(0),o=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,u=s(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),c.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),c.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));u.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},u.displayName="Edit",t.a=u},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(162),c=n.n(r),a=n(137),o=n.n(a),i=n(1),s=n.n(i),u=n(170),d=n.n(u),l=n(171),b=n.n(l);var j,f={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},O=s.a.createContext();function m(){return f}var v=function(){function e(){d()(this,e),this.usedNamespaces={}}return b()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function p(){return j}function h(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var g={};function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&g[t[0]]||("string"===typeof t[0]&&(g[t[0]]=new Date),h.apply(void 0,t))}function y(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],c=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(r,e)||c&&!o(a,e))))}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return x("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):N(e,t,n)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(i.useContext)(O)||{},a=r.i18n,o=r.defaultNS,s=n||a||p();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new v),!s){x("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}s.options.react&&void 0!==s.options.react.wait&&x("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=P(P(P({},m()),s.options.react),t),b=l.useSuspense,j=l.keyPrefix,f=e||o||s.options&&s.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(f);var h=(s.isInitialized||s.initializedStoreOnce)&&f.every((function(e){return w(e,s,l)}));function g(){return s.getFixedT(null,"fallback"===l.nsMode?f:f[0],j)}var N=Object(i.useState)(g),S=c()(N,2),k=S[0],_=S[1],z=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){z.current&&_(g)}return z.current=!0,h||b||y(s,f,(function(){z.current&&_(g)})),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){z.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,f.join()]);var E=Object(i.useRef)(!0);Object(i.useEffect)((function(){z.current&&!E.current&&_(g),E.current=!1}),[s]);var T=[k,s,h];if(T.t=k,T.i18n=s,T.ready=h,h)return T;if(!h&&!b)return T;throw new Promise((function(e){y(s,f,(function(){e()}))}))}},567:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(0),o=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,u=s(e,["color","size"]);return c.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),c.a.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),c.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));u.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},u.displayName="Eye",t.a=u},870:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(131),a=n(41),o=n(14),i=n(51),s=n(567),u=n(175),d=n(47),l=n(138),b=n(13),j=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"50px",selector:function(e){return e.envio_id}},{name:"Tipo",reorder:!0,sortable:!0,selector:function(e){return e.tipo}},{name:"Cliente",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.cliente}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)(d.b,{className:"text-primary ms-1",title:"Visualizar",to:"/envios/detalhe/".concat(e.envio_id),children:Object(b.jsx)(s.a,{size:15})}),Object(b.jsx)(d.b,{className:"text-primary ms-1",title:"Editar",to:"/envios/form/".concat(e.envio_id),children:Object(b.jsx)(u.a,{size:15})})]})}}],f=(n(160),n(850)),O=n(161),m=n.n(O),v=n(11),p=n(187),h=n(133),g=n(130),x=n(188),y=function(){Object(v.f)();var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),d=u[0],l=(u[1],Object(r.useState)(0)),O=Object(o.a)(l,2),y=O[0],N=(O[1],Object(r.useState)([])),w=Object(o.a)(N,2),S=w[0],P=(w[1],Object(p.a)().t,function(e){var t=e.reduce((function(e,t){var n=t.envio_id;return e[n]||(e[n]=t),e}),{});return Object.values(t)});Object(r.useEffect)((function(){Object(h.b)("dashboard/envios?vencidos[gt]=0",{method:"GET",token:Object(g.a)()}).then((function(e){if(x.a.isAdmin()){var t=P(e.body);c(t)}else{var n=function(){var e,t=x.a.getUserStorage(),n=[],r=Object(i.a)(t.Setores);try{for(r.s();!(e=r.n()).done;){var c=e.value;c.Usuarios_Setores.permissoes.criaEnvio&&void 0!==c.Usuarios_Setores.permissoes&&n.push(c.id)}}catch(a){r.e(a)}finally{r.f()}return n}(),r=e.body.filter((function(e){return n.includes(e.setor_id)})),a=P(r);c(a)}}))}),[]);return Object(b.jsx)(a.f,{className:"overflow-hidden",children:Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:d.length?S:n,columns:j,className:"react-dataTable",sortIcon:Object(b.jsx)(f.a,{size:10}),paginationDefaultPage:y+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},N=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"50px",selector:function(e){return e.envio_id}},{name:"Tipo",reorder:!0,sortable:!0,selector:function(e){return e.tipo}},{name:"Cliente",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.cliente}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)(d.b,{className:"text-primary ms-1",title:"Visualizar",to:"/envios/detalhe/".concat(e.envio_id),children:Object(b.jsx)(s.a,{size:15})}),Object(b.jsx)(d.b,{className:"text-primary ms-1",title:"Editar",to:"/envios/form/".concat(e.envio_id),children:Object(b.jsx)(u.a,{size:15})})]})}}],w=function(){Object(v.f)();var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),d=u[0],l=(u[1],Object(r.useState)(0)),j=Object(o.a)(l,2),O=j[0],y=(j[1],Object(r.useState)([])),w=Object(o.a)(y,2),S=w[0],P=(w[1],Object(p.a)().t,function(e){var t=e.reduce((function(e,t){var n=t.envio_id;return e[n]||(e[n]=t),e}),{});return Object.values(t)});Object(r.useEffect)((function(){Object(h.b)("dashboard/envios?inconsistencia_dominios[gt]=0",{method:"GET",token:Object(g.a)()}).then((function(e){if(x.a.isAdmin()){var t=P(e.body);c(t)}else{var n=function(){var e,t=x.a.getUserStorage(),n=[],r=Object(i.a)(t.Setores);try{for(r.s();!(e=r.n()).done;){var c=e.value;c.Usuarios_Setores.permissoes.criaEnvio&&void 0!==c.Usuarios_Setores.permissoes&&n.push(c.id)}}catch(a){r.e(a)}finally{r.f()}return n}(),r=e.body.filter((function(e){return n.includes(e.setor_id)})),a=P(r);c(a)}}))}),[]);return Object(b.jsx)(a.f,{className:"overflow-hidden",children:Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:d.length?S:n,columns:N,className:"react-dataTable",sortIcon:Object(b.jsx)(f.a,{size:10}),paginationDefaultPage:O+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},S=function(){var e=Object(r.useState)("1"),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(e){n!==e&&c(e)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Inconsist\xeancias de envios"}),Object(b.jsxs)(a.u,{className:"mt-2",tabs:!0,children:[Object(b.jsx)(a.v,{children:Object(b.jsx)(a.w,{className:"1"===n?"active":"",onClick:function(){return i("1")},children:"Documento vencido"})}),Object(b.jsx)(a.v,{children:Object(b.jsx)(a.w,{className:"2"===n?"active":"",onClick:function(){return i("2")},children:"Dom\xednio"})})]}),Object(b.jsxs)(a.A,{activeTab:n,children:[Object(b.jsx)(a.B,{tabId:"1",children:Object(b.jsx)(a.z,{children:Object(b.jsx)(a.k,{sm:"12",children:Object(b.jsx)(y,{})})})}),Object(b.jsx)(a.B,{tabId:"2",children:Object(b.jsx)(a.z,{children:Object(b.jsx)(a.k,{sm:"12",children:Object(b.jsx)(w,{})})})})]})]})},P=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"50px",selector:function(e){return e.envio_id}},{name:"Tipo",reorder:!0,sortable:!0,selector:function(e){return e.tipo}},{name:"Cliente",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.cliente}},{name:"Data",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return Object(l.c)(e.proxima_data)}},{name:"Actions",allowOverflow:!0,maxWidth:"160px",cell:function(e){return Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)(d.b,{className:"text-primary ms-1",title:"Visualizar",to:"/envios/detalhe/".concat(e.envio_id),children:Object(b.jsx)(s.a,{size:15})}),Object(b.jsx)(d.b,{className:"text-primary ms-1",title:"Editar",to:"/envios/form/".concat(e.envio_id),children:Object(b.jsx)(u.a,{size:15})})]})}}],k=function(){Object(v.f)();var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),d=u[0],l=(u[1],Object(r.useState)(0)),j=Object(o.a)(l,2),O=j[0],y=(j[1],Object(r.useState)([])),N=Object(o.a)(y,2),w=N[0],S=(N[1],Object(p.a)().t,function(e){var t=e.reduce((function(e,t){var n=t.envio_id;return e[n]||(e[n]=t),e}),{});return Object.values(t)});Object(r.useEffect)((function(){Object(h.b)("dashboard/envios?aprovacao=aprovada",{method:"GET",token:Object(g.a)()}).then((function(e){if(x.a.isAdmin()){var t=S(e.body);c(t)}else{var n=function(){var e,t=x.a.getUserStorage(),n=[],r=Object(i.a)(t.Setores);try{for(r.s();!(e=r.n()).done;){var c=e.value;c.Usuarios_Setores.permissoes.criaEnvio&&void 0!==c.Usuarios_Setores.permissoes&&n.push(c.id)}}catch(a){r.e(a)}finally{r.f()}return n}(),r=e.body.filter((function(e){return n.includes(e.setor_id)})),a=S(r);c(a)}}))}),[]);return Object(b.jsx)(a.f,{className:"overflow-hidden pt-2",children:Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:d.length?w:n,columns:P,className:"react-dataTable",sortIcon:Object(b.jsx)(f.a,{size:10}),paginationDefaultPage:O+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},_=function(){var e=Object(r.useState)("1"),t=Object(o.a)(e,2);t[0],t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Pr\xf3ximos envios"}),Object(b.jsx)(k,{})]})},z=[{name:"Tipo de documento",reorder:!0,sortable:!0,minWidth:"250px",selector:function(e){return e.nome}},{name:"Quantidade de documentos",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.vencido}}],E=function(e){Object(v.f)();var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=(n[1],Object(r.useState)(0)),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)([])),l=Object(o.a)(d,2),j=l[0],O=(l[1],Object(p.a)().t,e.documentos);return Object(b.jsx)(a.f,{className:"overflow-hidden",children:Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:c.length?j:O,columns:z,className:"react-dataTable",sortIcon:Object(b.jsx)(f.a,{size:10}),paginationDefaultPage:u+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},T=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(o.a)(i,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){Object(h.b)("dashboard/setores",{method:"GET",token:Object(g.a)()}).then((function(e){var t=e.body.reduce((function(e,t){var n=t.setor_id,r=t.setor,c=t.documentos_tipo_id,a=t.nome,o=t.a_vencer,i=t.vencido,s=t.list_id;return e[n]||(e[n]={setor:r,documentos:[]}),e[n].documentos.push({documentos_tipo_id:c,nome:a,a_vencer:o,vencido:i,list_id:s}),e}),{}),n=Object.values(t);d(n);var r=n.findIndex((function(e){return e.documentos.some((function(e){return e.vencido>0}))}));c(r>=0?r.toString():"0")}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Documentos vencidos"}),Object(b.jsx)(a.u,{className:"mt-2",tabs:!0,children:u.map((function(e,t){return e.documentos.some((function(e){return e.vencido>0}))?Object(b.jsx)(a.v,{children:Object(b.jsx)(a.w,{className:n==="".concat(t)?"active":"",onClick:function(){return e="".concat(t),void(n!==e&&c(e));var e},children:e.setor})},t):null}))}),Object(b.jsx)(a.A,{activeTab:n,children:u.map((function(e,t){if(e.documentos.some((function(e){return e.vencido>0}))){var n=e.documentos.filter((function(e){return e.vencido>0}));return Object(b.jsx)(a.B,{tabId:"".concat(t),children:Object(b.jsx)(a.z,{children:Object(b.jsx)(a.k,{sm:"12",children:Object(b.jsx)(E,{documentos:n})})})})}return null}))})]})},I=[{name:"Tipo de documento",reorder:!0,sortable:!0,minWidth:"250px",selector:function(e){return e.nome}},{name:"Quantidade de documentos",reorder:!0,sortable:!0,minWidth:"150px",selector:function(e){return e.a_vencer}}],C=function(e){Object(v.f)();var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=(n[1],Object(r.useState)(0)),s=Object(o.a)(i,2),u=s[0],d=(s[1],Object(r.useState)([])),l=Object(o.a)(d,2),j=l[0],O=(l[1],Object(p.a)().t,e.documentos);return Object(b.jsx)(a.f,{className:"overflow-hidden",children:Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:c.length?j:O,columns:I,className:"react-dataTable",sortIcon:Object(b.jsx)(f.a,{size:10}),paginationDefaultPage:u+1,paginationRowsPerPageOptions:[3,6],paginationPerPage:3})})})},D=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(o.a)(i,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){Object(h.b)("dashboard/setores",{method:"GET",token:Object(g.a)()}).then((function(e){var t=e.body.reduce((function(e,t){var n=t.setor_id,r=t.setor,c=t.documentos_tipo_id,a=t.nome,o=t.a_vencer,i=t.vencido,s=t.list_id;return e[n]||(e[n]={setor:r,documentos:[]}),e[n].documentos.push({documentos_tipo_id:c,nome:a,a_vencer:o,vencido:i,list_id:s}),e}),{}),n=Object.values(t);d(n);var r=n.findIndex((function(e){return e.documentos.some((function(e){return e.a_vencer>0}))}));c(r>=0?r.toString():"0")}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Documentos vencimento pr\xf3ximo"}),Object(b.jsx)(a.u,{className:"mt-2",tabs:!0,children:u.map((function(e,t){return e.documentos.some((function(e){return e.a_vencer>0}))?Object(b.jsx)(a.v,{children:Object(b.jsx)(a.w,{className:n==="".concat(t)?"active":"",onClick:function(){return e="".concat(t),void(n!==e&&c(e));var e},children:e.setor})},t):null}))}),Object(b.jsx)(a.A,{activeTab:n,children:u.map((function(e,t){if(e.documentos.some((function(e){return e.a_vencer>0}))){var n=e.documentos.filter((function(e){return e.a_vencer>0}));return Object(b.jsx)(a.B,{tabId:"".concat(t),children:Object(b.jsx)(a.z,{children:Object(b.jsx)(a.k,{sm:"12",children:Object(b.jsx)(C,{documentos:n})})})})}return null}))})]})};t.default=function(){return Object(c.a)(),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)(a.f,{children:Object(b.jsx)(a.g,{className:"pb-0",children:Object(b.jsx)(S,{})})})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)(a.f,{children:Object(b.jsx)(a.g,{className:"pb-0",children:Object(b.jsx)(_,{})})})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)(a.f,{children:Object(b.jsx)(a.g,{className:"pb-0",children:Object(b.jsx)(T,{})})})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)(a.f,{children:Object(b.jsx)(a.g,{className:"pb-0",children:Object(b.jsx)(D,{})})})})]})})}}}]);
//# sourceMappingURL=41.77652106.chunk.js.map