(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{1350:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),reactstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(56),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(171),_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(143),cleave_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(169),cleave_js_react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(cleave_js_react__WEBPACK_IMPORTED_MODULE_6__),react_hook_form__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(166),classnames__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(65),classnames__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__),sweetalert2__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(152),sweetalert2__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__),sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(153),sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10__),react_router_dom__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9),_components_isAzure__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(142),_services_Auth__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(141),_services_Api__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(144),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(18),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__),MySwal=sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_10___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a),UsuariosForm=function UsuariosForm(){Object(_components_isAzure__WEBPACK_IMPORTED_MODULE_12__.a)();var defaultValues={},_useForm=Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.b)({defaultValues:defaultValues}),reset=_useForm.reset,control=_useForm.control,setError=_useForm.setError,handleSubmit=_useForm.handleSubmit,register=_useForm.register,setValue=_useForm.setValue,errors=_useForm.formState.errors,permissoesLista=[{id:11,nome:"aprova-envio",descricao:"Autorizar envio de e-mails",tipo:1},{id:12,nome:"cadastro",descricao:"Cadastros",tipo:2},{id:2,nome:"cliente",descricao:"Clientes",tipo:3},{id:13,nome:"empresa",descricao:"Empresas",tipo:3},{id:3,nome:"funcionario",descricao:"Funcion\xe1rios",tipo:3},{id:8,nome:"envio",descricao:"Envios",tipo:2},{id:14,nome:"documento",descricao:"Documentos",tipo:2},{id:4,nome:"configuracao",descricao:"Configura\xe7\xe3o",tipo:2},{id:5,nome:"tipoDocumento",descricao:"Tipos de documentos",tipo:3},{id:7,nome:"setores",descricao:"Setores",tipo:3},{id:6,nome:"email",descricao:"E-mail",tipo:3},{id:9,nome:"log",descricao:"Logs",tipo:2},{id:10,nome:"usuarios",descricao:"Usu\xe1rios",tipo:2}],navigate=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.o)(),_useParams=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.q)(),id=_useParams.id,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState2=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),dados=_useState2[0],setDados=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState4=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),data=_useState4[0],setData=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState6=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),selectedPdf=_useState6[0],setSelectedPdf=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState8=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),selectedUpload=_useState8[0],setSelectedUpload=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState10=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState9,2),selectedEnvio=_useState10[0],setSelectedEnvio=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState12=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState11,2),selectedP=_useState12[0],setSelectedP=_useState12[1],_useState13=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState14=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState13,2),setores=_useState14[0],setSetores=_useState14[1],_useState15=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState16=Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState15,2),permissoes=_useState16[0],setPermissoes=_useState16[1];Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("setores",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(_){setSetores(_.body)}))}),[]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("permissoes",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(_){setPermissoes(_.body)}))}),[]),void 0!==id&&Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("usuarios/".concat(id),{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(_){console.log(_.body),setDados(_.body),reset({first_name:_.body.first_name,last_name:_.body.last_name,email:_.body.email}),_.body.Setores.length>0&&Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("setores",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(e){var t=e.body;t.map((function(e,s){_.body.Setores.filter((function(_){e.id===_.id&&(t[s].funcao=_.Usuarios_Setores.tipo,t[s].check=!0,t[s].pdPdf=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.lePDF,t[s].criaEnvio=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.criaEnvio,t[s].uploadDoc=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.uploadDoc)}))}));for(var s=[],r=[],a=[],c=t.length-1;c>=0;c--)!0===t[c].check&&(t[c].pdPdf&&(s.push(t[c].id),setValue("checkbox_d_pdf_".concat(t[c].id),!0)),t[c].criaEnvio&&(r.push(t[c].id),setValue("checkbox_d_envio_".concat(t[c].id),!0)),t[c].uploadDoc&&(a.push(t[c].id),setValue("checkbox_d_up_".concat(t[c].id),!0)));setSelectedPdf(s),setSelectedEnvio(r),setSelectedUpload(a)})),Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("permissoes",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(e){var t=e.body;t.map((function(e,s){_.body.Permissoes.filter((function(_){e.id===_.id&&(t[s].check=!0)}))}));for(var s=[],r=t.length-1;r>=0;r--)!0===t[r].check&&(s.push(t[r].id),setValue("checkbox_p_".concat(t[r].id),!0));setSelectedP(s)}))}))}),[]);var onSubmit=function onSubmit(data){if(setData(data),""!==data.first_name&&""!==data.email){var dadosObj={first_name:data.first_name,last_name:data.last_name,email:data.email},objetoPermissoes=[];setores.forEach((function(setor){var item=!!dados.Setores&&dados.Setores.find((function(_){return setor.id===_.id}));objetoPermissoes.push({id:setor.id,tipo:item?item.Usuarios_Setores.tipo:"usuario",permissoes:{lePDF:eval("data.checkbox_d_pdf_".concat(setor.id)),criaEnvio:eval("data.checkbox_d_envio_".concat(setor.id)),uploadDoc:eval("data.checkbox_d_up_".concat(setor.id))}})})),dadosObj.Setores=objetoPermissoes,dadosObj.Permissoes=[],permissoes.map((function(permissao){eval("data.checkbox_p_".concat(permissao.id))&&dadosObj.Permissoes.push(permissao.id)})),void 0===id?Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("usuarios",{method:"POST",body:dadosObj,token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(_){MySwal.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),navigate("/usuarios")})):Object(_services_Api__WEBPACK_IMPORTED_MODULE_14__.b)("usuarios/".concat(id),{method:"PUT",body:dadosObj,token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_13__.a)()}).then((function(_){MySwal.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),navigate("/usuarios")}))}};function marcaCheckEnvio(_){var e=structuredClone(selectedEnvio);if(0===e.length)e.push(_.id),setSelectedEnvio(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedEnvio(e)}else e.push(_.id),setSelectedEnvio(e)}function marcaCheckPdf(_){var e=structuredClone(selectedPdf);if(0===e.length)e.push(_.id),setSelectedPdf(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedPdf(e)}else e.push(_.id),setSelectedPdf(e)}function marcaCheckUpload(_){var e=structuredClone(selectedUpload);if(0===e.length)e.push(_.id),setSelectedUpload(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedUpload(e)}else e.push(_.id),setSelectedUpload(e)}function marcaCheckP(_){var e=structuredClone(selectedP);if(0===e.length)e.push(_.id),setSelectedP(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedP(e)}else e.push(_.id),setSelectedP(e)}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__.a,{title:"Usu\xe1rios",data:[{title:"Usu\xe1rios",link:"/usuarios"},{title:"Novo Usu\xe1rio"}]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.z,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{sm:"12",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.f,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.g,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.p,{onSubmit:handleSubmit(onSubmit),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.z,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"first_name",children:"Nome"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.a,{defaultValue:"",control:control,id:"first_name",name:"first_name",render:function(_){var e=_.field;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.q,Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({placeholder:"Nome",className:classnames__WEBPACK_IMPORTED_MODULE_8___default()("form-control",{"is-invalid":null!==data&&(null===data.first_name||!data.first_name.length)})},e))}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"last_name",children:"Segundo Nome"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.a,{defaultValue:"",control:control,id:"last_name",name:"last_name",render:function(_){var e=_.field;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.q,Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({placeholder:"Segundo Nome",className:classnames__WEBPACK_IMPORTED_MODULE_8___default()("form-control")},e))}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"email",children:"E-mail"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_7__.a,{defaultValue:"",control:control,id:"email",name:"email",render:function(_){var e=_.field;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.q,Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({type:"email",placeholder:"E-mail",className:classnames__WEBPACK_IMPORTED_MODULE_8___default()("form-control",{"is-invalid":null!==data&&(null===data.email||!data.email.length)})},e),{},{readOnly:"".concat(void 0!==id?"readonly":"")}))}})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.z,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{xl:"6",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"documentos",children:"Setores"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"".concat(setores.length>0?"d-none":""),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.a,{color:"primary",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"alert-body",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span",{children:"Nenhum setor dispon\xedvel"})})})}),setores.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{className:"",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"bg-dark",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"text-white p-1 mt-2",children:_.setor})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("input",Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_envio_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_envio_".concat(_.id),checked:!!selectedEnvio.includes(_.id),onChange:function(){marcaCheckEnvio(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_envio_".concat(_.id),className:"form-check-label",children:"Criar envio"})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("input",Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_up_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_up_".concat(_.id),checked:!!selectedUpload.includes(_.id),onChange:function(){marcaCheckUpload(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_up_".concat(_.id),className:"form-check-label",children:"Upload"})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("input",Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_pdf_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_pdf_".concat(_.id),checked:!!selectedPdf.includes(_.id),onChange:function(){marcaCheckPdf(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_pdf_".concat(_.id),className:"form-check-label",children:"Ver PDF"})]})})})]})]},e)}))]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{xl:"6",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"permissoes",children:"Permiss\xf5es"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"".concat(permissoesLista.length>0?"d-none":""),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.a,{color:"primary",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"alert-body",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span",{children:"Nenhum permiss\xe3o dispon\xedvel"})})})}),permissoesLista.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("input",Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_edivaldoluz_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_p_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_p_".concat(_.id),checked:!!selectedP.includes(_.id),onChange:function(){marcaCheckP(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_p_".concat(_.id),className:"form-check-label",children:[3===_.tipo?"- ":"",_.descricao]})]})},e)}))]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:" text-end w-100",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})};__webpack_exports__.default=UsuariosForm},142:function(_,e,t){"use strict";var s=t(1),r=t(9),a=t(66),c=t(141),o=t(151);e.a=function(){var _=Object(r.o)(),e=Object(a.d)();Object(s.useEffect)((function(){e?o.verify(Object(c.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||_("/login"):_("/login")}),[e])}},143:function(_,e,t){"use strict";var s=t(21),r=t(1),a=t(64),c=t(65),o=t.n(c),i=t(56),d=t(18);e.a=function(_){var e=_.data,t=_.title;return Object(d.jsx)("div",{className:"content-header row",children:Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[t?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.d,{tag:"li",children:Object(d.jsx)(a.b,{to:"/",children:"Home"})}),e.map((function(_,t){var c=_.link?a.b:r.Fragment,n=e.length-1===t;return Object(d.jsx)(i.d,{tag:"li",active:!n,className:o()({"text-primary":!n}),children:Object(d.jsx)(c,Object(s.a)(Object(s.a)({},_.link?{to:_.link}:{}),{},{children:_.title}))},t)}))]})})]})})})})}}}]);
//# sourceMappingURL=48.e02477a9.chunk.js.map