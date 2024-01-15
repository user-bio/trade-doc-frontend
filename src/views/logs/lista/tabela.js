// ** React Imports
import React, { useState, useEffect } from "react";

// ** Table Columns
import ExpandableTable, { getDados, coluns } from "./data";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  getLogsFIltro,
  isLogsFIltro,
  setLogsFIltro,
} from "../../../services/Filtros";

// ** Reactstrap Imports
import {
  CardHeader,
  Card,
  CardTitle,
  CardBody,
  Form,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";

import { httpRequest } from "../../../services/Api";
import { getToken } from "../../../services/Auth";

const DataTablesReOrder = () => {
  let navigate = useNavigate();
  const [dados, setDados] = useState([]);
  const [dataForm, setDataForm] = useState(null);
  // ** States
  const [currentPage, setCurrentPage] = useState(0);


  let defaultValues = {
    search: "",
  };

  if (getLogsFIltro()) {
    defaultValues = getLogsFIltro();
    useEffect(() => {
      buscaFiltro(getLogsFIltro()).then((res) => {
        setDados(res);
      });
    }, []);
  } else {
    useEffect(() => {
      httpRequest(`logs`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        setDados(res.body);
      });
    }, []);
  }


  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  const {
    reset,
    control,
    setError,
    getInputProps,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    setDataForm(data);
    setLogsFIltro(data);
    buscaFiltro(data).then((res) => {
      setDados(res);
    });
  };
  async function buscaFiltro(data) {
    let busca = `?search=${data.search}`;
    console.log(busca);
    let retorno = await httpRequest(`logs${busca}`, {
      method: "GET",
      token: getToken(),
    });
    console.log(retorno);
    return retorno.body;
  }

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
          <CardTitle tag="h4">Logs</CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className={`mb-1`} xl="3" md="6" sm="12">
              <Label className="form-label" for="envio_id">
                Buscar por palçavra chave
              </Label>
              <Controller
                control={control}
                id="search"
                name="search"
                render={({ field }) => (
                  <Input
                    placeholder="Palavra chave"
                    className="form-control"
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
          <div className="w-100">
            <div className="row d-flex justify-content-start">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <Button type="submit" color="outline-primary">
                      Filtrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </CardBody>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={dados}
          expandableRows
          columns={coluns}
          expandOnRowClicked
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          //paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={ExpandableTable}
          paginationRowsPerPageOptions={[50, 100]}
          paginationPerPage={50}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
