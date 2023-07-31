// ** React Imports
import React, { useState, useEffect } from "react";

// ** Table Columns
import { coluns } from "./data";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, Button, Row, Col, Label, Input } from "reactstrap";

import { httpRequest } from "../../../../services/Api";
import { getToken } from "../../../../services/Auth";

const DataTablesReOrder = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [dados, setDados] = useState([]);
  const [empresa, setEmpresa] = useState([]);
  // ** States
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(0);  
  const [filteredData, setFilteredData] = useState([])
  
  const { t } = useTranslation()
  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = dados.filter(item => {
        const startsWith =
          item.Documentos_Tipo.nome.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Empresa.nome_fantasia.toLowerCase().startsWith(value.toLowerCase()) 
          // item.Funcionario.nome.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.Documentos_Tipo.nome.toLowerCase().includes(value.toLowerCase()) ||
          item.Empresa.nome_fantasia.toLowerCase().includes(value.toLowerCase()) 
          // item.Funcionario.nome.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  useEffect(() => {
    httpRequest(`documentos?empresa_id=${id}`, {
      method: "GET",
      token: getToken(),
    }).then(res => {
      console.log(res.body)
      setDados(res.body);
    });
  }, []);

  useEffect(() => {
    httpRequest(`empresas/${id}`, {
      method: "GET",
      token: getToken(),
    }).then(res => {
        setEmpresa(res.body)
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
      pageCount={Math.ceil(dados.length / 10) || 1}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <CardTitle tag="h4">Documentos - {empresa.nome_fantasia}</CardTitle>
          <Button type="submit" color="primary" onClick={() => navigate(`/documentos/form?empresa_id=${id}`)}>
            Novo Documento
          </Button>
        </div>
      </CardHeader>
      <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
          <Label className='me-1' for='search-input-1'>
            {t('Busca')}
          </Label>
          <Input
            className='dataTable-filter mb-50'
            type='text'
            bsSize='sm'
            id='search-input-1'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={searchValue.length ? filteredData : dados}
          columns={coluns}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          // paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
          paginationRowsPerPageOptions={[50, 100]}
          paginationPerPage={50}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
