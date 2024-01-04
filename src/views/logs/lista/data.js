import React from "react";
import Highlight from "react-highlight";

import { dataPTBR } from "../../../services/Funcoes"

import 'highlight.js/styles/dark.css'

function sTipo(valor){
  if(valor === "POST"){
    return "POST - Cadastro"
  }else if(valor === "PUT"){
    return "PUT - Edição"
  }else if(valor === "DELETE"){
    return "DELETE - Deleção"
  }else {
    return valor;
  }
}

// ** Table ReOrder Column
export const coluns = [
  {
    name: "ID",
    reorder: true,
    sortable: true,
    maxWidth: "100px",
    selector: (row) => row.id,
  },
  {
    name: "Usuário",
    reorder: true,
    sortable: true,
    minWidth: "310px",
    selector: (row) => row.Usuario.first_name,
  },
  {
    name: "Ação",
    reorder: true,
    sortable: true,
    minWidth: "310px",
    selector: (row) => sTipo(row.tipo),
  },
  {
    name: "Módulo",
    reorder: true,
    sortable: true,
    minWidth: "200px",
    selector: (row) => row.descricao,
  },
  {
    name: "Data",
    reorder: true,
    sortable: true,
    minWidth: "200px",
    selector: (row) => { return dataPTBR(row.data) },
  },
];

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className="expandable-content p-2">
      <p>
        <span className="fw-bold">Nome:</span> {data.Usuario.first_name}
      </p>
      <p>
        <span className="fw-bold">E-mail:</span> {data.Usuario.email}
      </p>
      <p>
        <span className="fw-bold">Módulo da ação:</span> {data.descricao}
      </p>
      <p>
        <span className="fw-bold">Data:</span> {dataPTBR(data.data)}
      </p>
      <p className="m-0">
        <span className="fw-bold">Data:</span>
      </p>
      <div>
        <Highlight className="bg-dark language-name-of-snippet" language="json">{data.objeto}</Highlight>
      </div>
    </div>
  );
};

export default ExpandableTable;
