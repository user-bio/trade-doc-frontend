(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[45],{1342:function(e,t,c){"use strict";c.r(t);var o=c(21),n=c(14),a=c(1),i=c(56),r=c(172),s=c(171),l=c(143),d=c(166),b=c(65),u=c.n(b),j=c(152),m=c.n(j),f=c(153),O=c.n(f),p=c(9),x=c(142),h=c(141),v=c(144),y=c(18),N=O()(m.a);t.default=function(){var e=Object(p.o)(),t=Object(p.q)().id,c=Object(p.q)().item,b=Object(a.useState)(null),j=Object(n.a)(b,2),m=(j[0],j[1]),f=Object(a.useState)(null),O=Object(n.a)(f,2),k=(O[0],O[1]),z=Object(a.useState)(null),g=Object(n.a)(z,2),_=g[0],S=g[1];Object(x.a)();var C=[{value:"empresa",label:"empresa"},{value:"funcionario",label:"funcionario"}],Y=Object(d.b)({}),w=Y.reset,P=Y.control,q=(Y.setError,Y.handleSubmit),E=Y.setValue;Y.formState.errors;void 0===t&&e("/clientes"),Object(a.useEffect)((function(){Object(v.b)("documentos/tipos/".concat(t),{method:"GET",token:Object(h.a)()}).then((function(e){m(e.body)}))}),[]),void 0!==c&&Object(a.useEffect)((function(){Object(v.b)("documentos/tipos/parse/".concat(c),{method:"GET",token:Object(h.a)()}).then((function(e){w({tipo_funcionario:e.body.tipo_funcionario,x:e.body.x,y:e.body.y,index:e.body.index}),E("tipo",{value:e.body.tipo,label:e.body.tipo}),k(e.body)}))}),[]);return Object(y.jsxs)(a.Fragment,{children:[Object(y.jsx)(l.a,{title:"Documentos",data:[{title:"Documentos",link:"/documentos"},{title:"Tipos",link:"/documento/tipos"},{title:"Nova Parametriza\xe7\xe3o"}]}),Object(y.jsx)(i.z,{children:Object(y.jsx)(i.k,{sm:"12",children:Object(y.jsx)(i.f,{children:Object(y.jsx)(i.g,{children:Object(y.jsxs)(i.p,{onSubmit:q((function(o){if(S(o),void 0!==o.tipo&&""!=o.tipo_funcionario){var n={tipo:o.tipo.value,documento_tipo_id:t,tipo_funcionario:o.tipo_funcionario,x:o.x,y:o.y};void 0===c?Object(v.b)("documentos/tipos/parse",{method:"POST",body:n,token:Object(h.a)()}).then((function(c){N.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/documento/tipos/parametrizacao/".concat(t))})):Object(v.b)("documentos/tipos/parse/".concat(c),{method:"PUT",body:n,token:Object(h.a)()}).then((function(c){N.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/documento/tipos/parametrizacao/".concat(t))}))}})),children:[Object(y.jsxs)(i.z,{children:[Object(y.jsxs)(i.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(y.jsx)(i.r,{className:"form-label",for:"tipo",children:"Tipo"}),Object(y.jsx)(d.a,{id:"tipo",control:P,name:"tipo",render:function(e){var t=e.field;return Object(y.jsx)(r.a,Object(o.a)({options:C,classNamePrefix:"select",theme:s.d,className:u()("react-select",{"is-invalid":null!==_&&void 0===_.tipo})},t))}})]}),Object(y.jsxs)(i.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(y.jsx)(i.r,{className:"form-label",for:"tipo_funcionario",children:"Campo"}),Object(y.jsx)(d.a,{defaultValue:"",control:P,id:"tipo_funcionario",name:"tipo_funcionario",render:function(e){var t=e.field;return Object(y.jsx)(i.q,Object(o.a)({placeholder:"cnpj, cpf, cnh, matricula, pis, rg",className:u()("form-control",{"is-invalid":null!==_&&(null===_.tipo_funcionario||!_.tipo_funcionario.length)})},t))}})]}),Object(y.jsxs)(i.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(y.jsx)(i.r,{className:"form-label",for:"x",children:"X"}),Object(y.jsx)(d.a,{defaultValue:"",control:P,id:"x",name:"x",render:function(e){var t=e.field;return Object(y.jsx)(i.q,Object(o.a)({placeholder:"X"},t))}})]}),Object(y.jsxs)(i.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(y.jsx)(i.r,{className:"form-label",for:"y",children:"Y"}),Object(y.jsx)(d.a,{defaultValue:"",control:P,id:"y",name:"y",render:function(e){var t=e.field;return Object(y.jsx)(i.q,Object(o.a)({placeholder:"Y"},t))}})]})]}),Object(y.jsx)("div",{className:" text-end w-100",children:Object(y.jsx)(i.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})}},142:function(e,t,c){"use strict";var o=c(1),n=c(9),a=c(66),i=c(141),r=c(151);t.a=function(){var e=Object(n.o)(),t=Object(a.d)();Object(o.useEffect)((function(){t?r.verify(Object(i.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,c){"use strict";var o=c(21),n=c(1),a=c(64),i=c(65),r=c.n(i),s=c(56),l=c(18);t.a=function(e){var t=e.data,c=e.title;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[c?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.d,{tag:"li",children:Object(l.jsx)(a.b,{to:"/",children:"Home"})}),t.map((function(e,c){var i=e.link?a.b:n.Fragment,d=t.length-1===c;return Object(l.jsx)(s.d,{tag:"li",active:!d,className:r()({"text-primary":!d}),children:Object(l.jsx)(i,Object(o.a)(Object(o.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})})})}},148:function(e,t,c){var o=c(182);e.exports=function(e,t,c){return(t=o(t))in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e},e.exports.__esModule=!0,e.exports.default=e.exports},174:function(e,t,c){"use strict";function o(e){var t=Object.create(null);return function(c){return void 0===t[c]&&(t[c]=e(c)),t[c]}}c.d(t,"a",(function(){return o}))},183:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=45.cf0d5484.chunk.js.map