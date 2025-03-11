import React from "react";

import { Link } from "react-router-dom";
// ** Table ReOrder Column
export const coluns = [
  {
    name: "Tipo de documento",
    reorder: true,
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.nome,
  },
  {
    name: "Quantidade de documentos",
    reorder: true,
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.a_vencer,
  },
  {
    name: "Documentos",
    reorder: true,
    sortable: true,
    minWidth: "150px",
    cell: (row) => {
      const buttons = row.list_id.map((item) => (
        <div key={item.docId}>
          <Link className={`btn btn-primary mt-1 ${item.aVencer > 0 ? "" : "d-none"}`} to={`/documentos/form/${item.docId}`}>
            {item.docId}
          </Link>
        </div>
      ));

      return <div>{buttons}</div>;
    },
  },
];
