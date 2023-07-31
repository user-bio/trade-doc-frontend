import React from "react";

import { MoreVertical, Edit, Users, Trash, CheckCircle, File, Eye } from "react-feather";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { Link } from "react-router-dom";

import { httpRequest } from "../../../services/Api";
import { getToken } from "../../../services/Auth";
import { dataPTBR } from "../../../services/Funcoes";

const handleConfirmCancel = (id) => {
  return MySwal.fire({
    title: "Deseja excluir?",
    text: "Você não poderá reverter isso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, deletar!",
    cancelButtonText: "Cancelar",
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-danger ms-1",
    },
    buttonsStyling: false,
  }).then(function (result) {
    if (result.value) {
      httpRequest(`envios/${id}`, {
        method: "DELETE",
        token: getToken(),
      }).then(() => {
        MySwal.fire({
          icon: "success",
          title: "Deletado!",
          text: "Exclusão realizada com sucesso.",
          customClass: {
            confirmButton: "btn btn-success",
          },
        }).then(() => {
          window.location.reload(false);
        })
      });
    } else if (result.dismiss === MySwal.DismissReason.cancel) {
      MySwal.close();
    }
  });
};

// ** Table ReOrder Column
export const coluns = [
  {
    name: "ID",
    reorder: true,
    sortable: false,
    maxWidth: "50px",
    selector: (row) => row.id,
  },
  {
    name: "Status",
    reorder: true,
    sortable: false,
    maxWidth: "120px",
    color: 'light-warning',
    selector: (row) => { if(row.aprovacao == "aprovada" || row.aprovacao == "instantanea"){ return <Badge color="success"pill>Aprovado</Badge>; }else if(row.aprovacao == "reprovada"){ return <Badge color="danger"pill>Reprovado</Badge>; }else{ return <Badge color="danger"pill>Pendente</Badge>; } },
  },
  {
    name: "Cliente",
    reorder: true,
    sortable: false,
    maxWidth: "200px",
    selector: (row) => row.Cliente != null ? row.Cliente.nome_fantasia : "-",
  },
  {
    name: "Empresa",
    reorder: true,
    sortable: false,
    maxWidth: "200px",
    selector: (row) => row.Empresa != null ? row.Empresa.nome_fantasia : "-",
  },
  {
    name: "Contatos",
    reorder: true,
    sortable: false,
    maxWidth: "600px",
    selector: (row) => row.Contatos != null ? row.Contatos.map(function(contato){ return contato.nome+"\n " }) : "-", 
  },
  {
    name: "Tipo de envio",
    reorder: true,
    sortable: false,
    maxWidth: "200px",
    selector: (row) => row.tipo,
  },
  {
    name: "Data",
    reorder: true,
    sortable: false,
    maxWidth: "200px",
    selector: (row) => { if(row.tipo == "instantaneo"){ return dataPTBR(row.updatedAt) }else if(row.data != null){ return dataPTBR(row.data); }else{ return row.dia;  } },
  },
  {//
    name: "Actions",
    allowOverflow: true,
    maxWidth: "200px",
    cell: (row) => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                className="w-100"
                onClick={() => handleConfirmCancel(row.id)}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link className="text-primary ms-1" title="Visualizar"  to={`/envios/detalhe/${row.id}`}>
            <Eye size={15} />
          </Link>
          <Link className="text-primary ms-1" title="Editar"  to={`/envios/form/${row.id}`}>
            <Edit size={15} />
          </Link>
        </div>
      );
    },
  },
];
