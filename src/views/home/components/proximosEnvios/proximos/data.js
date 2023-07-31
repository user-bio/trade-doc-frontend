import React from "react";

import { Edit, Eye } from "react-feather";

import { Link } from "react-router-dom";

import { dataPTBR, formataCNPJ } from "../../../../../services/Funcoes";

// ** Table ReOrder Column
export const coluns = [
  {
    name: "ID",
    reorder: true,
    sortable: true,
    maxWidth: "50px",
    selector: (row) => row.envio_id,
  },
  {
    name: "Tipo",
    reorder: true,
    sortable: true,
    selector: (row) => row.tipo,
  },
  {
    name: "Cliente",
    reorder: true,
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.cliente,
  },
  {
    name: "Data",
    reorder: true,
    sortable: true,
    minWidth: "150px",
    selector: (row) => dataPTBR(row.proxima_data),
  },
  {
    name: "Actions",
    allowOverflow: true,
    maxWidth: "160px",
    cell: (row) => {
      return (
        <div className="d-flex">
            <Link className="text-primary ms-1" title="Visualizar"  to={`/envios/detalhe/${row.envio_id}`}>
                <Eye size={15} />
            </Link>
            <Link className="text-primary ms-1" title="Editar"  to={`/envios/form/${row.envio_id}`}>
                <Edit size={15} />
            </Link>
        </div>
      );
    },
  },
];
