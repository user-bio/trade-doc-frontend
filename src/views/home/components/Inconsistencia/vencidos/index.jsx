// ** React Imports
import React, { useState, useEffect } from "react";

// ** Table Columns
import { coluns } from "./data";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";

// import { httpRequest } from "../../../../../services/Api";
import { httpRequest } from "../../../../../services/Api";
import { getToken } from "../../../../../services/Auth";
import Usuarios from "../../../../../services/Usuarios";

const TableVencidos = () => {
  let navigate = useNavigate();
  const [data, setDados] = useState([]);
  // ** States
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  // ** Hooks
  const { t } = useTranslation();

  const unificarRegistrosDuplicados = (registros) => {
    const registroUnificado = registros.reduce((acc, current) => {
      const { envio_id } = current;
      if (!acc[envio_id]) {
        acc[envio_id] = current;
      }
      return acc;
    }, {});

    return Object.values(registroUnificado);
  };

  function exibirTiposDocumentos() {
    const setores = Usuarios.getUserStorage();
    let obj = [];

    for (let setor of setores.Setores) {
      if (setor.Usuarios_Setores.permissoes !== null) {
        if (setor.Usuarios_Setores.permissoes.criaEnvio) {
          obj.push(setor.id);
        }
      }
    }
    return obj;
  }

  useEffect(() => {
    httpRequest(`dashboard/envios?vencidos[gt]=0`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      if (Usuarios.isAdmin()) {
        const registrosUnificados = unificarRegistrosDuplicados(res.body);
        setDados(registrosUnificados);
      } else {
        const idsFiltrados = exibirTiposDocumentos();
        const itensFiltrados = res.body.filter((objeto) =>
          idsFiltrados.includes(objeto.setor_id)
        );
        const registrosUnificados = unificarRegistrosDuplicados(itensFiltrados);
        setDados(registrosUnificados);
      }
    });
  }, []);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      nextLabel=""
      breakLabel="..."
      previousLabel=""
      pageRangeDisplayed={2}
      forcePage={currentPage}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      pageCount={Math.ceil(data.length / 10) || 1}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

  return (
    <Card className="overflow-hidden">
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={searchValue.length ? filteredData : data}
          columns={coluns}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationRowsPerPageOptions={[3, 6]}
          paginationPerPage={3}
        />
      </div>
    </Card>
  );
};

export default TableVencidos;
