(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[33],{1366:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(143),c=r(56),a=r(14),i=r(192),s=r(193),l=r(187),u=r(153),d=r.n(u),b=r(154),f=r.n(b),j=r(64),p=r(144),m=r(141),O=r(18),h=f()(d.a),v=[{name:"ID",reorder:!0,sortable:!0,maxWidth:"100px",selector:function(e){return e.id}},{name:"Tipo",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.tipo}},{name:"Campo busca",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.tipo_funcionario}},{name:"X",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.x}},{name:"Y",reorder:!0,sortable:!0,minWidth:"225px",selector:function(e){return e.y}},{name:"Actions",allowOverflow:!0,maxWidth:"120px",cell:function(e){return Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)(c.D,{children:[Object(O.jsx)(c.o,{className:"pe-1",tag:"span",children:Object(O.jsx)(i.a,{size:15})}),Object(O.jsx)(c.n,{end:!0,children:Object(O.jsxs)(c.m,{className:"w-100",onClick:function(){return t=e.id,h.fire({title:"Deseja excluir?",text:"Voc\xea n\xe3o poder\xe1 reverter isso!",icon:"warning",showCancelButton:!0,confirmButtonText:"Sim, deletar!",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(e){e.value?Object(p.b)("documentos/tipos/parse/".concat(t),{method:"DELETE",token:Object(m.a)()}).then((function(){h.fire({icon:"success",title:"Deletado!",text:"Exclus\xe3o realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}).then((function(){window.location.reload(!1)}))})):e.dismiss===h.DismissReason.cancel&&h.close()}));var t},children:[Object(O.jsx)(s.a,{size:15}),Object(O.jsx)("span",{className:"align-middle ms-50",children:"Delete"})]})})]}),Object(O.jsx)(j.b,{className:"text-primary ms-1",title:"Editar",to:"/documento/tipos/parametrizacao/form/".concat(e.documento_tipo_id,"/").concat(e.id),children:Object(O.jsx)(l.a,{size:15})})]})}}],x=(r(157),r(211)),g=r(158),y=r.n(g),w=r(9),k=function(){var e=Object(w.q)().id,t=Object(w.o)(),r=Object(n.useState)([]),o=Object(a.a)(r,2),i=o[0],s=o[1],l=Object(n.useState)(0),u=Object(a.a)(l,2),d=u[0];u[1];Object(n.useEffect)((function(){Object(p.b)("documentos/tipos/".concat(e),{method:"GET",token:Object(m.a)()}).then((function(e){s(e.body)}))}),[]);return Object(O.jsxs)(c.f,{className:"overflow-hidden",children:[Object(O.jsx)(c.h,{children:Object(O.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(O.jsxs)(c.j,{tag:"h4",children:["Parametriza\xe7\xe3o - ",i.nome]}),Object(O.jsx)(c.e,{type:"submit",color:"primary",onClick:function(){return t("/documento/tipos/parametrizacao/form/".concat(e))},children:"Nova parametrezi\xe7\xe3o"})]})}),Object(O.jsx)("div",{className:"react-dataTable",children:Object(O.jsx)(y.a,{noHeader:!0,pagination:!0,data:i.Documentos_Tipos_Parses,columns:v,className:"react-dataTable",sortIcon:Object(O.jsx)(x.a,{size:10}),paginationDefaultPage:d+1,paginationRowsPerPageOptions:[10,25,50,100]})})]})},z=(r(161),r(142));t.default=function(){return Object(z.a)(),Object(O.jsxs)(n.Fragment,{children:[Object(O.jsx)(o.a,{title:"Documentos",data:[{title:"Documentos",link:"/documentos"},{title:"Tipos",link:"/documento/tipos"},{title:"Parametriza\xe7\xe3o"}]}),Object(O.jsx)(c.z,{children:Object(O.jsx)(c.k,{sm:"12",children:Object(O.jsx)(k,{})})})]})}},142:function(e,t,r){"use strict";var n=r(1),o=r(9),c=r(66),a=r(141),i=r(152);t.a=function(){var e=Object(o.o)(),t=Object(c.d)();Object(n.useEffect)((function(){t?i.verify(Object(a.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,r){"use strict";var n=r(21),o=r(1),c=r(64),a=r(65),i=r.n(a),s=r(56),l=r(18);t.a=function(e){var t=e.data,r=e.title;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[r?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:r}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.d,{tag:"li",children:Object(l.jsx)(c.b,{to:"/",children:"Home"})}),t.map((function(e,r){var a=e.link?c.b:o.Fragment,u=t.length-1===r;return Object(l.jsx)(s.d,{tag:"li",active:!u,className:i()({"text-primary":!u}),children:Object(l.jsx)(a,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},r)}))]})})]})})})})}},148:function(e,t,r){var n=r(221);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},161:function(e,t,r){},180:function(e,t,r){"use strict";function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,"a",(function(){return n}))},181:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports},187:function(e,t,r){"use strict";var n=r(1),o=r.n(n),c=r(0),a=r.n(c);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,a=void 0===c?24:c,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Edit",t.a=l},192:function(e,t,r){"use strict";var n=r(1),o=r.n(n),c=r(0),a=r.n(c);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,a=void 0===c?24:c,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),o.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),o.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="MoreVertical",t.a=l},193:function(e,t,r){"use strict";var n=r(1),o=r.n(n),c=r(0),a=r.n(c);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,a=void 0===c?24:c,l=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("polyline",{points:"3 6 5 6 21 6"}),o.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Trash",t.a=l}}]);
//# sourceMappingURL=33.ff01faec.chunk.js.map