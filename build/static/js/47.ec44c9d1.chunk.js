(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[47],{1351:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),reactstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(56),_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(143),react_hook_form__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(166),classnames__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(65),classnames__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__),sweetalert2__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(152),sweetalert2__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__),sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(153),sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__),react_router_dom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(9),_components_isAzure__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(142),_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(612),_services_Auth__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(141),_services_Api__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(144),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(18),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__),MySwal=sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default()(sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a),UsuariosForm=function UsuariosForm(){Object(_components_isAzure__WEBPACK_IMPORTED_MODULE_10__.a)();var defaultValues={},_useForm=Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.b)({defaultValues:defaultValues}),reset=_useForm.reset,control=_useForm.control,setError=_useForm.setError,handleSubmit=_useForm.handleSubmit,register=_useForm.register,setValue=_useForm.setValue,errors=_useForm.formState.errors,permissoesLista=[{id:11,nome:"aprova-envio",descricao:"Autorizar envio de e-mails",tipo:1},{id:12,nome:"cadastro",descricao:"Cadastros",tipo:2},{id:2,nome:"cliente",descricao:"Clientes",tipo:3},{id:13,nome:"empresa",descricao:"Empresas",tipo:3},{id:3,nome:"funcionario",descricao:"Funcion\xe1rios",tipo:3},{id:8,nome:"envio",descricao:"Envios",tipo:2},{id:14,nome:"documento",descricao:"Documentos",tipo:2},{id:4,nome:"configuracao",descricao:"Configura\xe7\xe3o",tipo:2},{id:5,nome:"tipoDocumento",descricao:"Tipos de documentos",tipo:3},{id:7,nome:"setores",descricao:"Setores",tipo:3},{id:6,nome:"email",descricao:"E-mail",tipo:3},{id:9,nome:"log",descricao:"Logs",tipo:2},{id:10,nome:"usuarios",descricao:"Usu\xe1rios",tipo:2}],navigate=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.o)(),_useParams=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.q)(),id=_useParams.id,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState2=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),dados=_useState2[0],setDados=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState4=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),data=_useState4[0],setData=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState6=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),selectedPdf=_useState6[0],setSelectedPdf=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState8=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),selectedUpload=_useState8[0],setSelectedUpload=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState10=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState9,2),selectedEnvio=_useState10[0],setSelectedEnvio=_useState10[1],_useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState12=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState11,2),selectedVer=_useState12[0],setSelectedVer=_useState12[1],_useState13=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState14=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState13,2),selectedP=_useState14[0],setSelectedP=_useState14[1],_useState15=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState16=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState15,2),setores=_useState16[0],setSetores=_useState16[1],_useState17=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState18=Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.a)(_useState17,2),permissoes=_useState18[0],setPermissoes=_useState18[1];Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("setores",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(_){setSetores(_.body)}))}),[]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("permissoes",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(_){setPermissoes(_.body)}))}),[]),void 0!==id&&Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("usuarios/".concat(id),{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(_){console.log(_.body),setDados(_.body),reset({first_name:_.body.first_name,last_name:_.body.last_name,email:_.body.email}),_.body.Setores.length>0&&Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("setores",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(e){var t=e.body;t.map((function(e,s){_.body.Setores.filter((function(_){e.id===_.id&&(t[s].funcao=_.Usuarios_Setores.tipo,t[s].check=!0,t[s].ver=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.ver,t[s].pdPdf=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.lePDF,t[s].criaEnvio=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.criaEnvio,t[s].uploadDoc=!!_.Usuarios_Setores.permissoes&&_.Usuarios_Setores.permissoes.uploadDoc)}))}));for(var s=[],r=[],c=[],a=[],o=t.length-1;o>=0;o--)!0===t[o].check&&(t[o].ver&&(s.push(t[o].id),setValue("checkbox_d_ver_".concat(t[o].id),!0)),t[o].pdPdf&&(r.push(t[o].id),setValue("checkbox_d_pdf_".concat(t[o].id),!0)),t[o].criaEnvio&&(c.push(t[o].id),setValue("checkbox_d_envio_".concat(t[o].id),!0)),t[o].uploadDoc&&(a.push(t[o].id),setValue("checkbox_d_up_".concat(t[o].id),!0)));setSelectedVer(s),setSelectedPdf(r),setSelectedEnvio(c),setSelectedUpload(a)})),Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("permissoes",{method:"GET",token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(e){var t=e.body;t.map((function(e,s){_.body.Permissoes.filter((function(_){e.id===_.id&&(t[s].check=!0)}))}));for(var s=[],r=t.length-1;r>=0;r--)!0===t[r].check&&(s.push(t[r].id),setValue("checkbox_p_".concat(t[r].id),!0));setSelectedP(s)}))}))}),[]);var onSubmit=function onSubmit(data){if(setData(data),""!==data.first_name&&""!==data.email){var dadosObj={first_name:data.first_name,last_name:data.last_name,email:data.email},objetoPermissoes=[];setores.forEach((function(setor){var item=!!dados.Setores&&dados.Setores.find((function(_){return setor.id===_.id}));objetoPermissoes.push({id:setor.id,tipo:item?item.Usuarios_Setores.tipo:"usuario",permissoes:{ver:eval("data.checkbox_d_ver_".concat(setor.id)),lePDF:eval("data.checkbox_d_pdf_".concat(setor.id)),criaEnvio:eval("data.checkbox_d_envio_".concat(setor.id)),uploadDoc:eval("data.checkbox_d_up_".concat(setor.id))}})})),dadosObj.Setores=objetoPermissoes,dadosObj.Permissoes=[],permissoes.map((function(permissao){eval("data.checkbox_p_".concat(permissao.id))&&dadosObj.Permissoes.push(permissao.id)})),void 0===id?Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("usuarios",{method:"POST",body:dadosObj,token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(_){MySwal.fire({icon:"success",title:"Sucesso!",text:"Cadastro realizada com sucesso.",customClass:{confirmButton:"btn btn-success"}}),navigate("/usuarios")})):Object(_services_Api__WEBPACK_IMPORTED_MODULE_13__.b)("usuarios/".concat(id),{method:"PUT",body:dadosObj,token:Object(_services_Auth__WEBPACK_IMPORTED_MODULE_12__.a)()}).then((function(_){MySwal.fire({icon:"success",title:"Sucesso!",text:"Cadastro atualizado com sucesso.",customClass:{confirmButton:"btn btn-success"}}),navigate("/usuarios")}))}};function marcaCheckEnvio(_){var e=structuredClone(selectedEnvio);if(0===e.length)e.push(_.id),setSelectedEnvio(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedEnvio(e)}else e.push(_.id),setSelectedEnvio(e)}function marcaCheckVer(_){var e=structuredClone(selectedVer);if(0===e.length)e.push(_.id),setSelectedVer(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedVer(e)}else e.push(_.id),setSelectedVer(e)}function marcaCheckPdf(_){var e=structuredClone(selectedPdf);if(0===e.length)e.push(_.id),setSelectedPdf(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedPdf(e)}else e.push(_.id),setSelectedPdf(e)}function marcaCheckUpload(_){var e=structuredClone(selectedUpload);if(0===e.length)e.push(_.id),setSelectedUpload(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedUpload(e)}else e.push(_.id),setSelectedUpload(e)}function marcaCheckP(_){var e=structuredClone(selectedP);if(0===e.length)e.push(_.id),setSelectedP(e);else if(e.includes(_.id)){for(var t=e.length-1;t>=0;t--)e[t]===_.id&&e.splice(t,1);setSelectedP(e)}else e.push(_.id),setSelectedP(e)}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__.a,{title:"Usu\xe1rios",data:[{title:"Usu\xe1rios",link:"/usuarios"},{title:"Novo Usu\xe1rio"}]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.z,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{sm:"12",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.f,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.g,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.p,{onSubmit:handleSubmit(onSubmit),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.z,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"first_name",children:"Nome"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.a,{defaultValue:"",control:control,id:"first_name",name:"first_name",render:function(_){var e=_.field;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.q,Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({placeholder:"Nome",className:classnames__WEBPACK_IMPORTED_MODULE_6___default()("form-control",{"is-invalid":null!==data&&(null===data.first_name||!data.first_name.length)})},e))}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"last_name",children:"Segundo Nome"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.a,{defaultValue:"",control:control,id:"last_name",name:"last_name",render:function(_){var e=_.field;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.q,Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({placeholder:"Segundo Nome",className:classnames__WEBPACK_IMPORTED_MODULE_6___default()("form-control")},e))}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{className:"mb-1",xl:"4",md:"6",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"email",children:"E-mail"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.a,{defaultValue:"",control:control,id:"email",name:"email",render:function(_){var e=_.field;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.q,Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({type:"email",placeholder:"E-mail",className:classnames__WEBPACK_IMPORTED_MODULE_6___default()("form-control",{"is-invalid":null!==data&&(null===data.email||!data.email.length)})},e),{},{readOnly:"".concat(void 0!==id?"readonly":"")}))}})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.z,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{xl:"8",md:"8",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"documentos",children:"Setores"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"".concat(setores.length>0?"d-none":""),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.a,{color:"primary",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"alert-body",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{children:"Nenhum setor dispon\xedvel"})})})}),setores.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"bg-dark",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"text-white p-1 mt-2",children:_.setor})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input",Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_ver_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_ver_".concat(_.id),checked:!!selectedVer.includes(_.id),onChange:function(){marcaCheckVer(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_ver_".concat(_.id),className:"form-check-label",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"d-flex",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{className:"pe-1 font-12",children:"Ver envio"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__.a,{id:"envio-"+_.id+e,tooltipText:"Permite a visualiza\xe7\xe3o da TELA DE DOCUMENTOS",placement:"top"})]})})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input",Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_envio_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_envio_".concat(_.id),checked:!!selectedEnvio.includes(_.id),onChange:function(){marcaCheckEnvio(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_envio_".concat(_.id),className:"form-check-label",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"d-flex",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{className:"pe-1 font-12",children:"Criar envio"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__.a,{id:"criar-envio-"+_.id+e,tooltipText:"Permite a cria\xe7\xe3o de novos envios na TELA DE ENVIOS",placement:"top"})]})})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input",Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_up_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_up_".concat(_.id),checked:!!selectedUpload.includes(_.id),onChange:function(){marcaCheckUpload(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_up_".concat(_.id),className:"form-check-label",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"d-flex",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{className:"pe-1 font-12",children:"Upload"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__.a,{id:"upload-"+_.id+e,tooltipText:"Permite o upload/atualiza\xe7\xe3o de documentos na TELA DE DOCUMENTOS",placement:"top"})]})})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"col",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input",Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_d_pdf_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_d_pdf_".concat(_.id),checked:!!selectedPdf.includes(_.id),onChange:function(){marcaCheckPdf(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_d_pdf_".concat(_.id),className:"form-check-label",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"d-flex",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{className:"pe-1 font-12",children:"Ver PDF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__.a,{id:"pdf-"+_.id+e,tooltipText:"Permite a visualiza\xe7\xe3o do documento que est\xe1 no sistema, atrav\xe9s da TELA DE DOCUMENTOS",placement:"top"})]})})]})})})]})]},e)}))]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.k,{xl:"4",md:"4",sm:"12",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{className:"form-label",for:"permissoes",children:"Permiss\xf5es"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"".concat(permissoesLista.length>0?"d-none":""),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.a,{color:"primary",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"alert-body",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{children:"Nenhum permiss\xe3o dispon\xedvel"})})})}),permissoesLista.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"demo-inline-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"form-check form-check-inline",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input",Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_ediva_Documents_projetos_bioseta_trade_doc_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},register("checkbox_p_".concat(_.id))),{},{className:"form-check-input",type:"checkbox",id:"checkbox_p_".concat(_.id),checked:!!selectedP.includes(_.id),onChange:function(){marcaCheckP(_)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.r,{for:"checkbox_p_".concat(_.id),className:"form-check-label",children:[3===_.tipo?"- ":"",_.descricao]})]})},e)}))]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:" text-end w-100",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.e,{type:"submit",color:"primary",children:"Salvar"})})]})})})})})]})};__webpack_exports__.default=UsuariosForm},142:function(_,e,t){"use strict";var s=t(1),r=t(9),c=t(66),a=t(141),o=t(151);e.a=function(){var _=Object(r.o)(),e=Object(c.d)();Object(s.useEffect)((function(){e?o.verify(Object(a.a)(),"aIebX2X9oCZE1gCNFlE0lSxPAKVqJfL7+8WUcMVcz677+V6JnRomzKfg03EIR6VlSAf2kWQSiiTDP8MF3Js7is9i7+YdCPTw+sifbuNeeCZWLr1QJCrGaRacvD4qKzzpXNkNeKhDv0h6rQW/JJ8dX94rK5esVxtbupCptX8HzfL8rmUSLI/l78ddYfkb+RkuHH5PY8TYpdUBv1h3qUYo4L62QUX/Ze5wqhYUuhPvmOAYIoz7j4SABxT2JciOn9Wy1wraZ268VzhgLilykQBH5QC6lbNyfIegB79R0QYQrYk5IL1gfmxY2lKIDeCYB9p8NIF8qfCyD/RJMQOUEv9z9A==")||_("/login"):_("/login")}),[e])}},143:function(_,e,t){"use strict";var s=t(21),r=t(1),c=t(64),a=t(65),o=t.n(a),i=t(56),n=t(18);e.a=function(_){var e=_.data,t=_.title;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[t?Object(n.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.d,{tag:"li",children:Object(n.jsx)(c.b,{to:"/",children:"Home"})}),e.map((function(_,t){var a=_.link?c.b:r.Fragment,d=e.length-1===t;return Object(n.jsx)(i.d,{tag:"li",active:!d,className:o()({"text-primary":!d}),children:Object(n.jsx)(a,Object(s.a)(Object(s.a)({},_.link?{to:_.link}:{}),{},{children:_.title}))},t)}))]})})]})})})})}},612:function(_,e,t){"use strict";var s=t(21),r=t(14),c=t(67),a=t(1),o=t(56),i=t(18),n=["tooltipText","id"];function d(_){var e=_.tooltipText,t=_.id,d=Object(c.a)(_,n),E=Object(a.useState)(!1),l=Object(r.a)(E,2),O=l[0],u=l[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:"https://example.com",target:"_blank",rel:"noreferrer",id:t,children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-question-circle",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),Object(i.jsx)("path",{d:"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"})]})})}),Object(i.jsx)(o.C,Object(s.a)(Object(s.a)({},d),{},{isOpen:O,target:t,toggle:function(){return u(!O)},children:e||"Hello world!"}))]})}d.defaultProps={tooltipText:"Hello world!",autohide:!0,flip:!0},d.argTypes={placement:{control:{type:"select"},options:["top","left","right","bottom"]}},e.a=d}}]);
//# sourceMappingURL=47.ec44c9d1.chunk.js.map