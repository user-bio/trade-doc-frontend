(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[46],{1344:function(e,t,c){"use strict";c.r(t);var o=c(21),s=c(14),n=c(1),i=c(56),a=c(165),r=c(162),d=c(143),l=c(160),b=c(65),m=c.n(b),j=c(153),u=c.n(j),O=c(154),f=c.n(O),h=c(9),p=c(142),x=c(141),v=c(144),g=c(18),k=f()(u.a);t.default=function(){var e=Object(h.o)(),t=Object(h.q)().id,c=Object(h.q)().item,b=Object(n.useState)([]),j=Object(s.a)(b,2),u=j[0],O=j[1],f=Object(n.useState)(null),N=Object(s.a)(f,2),y=(N[0],N[1]),S=Object(n.useState)(null),C=Object(s.a)(S,2),z=C[0],T=C[1];Object(p.a)();var Y=Object(l.b)({}),E=Y.reset,J=Y.control,w=(Y.setError,Y.handleSubmit),D=Y.setValue;Y.formState.errors;void 0===t&&e("/clientes"),Object(n.useEffect)((function(){Object(v.b)("documentos/tipos?tipo=normal",{method:"GET",token:Object(x.a)()}).then((function(e){var t=[];e.body.map((function(e){t.push({value:e.id,label:e.nome})})),O(t)}))}),[]),void 0!==c&&Object(n.useEffect)((function(){Object(v.b)("documentos/tipos/merge/".concat(c),{method:"GET",token:Object(x.a)()}).then((function(e){E({ordem:e.body.ordem}),D("tipo",{value:e.body.merge_id,label:e.body.Documentos_Tipo.nome}),y(e.body)}))}),[]);return Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(d.a,{title:"Documentos",data:[{title:"Documentos",link:"/documentos"},{title:"Tipos",link:"/documento/tipos"},{title:"Novo item merge"}]}),Object(g.jsx)(i.z,{children:Object(g.jsx)(i.k,{sm:"12",children:Object(g.jsx)(i.f,{children:Object(g.jsx)(i.g,{children:Object(g.jsxs)(i.p,{onSubmit:w((function(o){if(T(o),void 0!==o.tipo&&""!=o.tipo_funcionario){var s={documento_tipo_id:t,merge_id:o.tipo.value,ordem:o.ordem};void 0===c?Object(v.b)("documentos/tipos/merge",{method:"POST",body:s,token:Object(x.a)()}).then((function(c){k.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/documento/tipos/merge/".concat(t))})):Object(v.b)("documentos/tipos/merge/".concat(c),{method:"PUT",body:s,token:Object(x.a)()}).then((function(c){k.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),e("/documento/tipos/merge/".concat(t))}))}})),children:[Object(g.jsxs)(i.z,{children:[Object(g.jsxs)(i.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(g.jsx)(i.r,{className:"form-label",for:"tipo",children:"Tipo"}),Object(g.jsx)(l.a,{id:"tipo",control:J,name:"tipo",render:function(e){var t=e.field;return Object(g.jsx)(a.a,Object(o.a)({options:u,classNamePrefix:"select",theme:r.d,className:m()("react-select",{"is-invalid":null!==z&&void 0===z.tipo}),isDisabled:void 0!==c},t))}})]}),Object(g.jsxs)(i.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(g.jsx)(i.r,{className:"form-label",for:"ordem",children:"Ordem"}),Object(g.jsx)(l.a,{defaultValue:"",control:J,id:"ordem",name:"ordem",render:function(e){var t=e.field;return Object(g.jsx)(i.q,Object(o.a)({placeholder:"Ordem"},t))}})]})]}),Object(g.jsx)("div",{className:" text-end w-100",children:Object(g.jsx)(i.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})}},142:function(e,t,c){"use strict";var o=c(1),s=c(9),n=c(66),i=c(141),a=c(152);t.a=function(){var e=Object(s.o)(),t=Object(n.d)();Object(o.useEffect)((function(){t?a.verify(Object(i.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},143:function(e,t,c){"use strict";var o=c(21),s=c(1),n=c(64),i=c(65),a=c.n(i),r=c(56),d=c(18);t.a=function(e){var t=e.data,c=e.title;return Object(d.jsx)("div",{className:"content-header row",children:Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[c?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.d,{tag:"li",children:Object(d.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var i=e.link?n.b:s.Fragment,l=t.length-1===c;return Object(d.jsx)(r.d,{tag:"li",active:!l,className:a()({"text-primary":!l}),children:Object(d.jsx)(i,Object(o.a)(Object(o.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})})})}}}]);
//# sourceMappingURL=46.279c4b5c.chunk.js.map