import React from "react";

import {
  MoreVertical,
  Edit,
  Users,
  Trash,
  CheckCircle,
  Archive,
} from "react-feather";
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

import { BASE_URL, httpRequest } from "../../../services/Api";
import { getToken } from "../../../services/Auth";
import { dataPTBR } from "../../../services/Funcoes";
import Usuarios from "../../../services/Usuarios";

function exibirTiposDocumentos() {
  const setores = Usuarios.getUserStorage();

  let obj = [];

  for (let setor of setores.Setores) {
    if (setor.Usuarios_Setores.permissoes !== null) {
      if (setor.Usuarios_Setores.permissoes.lePDF) {
        obj.push(setor.id);
      }
    }
  }
  return obj;
}

function exibirTiposDocumentosUpload() {
  const setores = Usuarios.getUserStorage();

  let obj = [];

  for (let setor of setores.Setores) {
    if (setor.Usuarios_Setores.permissoes !== null) {
      if (setor.Usuarios_Setores.permissoes.uploadDoc) {
        obj.push(setor.id);
      }
    }
  }
  return obj;
}

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
      httpRequest(`documentos/${id}`, {
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
        });
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
    maxWidth: "100px",
    selector: (row) => row.id,
  },
  {
    name: "Tipo",
    reorder: true,
    sortable: false,
    minWidth: "100px",
    selector: (row) => row.Documentos_Tipo.nome,
  },
  {
    name: "Empresa",
    reorder: true,
    sortable: false,
    minWidth: "100px",
    selector: (row) => row.Empresa.nome_fantasia,
  },
  {
    name: "Funcionário",
    reorder: true,
    sortable: false,
    minWidth: "100px",
    selector: (row) => (row.Funcionario !== null ? row.Funcionario.nome : ""),
  },
  {
    name: "Validade",
    allowOverflow: true,
    sortable: false,
    minWidth: "100px",
    cell: (row) => {
      return (
        <div className="d-flex">
          {row.validade !== null ? dataPTBR(row.validade) : ""}
        </div>
      );
    },
  },
  {
    name: "Actions",
    allowOverflow: true,
    maxWidth: "100px",
    cell: (row) => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                className={`w-100 ${
                  exibirTiposDocumentos().includes(
                    row.Documentos_Tipo.setor_id
                  ) || Usuarios.isAdmin()
                    ? ""
                    : "d-none"
                }`}
              >
                <a
                  className={`text-info`}
                  href={`${BASE_URL}file/pdf/${row.arquivo}`}
                  target="_blank"
                >
                  <Archive size={15} />
                  <span className="align-middle ms-50">Abrir PDF</span>
                </a>
              </DropdownItem>
              <DropdownItem
                className={`w-100 ${
                  exibirTiposDocumentosUpload().includes(
                    row.Documentos_Tipo.setor_id
                  ) || Usuarios.isAdmin()
                    ? ""
                    : "d-none"
                }`}
                onClick={() => handleConfirmCancel(row.id)}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link
            className={`text-primary ms-1 ${
                  exibirTiposDocumentosUpload().includes(
                    row.Documentos_Tipo.setor_id
                  ) || Usuarios.isAdmin()
                    ? ""
                    : "d-none"
                }`}
            title="Editar"
            to={`/documentos/form/${row.id}`}
          >
            <Edit size={15} />
          </Link>
        </div>
      );
    },
  },
];
