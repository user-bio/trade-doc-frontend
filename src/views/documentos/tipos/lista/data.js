import React from "react";

import {
  MoreVertical,
  Edit,
  Users,
  Trash,
  Activity,
  FileText,
} from "react-feather";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { Link } from "react-router-dom";

import { httpRequest } from "../../../../services/Api";
import { getToken } from "../../../../services/Auth";

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
      httpRequest(`documentos/tipos/${id}`, {
        method: "DELETE",
        token: getToken(),
      })
        .then(() => {
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
        })
        .catch((error) => {
          console.log(3);
          MySwal.fire({
            icon: "error",
            title: "Erro!",
            text: error.response.data.error,
            customClass: {
              confirmButton: "btn btn-success",
            },
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
    sortable: true,
    maxWidth: "100px",
    selector: (row) => row.id,
  },
  {
    name: "NOME",
    reorder: true,
    sortable: true,
    minWidth: "225px",
    selector: (row) => (row.nome ? row.nome.slice(0, 30) : ""),
  },
  {
    name: "SETOR",
    reorder: true,
    sortable: true,
    minWidth: "225px",
    selector: (row) => row.Setore.setor,
  },
  {
    name: "TIPO",
    reorder: true,
    sortable: true,
    minWidth: "225px",
    selector: (row) => row.tipo,
  },
  {
    name: "STATUS",
    reorder: true,
    sortable: true,
    minWidth: "150px",
    selector: (row) => {
      if (row.status) {
        return (
          <Badge color="success" pill>
            Ativo
          </Badge>
        );
      } else {
        return (
          <Badge color="danger" pill>
            Inativo
          </Badge>
        );
      }
    },
  },
  // {
  //   name: "",
  //   reorder: true,
  //   sortable: true,
  //   minWidth: "40px",
  //   cell: (row) => {
  //     return (
  //       <div className={` ${row.tipo === "merge" ? "d-block" : "d-none"}`}>
  //         <Link
  //           className={`btn btn-outline-primary rounded ${
  //             row.tipo === "merge" ? "d-block" : "d-none"
  //           }`}
  //           title="Parametrização"
  //           to={`/documento/tipos/filtro/${row.id}`}
  //         >
  //           Filtros
  //         </Link>
  //       </div>
  //     );
  //   },
  // },
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
              <DropdownItem
                className="w-100"
                onClick={() => handleConfirmCancel(row.id)}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link
            className={`text-primary ms-1 ${
              row.tipo === "normal" ? "d-block" : "d-none"
            }`}
            title="Parametrização"
            to={`/documento/tipos/parametrizacao/${row.id}`}
          >
            <Activity size={15} />
          </Link>
          <Link
            className={`text-primary ms-1 ${
              row.tipo === "merge" ? "d-block" : "d-none"
            }`}
            title="Parametrização"
            to={`/documento/tipos/merge/${row.id}`}
          >
            <FileText size={15} />
          </Link>
          <Link
            className="text-primary ms-1"
            title="Editar"
            to={`/documento/tipos/form/${row.id}`}
          >
            <Edit size={15} />
          </Link>
        </div>
      );
    },
  },
];
