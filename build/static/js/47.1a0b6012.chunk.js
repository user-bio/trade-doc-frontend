(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[47],{162:function(e,t,n){var s=n(277),a=n(278),r=n(168),c=n(279);e.exports=function(e,t){return s(e)||a(e,t)||r(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},168:function(e,t,n){var s=n(173);e.exports=function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},170:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},171:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}e.exports=function(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},173:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s},e.exports.__esModule=!0,e.exports.default=e.exports},277:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},278:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(s=n.next()).done)&&(r.push(s.value),!t||r.length!==t);c=!0);}catch(i){o=!0,a=i}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return r}},e.exports.__esModule=!0,e.exports.default=e.exports},279:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},867:function(e,t,n){"use strict";n.r(t);var s=n(14),a=n(1),r=n(41),c=n(11),o=n(150),i=n.n(o),l=n(151),d=n.n(l),u=n(133),j=n(43),b=n(13),m=d()(i.a);t.default=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(null),l=Object(s.a)(i,2),d=l[0],x=l[1],p=Object(a.useState)(null),h=Object(s.a)(p,2),f=h[0],O=h[1],v=Object(c.g)().id;return m.fire({title:"Pol\xedtica de privacidade",html:"<p class='text-start'>Esta mensagem, incluindo os seus anexos, \xe9 dirigida exclusivamente ao destinat\xe1rio, com prop\xf3sito espec\xedfico, e, pode conter dados pessoais, informa\xe7\xf5es confidenciais e legalmente protegidas. Se voc\xea n\xe3o for destinat\xe1rio desta mensagem, desde j\xe1 fica notificado de abster-se a divulgar, copiar, distribuir, examinar ou, de qualquer forma, utilizar a informa\xe7\xe3o contida nesta mensagem, por ser ilegal e n\xe3o ter autoriza\xe7\xe3o para tais atos. Se voc\xea a recebeu por engano, avise imediatamente o remetente e apague-a. Caso seja o destinat\xe1rio, ressaltamos que as informa\xe7\xf5es ou dados pessoais aqui transacionados devem ser tratados com respeito \xe0 privacidade e fundamentos previstos na Lei n\xba 13.709/2018 \u2013 Lei Geral de Prote\xe7\xe3o de Dados Pessoais (LGPD) e demais legisla\xe7\xf5es aplic\xe1veis.</p>",icon:"warning",showCancelButton:!1,confirmButtonText:"Sim, entendido!",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}),Object(a.useEffect)((function(){Object(u.b)("envios/arquivos/".concat(v),{method:"GET"}).then((function(e){o(e.body.funcionarios),x(e.body.empresa)})).catch((function(e){O(e.response.data)}))}),[]),Object(b.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(a.Fragment,{children:Object(b.jsx)(r.z,{children:Object(b.jsx)(r.k,{sm:"12",children:Object(b.jsx)(r.f,{children:Object(b.jsx)(r.g,{children:Object(b.jsx)(r.z,{children:Object(b.jsxs)(r.k,{className:"mb-1",xl:"12",md:"12",sm:"12",children:[Object(b.jsx)("div",{className:"pt-2",children:Object(b.jsxs)(r.j,{tag:"h1",className:"fw-bold mb-1 text-center",children:[Object(b.jsx)("img",{className:"me-1",src:j.default,width:"40"}),"Trade DOC"]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"pt-5 ".concat(null!=f?"":"d-none"),children:Object(b.jsxs)(r.j,{className:"text-center",tag:"h2",children:["Link expirado! ",Object(b.jsx)("br",{}),"Solicite um novo envio."]})}),Object(b.jsxs)("div",{className:"pt-5 ".concat(null!=n?"":"d-none"),children:[Object(b.jsx)("h3",{className:"mb-2 mt-2 text-center",children:"Documentos funcion\xe1rios"}),Object(b.jsx)("div",{className:"AjusteTabela",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{width:"33%",children:"Nome"}),Object(b.jsx)("th",{width:"33%",children:"Tipo de documentos"}),Object(b.jsx)("th",{width:"33%",className:"text-end"})]})}),Object(b.jsx)("tbody",{children:null!==n?n.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.nome}),Object(b.jsx)("td",{children:e.Documentos.map((function(e,t){return Object(b.jsx)("div",{className:"w-100",children:Object(b.jsx)("div",{className:"btn",children:e.Documentos_Tipo.nome},t)})}))}),Object(b.jsx)("td",{className:"text-end",children:e.Documentos.map((function(e,t){return Object(b.jsx)("div",{className:"my-1 w-100",children:Object(b.jsx)("a",{className:"btn btn-primary",href:"".concat(u.a,"envios/arquivos/").concat(v,"/").concat(e.arquivo),target:"_blank",children:"Baixar"},t)})}))})]},t)})):""})]})})]}),Object(b.jsxs)("div",{className:"pt-5 ".concat(null!=d?"":"d-none"),children:[Object(b.jsx)("h3",{className:"mb-2 mt-2 text-center",children:"Documentos empresa"}),Object(b.jsx)("div",{className:"AjusteTabela",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{width:"33%",children:"Empresa"}),Object(b.jsx)("th",{width:"33%",children:"Tipo de documentos"}),Object(b.jsx)("th",{width:"33%",className:"text-end"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:null!==d?d.razao_social:""}),Object(b.jsx)("td",{children:null!==d?d.Documentos.map((function(e,t){return Object(b.jsx)("div",{className:"w-100",children:Object(b.jsx)("div",{className:"btn w-100 text-start",children:e.Documentos_Tipo.nome},t)})})):""}),Object(b.jsx)("td",{className:"text-end",children:null!==d?d.Documentos.map((function(e,t){return Object(b.jsx)("div",{className:"my-1 w-100",children:Object(b.jsx)("a",{className:"btn btn-primary",href:"".concat(u.a,"envios/arquivos/").concat(v,"/").concat(e.arquivo),target:"_blank",children:"Baixar"},t)})})):""})]})})]})})]})]})]})})})})})})})})})}}}]);
//# sourceMappingURL=47.1a0b6012.chunk.js.map