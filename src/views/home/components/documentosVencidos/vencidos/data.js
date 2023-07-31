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
    selector: (row) => row.vencido,
  }
];
