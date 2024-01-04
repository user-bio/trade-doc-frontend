import {
  Home,
  Copy,
  Briefcase,
  Users,
  File,
  FileMinus,
  Circle,
  Settings,
  User,
  Send,
} from "react-feather";

import { getToken } from "../../services/Auth";

let obj = [];
let object = {}
if(getToken() != null){
  object = JSON.parse(atob(getToken().split(".")[1]));
}else{
  object.permissoes = []
}

let position = 0;

// CADASTROS //
let conditions = ["cadastro", "admin", "cliente", "empresa", "funcionario"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj.push({
    id: "cadastros",
    title: "Cadastros",
    icon: <Copy size={20} />,
    children: [],
  });
  position = 1;
}
conditions = ["cadastro", "admin", "cliente"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  position = 0;
  obj[position].children.push({
    id: "clientes",
    title: "Clientes",
    icon: <Briefcase size={12} />,
    navLink: "/clientes",
  });
  position = 1;
}
conditions = ["cadastro", "admin", "empresa"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  position = 0;
  obj[position].children.push({
    id: "empresas",
    title: "Empresas",
    icon: <Briefcase size={20} />,
    navLink: "/empresas",
  });
  position = 1;
}
conditions = ["cadastro", "admin", "funcionario"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  position = 0;
  obj[position].children.push({
    id: "funcionarios",
    title: "Funcionários",
    icon: <Users size={20} />,
    navLink: "/funcionarios",
  });
  position = 1;
}
// CADASTROS FIM //
// ENVIOS //
conditions = ["envio", "admin"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj.push({
    id: "envios",
    title: "Envios",
    icon: <Send size={20} />,
    navLink: "/envios",
  });
  position = position + 1
}
// ENVIOS FIM //
// DOCUMENTOS //
conditions = ["documento", "admin"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj.push({
    id: "documento",
    title: "Documentos",
    icon: <File size={20} />,
    // navLink: "/documentos",
    children: [],
  });
  // position = position + 1
  obj[position].children.push({
    id: "documentos",
    title: "Documentos",
    icon: <File size={20} />,
    navLink: "/documentos",
  });
  obj[position].children.push({
    id: "lotes",
    title: "Em lotes",
    icon: <File size={20} />,
    navLink: "/documentos-lotes",
  });
}
// DOCUMENTOS FIM //

// CONFIGURAÇÕES //
conditions = ["configuracao", "admin", "tipoDocumento", "email", "setores", "documento"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj.push({
    id: "configuracoes",
    title: "Configurações",
    icon: <Settings size={20} />,
    children: [],
  });
  position = position + 1
}
conditions = ["configuracao", "admin", "tipoDocumento"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj[position].children.push({
    id: "documentos_tipo",
    title: "Tipos de documento",
    icon: <File size={20} />,
    navLink: "/documento/tipos",
  });
}
conditions = ["configuracao", "admin", "setores"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj[position].children.push({
    id: "setores",
    title: "Setores",
    icon: <File size={20} />,
    navLink: "/setores",
  });
}
conditions = ["configuracao", "admin", "email"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj[position].children.push({
    id: "emails",
    title: "Config de E-mail",
    icon: <File size={20} />,
    navLink: "/email",
  });
}
conditions = ["configuracao", "admin", "documento"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj[position].children.push({
    id: "leitor_pdf",
    title: "Leitor PDF",
    icon: <File size={20} />,
    navLink: "/documentos-leitor",
  });
}
// CONFIGURAÇÕES FIM //
// ADMIN //
conditions = ["admin", "log", "usuarios"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj.push({
    id: "adm",
    title: "Administração",
    icon: <User size={20} />,
    children: [],
  });
  position = position + 1
}
conditions = ["admin", "usuarios"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj[position].children.push({
    id: "usuarios",
    title: "Usuários",
    icon: <Users size={20} />,
    navLink: "/usuarios",
  });
}
conditions = ["admin", "log"];
if (conditions.some((i) => object.permissoes.includes(i))) {
  obj[position].children.push({
    id: "logs",
    title: "Logs",
    icon: <FileMinus size={20} />,
    navLink: "/logs",
  });
}
// ADMIN FIM //

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  ...obj,
];
