(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[44],{131:function(e,t,n){"use strict";var c=n(1),a=n(11),s=n(48),r=n(130),o=n(139);t.a=function(){var e=Object(a.f)(),t=Object(s.d)();Object(c.useEffect)((function(){t?o.verify(Object(r.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||e("/login"):e("/login")}),[t])}},132:function(e,t,n){"use strict";var c=n(17),a=n(1),s=n(47),r=n(6),o=n.n(r),i=n(41),l=n(13);t.a=function(e){var t=e.data,n=e.title;return Object(l.jsx)("div",{className:"content-header row",children:Object(l.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(l.jsx)("div",{className:"row breadcrumbs-top",children:Object(l.jsxs)("div",{className:"col-12",children:[n?Object(l.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(l.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.d,{tag:"li",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),t.map((function(e,n){var r=e.link?s.b:a.Fragment,d=t.length-1===n;return Object(l.jsx)(i.d,{tag:"li",active:!d,className:o()({"text-primary":!d}),children:Object(l.jsx)(r,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})})})}},138:function(e,t,n){"use strict";function c(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}function a(e){return(e=e.replace(/[^\d]/g,"")).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5")}function s(e){return e.match(/\d/g).join("")}function r(e){return new Date(e).toLocaleString("pt-BR",{year:"numeric",month:"numeric",day:"numeric"})}function o(e){var t=e.split("/");return[t[2],t[1],t[0]].join("-")}function i(e){var t=e.split("/");return[t[1],t[0]].join("-")}n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}))},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},855:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(14),s=n(1),r=n(41),o=n(132),i=n(164),l=n.n(i),d=n(163),u=n(6),j=n.n(u),b=n(150),m=n.n(b),f=n(151),O=n.n(f),h=n(11),p=n(131),x=n(138),v=n(130),N=n(133),z=n(13),g=O()(m.a);t.default=function(){Object(p.a)();var e=Object(d.b)(),t=e.reset,n=e.control,i=(e.setError,e.handleSubmit),u=(e.formState.errors,Object(h.f)()),b=Object(h.g)().id,m=Object(s.useState)(null),f=Object(a.a)(m,2),O=f[0],k=f[1],y=Object(s.useState)(null),_=Object(a.a)(y,2);_[0],_[1];void 0!==b&&Object(s.useEffect)((function(){Object(N.b)("empresas/".concat(b),{method:"GET",token:Object(v.a)()}).then((function(e){t({razao_social:e.body.razao_social,nome_fantasia:e.body.nome_fantasia,cnpj:Object(x.d)(e.body.cnpj)})}))}),[]);return Object(z.jsxs)(s.Fragment,{children:[Object(z.jsx)(o.a,{title:"Empresas",data:[{title:"Empresas",link:"/empresas"},{title:"Nova Empresa"}]}),Object(z.jsx)(r.z,{children:Object(z.jsx)(r.k,{sm:"12",children:Object(z.jsx)(r.f,{children:Object(z.jsx)(r.g,{children:Object(z.jsxs)(r.p,{onSubmit:i((function(e){if(k(e),""!==e.razao_social&&""!==e.nome_fantasia&&""!==e.cnpj&&18===e.cnpj.length){var t={razao_social:e.razao_social,nome_fantasia:e.nome_fantasia,cnpj:Object(x.f)(e.cnpj)};void 0===b?Object(N.b)("empresas",{method:"POST",body:t,token:Object(v.a)()}).then((function(e){g.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),u("/empresas")})):Object(N.b)("empresas/".concat(b),{method:"PUT",body:t,token:Object(v.a)()}).then((function(e){g.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),u("/empresas")}))}})),children:[Object(z.jsxs)(r.z,{children:[Object(z.jsxs)(r.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(z.jsx)(r.r,{className:"form-label",for:"razao_social",children:"Raz\xe3o Social"}),Object(z.jsx)(d.a,{defaultValue:"",control:n,id:"razao_social",name:"razao_social",render:function(e){var t=e.field;return Object(z.jsx)(r.q,Object(c.a)({placeholder:"Raz\xe3o Social",className:j()("form-control",{"is-invalid":null!==O&&(null===O.razao_social||!O.razao_social.length)})},t))}})]}),Object(z.jsxs)(r.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(z.jsx)(r.r,{className:"form-label",for:"nome_fantasia",children:"Nome Fantasia"}),Object(z.jsx)(d.a,{defaultValue:"",control:n,id:"nome_fantasia",name:"nome_fantasia",render:function(e){var t=e.field;return Object(z.jsx)(r.q,Object(c.a)({placeholder:"Nome Fantasia",className:j()("form-control",{"is-invalid":null!==O&&(null===O.nome_fantasia||!O.nome_fantasia.length)})},t))}})]}),Object(z.jsxs)(r.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(z.jsx)(r.r,{className:"form-label",for:"cnpj",children:"CNPJ"}),Object(z.jsx)(d.a,{defaultValue:"",id:"cnpj",name:"cnpj",control:n,render:function(e){var t=e.field;return Object(z.jsx)(l.a,Object(c.a)(Object(c.a)({},t),{},{placeholder:"00.000.000/0000-00",className:j()("form-control",{"is-invalid":null!==O&&(null===O.cnpj||!O.cnpj.length||O.cnpj.length<18)}),options:{delimiters:[".",".","/","-"],blocks:[2,3,3,4,2],delimiterLazyShow:!0,numericOnly:!0,numeralThousandsGroupStyle:"thousand"}}))}})]})]}),Object(z.jsx)("div",{className:" text-end w-100",children:Object(z.jsx)(r.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})}}}]);
//# sourceMappingURL=44.9b250cfb.chunk.js.map