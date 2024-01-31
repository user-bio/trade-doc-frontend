(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[43],{1335:function(e,t,c){"use strict";c.r(t);var n=c(21),s=c(14),a=c(1),l=c(56),o=c(172),i=c(171),r=c(143),b=c(166),u=c(65),d=c.n(u),j=c(152),m=c.n(j),f=c(153),O=c.n(f),h=c(9),x=c(142),v=c(141),p=c(144),N=c(18),k=O()(m.a);t.default=function(){var e=Object(h.o)(),t=Object(h.q)().id,c=Object(h.q)().item,u=Object(a.useState)(null),j=Object(s.a)(u,2),m=(j[0],j[1]),f=Object(a.useState)(null),O=Object(s.a)(f,2),y=(O[0],O[1]),C=Object(a.useState)(null),g=Object(s.a)(C,2),S=g[0],z=g[1];Object(x.a)();var E=[{value:"1",label:"Ativo"},{value:"0",label:"Inativo"}],w={status:E[0]},Y=Object(b.b)({defaultValues:w}),J=Y.reset,P=Y.control,q=(Y.setError,Y.handleSubmit);Y.formState.errors;void 0===t&&e("/clientes"),Object(a.useEffect)((function(){Object(p.b)("clientes/".concat(t),{method:"GET",token:Object(v.a)()}).then((function(e){m(e.body)}))}),[]),void 0!==c&&Object(a.useEffect)((function(){Object(p.b)("clientes/contatos/".concat(c),{method:"GET",token:Object(v.a)()}).then((function(e){J({nome:e.body.nome,email:e.body.email,status:e.body.status?E[0]:E[1]}),y(e.body)}))}),[]);return Object(N.jsxs)(a.Fragment,{children:[Object(N.jsx)(r.a,{title:"Clientes",data:[{title:"Clientes",link:"/clientes"},{title:"Contatos",link:"/clientes/contatos/".concat(t)},{title:"Novo Contato"}]}),Object(N.jsx)(l.z,{children:Object(N.jsx)(l.k,{sm:"12",children:Object(N.jsx)(l.f,{children:Object(N.jsx)(l.g,{children:Object(N.jsxs)(l.p,{onSubmit:q((function(n){if(z(n),""!==n.nome&&""!==n.email&&""!==n.status.value){var s={cliente_id:t,nome:n.nome,email:n.email,status:n.status.value};void 0===c?Object(p.b)("clientes/contatos",{method:"POST",body:s,token:Object(v.a)()}).then((function(c){k.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/clientes/contatos/".concat(t))})):Object(p.b)("clientes/contatos/".concat(c),{method:"PUT",body:s,token:Object(v.a)()}).then((function(c){k.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/clientes/contatos/".concat(t))}))}})),children:[Object(N.jsxs)(l.z,{children:[Object(N.jsxs)(l.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(N.jsx)(l.r,{className:"form-label",for:"nome",children:"Nome"}),Object(N.jsx)(b.a,{defaultValue:"",control:P,id:"nome",name:"nome",render:function(e){var t=e.field;return Object(N.jsx)(l.q,Object(n.a)({placeholder:"Nome",className:d()("form-control",{"is-invalid":null!==S&&(null===S.nome||!S.nome.length)})},t))}})]}),Object(N.jsxs)(l.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(N.jsx)(l.r,{className:"form-label",for:"nome_fantasia",children:"E-mail"}),Object(N.jsx)(b.a,{defaultValue:"",control:P,id:"email",name:"email",render:function(e){var t=e.field;return Object(N.jsx)(l.q,Object(n.a)({placeholder:"E-mail",type:"email",className:d()("form-control",{"is-invalid":null!==S&&(null===S.email||!S.email.length)})},t))}})]}),Object(N.jsxs)(l.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(N.jsx)(l.r,{className:"form-label",for:"cnpj",children:"Status"}),Object(N.jsx)(b.a,{id:"status",control:P,name:"status",render:function(e){var t=e.field;return Object(N.jsx)(o.a,Object(n.a)({options:E,classNamePrefix:"select",theme:i.d,className:d()("react-select",{"is-invalid":null!==S&&null===S.status})},t))}})]})]}),Object(N.jsx)("div",{className:" text-end w-100",children:Object(N.jsx)(l.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})}},142:function(e,t,c){"use strict";var n=c(1),s=c(9),a=c(66),l=c(141),o=c(151);t.a=function(){var e=Object(s.o)(),t=Object(a.d)();Object(n.useEffect)((function(){t?o.verify(Object(l.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,c){"use strict";var n=c(21),s=c(1),a=c(64),l=c(65),o=c.n(l),i=c(56),r=c(18);t.a=function(e){var t=e.data,c=e.title;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[c?Object(r.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.d,{tag:"li",children:Object(r.jsx)(a.b,{to:"/",children:"Home"})}),t.map((function(e,c){var l=e.link?a.b:s.Fragment,b=t.length-1===c;return Object(r.jsx)(i.d,{tag:"li",active:!b,className:o()({"text-primary":!b}),children:Object(r.jsx)(l,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})})})}},148:function(e,t,c){var n=c(182);e.exports=function(e,t,c){return(t=n(t))in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e},e.exports.__esModule=!0,e.exports.default=e.exports},174:function(e,t,c){"use strict";function n(e){var t=Object.create(null);return function(c){return void 0===t[c]&&(t[c]=e(c)),t[c]}}c.d(t,"a",(function(){return n}))},183:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=43.b2a1d4cd.chunk.js.map