import React from "react";

import { MoreVertical, Edit, Users, Trash, File } from "react-feather";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { Link } from "react-router-dom";

import { httpRequest } from "../../../services/Api";
import { formataCNPJ, formataCPF } from "../../../services/Funcoes";
import { getToken } from "../../../services/Auth";

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
      httpRequest(`funcionarios/${id}`, {
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
    sortable: true,
    maxWidth: "100px",
    selector: (row) => row.id,
  },
  {
    name: "Nome",
    reorder: true,
    sortable: true,
    minWidth: "225px",
    selector: (row) => row.nome,
  },
  {
    name: "Empresa",
    reorder: true,
    sortable: true,
    minWidth: "225px",
    selector: (row) => row.Empresa.nome_fantasia,
  },
  {
    name: "CPF",
    reorder: true,
    sortable: true,
    minWidth: "310px",
    selector: (row) => formataCPF(row.cpf),
  },
  {
    name: "CNPJ",
    reorder: true,
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.cnpj ? formataCNPJ(row.cnpj) : "",
  },
  {
    name: "Actions",
    allowOverflow: true,
    maxWidth: "160px",
    cell: (row) => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              {/* <DropdownItem
                className="w-100"
                onClick={(e) => console.log(row.id)}
              >
                <FileText size={15} />
                <span className="align-middle ms-50">Details</span>
              </DropdownItem> */}
              <DropdownItem
                className="w-100"
                onClick={() => handleConfirmCancel(row.id)}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <Link className="text-primary" title="Documentos" to={`/funcionarios/documentos/${row.id}`}>
            <File size={15} />
          </Link> */}
          <Link className="text-primary ms-1" title="Editar"  to={`/funcionarios/form/${row.id}`}>
            <Edit size={15} />
          </Link>
        </div>
      );
    },
  },
];
