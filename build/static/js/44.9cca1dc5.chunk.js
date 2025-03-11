(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[44],{1336:function(e,t,c){"use strict";c.r(t);var a=c(21),s=c(14),n=c(1),l=c(56),o=c(165),i=c(162),r=c(143),b=c(160),d=c(65),j=c.n(d),m=c(153),u=c.n(m),O=c(154),f=c.n(O),h=c(9),x=c(142),v=c(141),N=c(144),p=c(18),k=f()(u.a);t.default=function(){var e=Object(h.o)(),t=Object(h.q)().id,c=Object(h.q)().item,d=Object(n.useState)(null),m=Object(s.a)(d,2),u=(m[0],m[1]),O=Object(n.useState)(null),f=Object(s.a)(O,2),y=(f[0],f[1]),C=Object(n.useState)(null),S=Object(s.a)(C,2),g=S[0],z=S[1];Object(x.a)();var E=[{value:"1",label:"Ativo"},{value:"0",label:"Inativo"}],Y={status:E[0]},J=Object(b.b)({defaultValues:Y}),q=J.reset,w=J.control,I=(J.setError,J.handleSubmit);J.formState.errors;void 0===t&&e("/clientes"),Object(n.useEffect)((function(){Object(N.b)("clientes/".concat(t),{method:"GET",token:Object(v.a)()}).then((function(e){u(e.body)}))}),[]),void 0!==c&&Object(n.useEffect)((function(){Object(N.b)("clientes/contatos/".concat(c),{method:"GET",token:Object(v.a)()}).then((function(e){q({nome:e.body.nome,email:e.body.email,status:e.body.status?E[0]:E[1]}),y(e.body)}))}),[]);return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(r.a,{title:"Clientes",data:[{title:"Clientes",link:"/clientes"},{title:"Contatos",link:"/clientes/contatos/".concat(t)},{title:"Novo Contato"}]}),Object(p.jsx)(l.z,{children:Object(p.jsx)(l.k,{sm:"12",children:Object(p.jsx)(l.f,{children:Object(p.jsx)(l.g,{children:Object(p.jsxs)(l.p,{onSubmit:I((function(a){if(z(a),""!==a.nome&&""!==a.email&&""!==a.status.value){var s={cliente_id:t,nome:a.nome,email:a.email,status:a.status.value};void 0===c?Object(N.b)("clientes/contatos",{method:"POST",body:s,token:Object(v.a)()}).then((function(c){k.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/clientes/contatos/".concat(t))})):Object(N.b)("clientes/contatos/".concat(c),{method:"PUT",body:s,token:Object(v.a)()}).then((function(c){k.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/clientes/contatos/".concat(t))}))}})),children:[Object(p.jsxs)(l.z,{children:[Object(p.jsxs)(l.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(p.jsx)(l.r,{className:"form-label",for:"nome",children:"Nome"}),Object(p.jsx)(b.a,{defaultValue:"",control:w,id:"nome",name:"nome",render:function(e){var t=e.field;return Object(p.jsx)(l.q,Object(a.a)({placeholder:"Nome",className:j()("form-control",{"is-invalid":null!==g&&(null===g.nome||!g.nome.length)})},t))}})]}),Object(p.jsxs)(l.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(p.jsx)(l.r,{className:"form-label",for:"nome_fantasia",children:"E-mail"}),Object(p.jsx)(b.a,{defaultValue:"",control:w,id:"email",name:"email",render:function(e){var t=e.field;return Object(p.jsx)(l.q,Object(a.a)({placeholder:"E-mail",type:"email",className:j()("form-control",{"is-invalid":null!==g&&(null===g.email||!g.email.length)})},t))}})]}),Object(p.jsxs)(l.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(p.jsx)(l.r,{className:"form-label",for:"cnpj",children:"Status"}),Object(p.jsx)(b.a,{id:"status",control:w,name:"status",render:function(e){var t=e.field;return Object(p.jsx)(o.a,Object(a.a)({options:E,classNamePrefix:"select",theme:i.d,className:j()("react-select",{"is-invalid":null!==g&&null===g.status})},t))}})]})]}),Object(p.jsx)("div",{className:" text-end w-100",children:Object(p.jsx)(l.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})}},142:function(e,t,c){"use strict";var a=c(1),s=c(9),n=c(66),l=c(141),o=c(152);t.a=function(){var e=Object(s.o)(),t=Object(n.d)();Object(a.useEffect)((function(){t?o.verify(Object(l.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,c){"use strict";var a=c(21),s=c(1),n=c(64),l=c(65),o=c.n(l),i=c(56),r=c(18);t.a=function(e){var t=e.data,c=e.title;return Object(r.jsx)("div",{className:"content-header row",children:Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[c?Object(r.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.d,{tag:"li",children:Object(r.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var l=e.link?n.b:s.Fragment,b=t.length-1===c;return Object(r.jsx)(i.d,{tag:"li",active:!b,className:o()({"text-primary":!b}),children:Object(r.jsx)(l,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})})})}}}]);
//# sourceMappingURL=44.9cca1dc5.chunk.js.map