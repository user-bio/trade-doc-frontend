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
import Select from "react-select";
import { selectThemeColors } from "@utils";
import Cleave from "cleave.js/react";

import {
  getLogsFIltro,
  isLogsFIltro,
  setLogsFIltro,
} from "../../../services/Filtros";
import { converterData } from "../../../services/Funcoes";

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
  const [selectUsuarios, setselectUsuarios] = useState([]);

  const acoesOPT = [
    { value: "POST", label: "POST - Cadastro" },
    { value: "PUT", label: "PUT - Edição" },
    { value: "DELETE", label: "DELETE - Deleção" },
  ];

  const modulosOPT = [
    { value: "Envios", label: "Envios" },
    { value: "Documentos", label: "Documentos" },
    { value: "Documentos - Tipo", label: "Documentos - Tipo" },
    { value: "Documentos - Tipo - Parse", label: "Documentos - Tipo - Parse" },
    { value: "Setores", label: "Setores" },
    { value: "Funcionarios", label: "Funcionarios" },
    { value: "Clientes", label: "Clientes" },
    { value: "Clientes - Dominios", label: "Clientes - Dominios" },
    { value: "Clientes - Contatos", label: "Clientes - Contatos" },
  ];

  useEffect(() => {
    httpRequest(`logs`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setDados(res.body);
    });
  }, []);

  useEffect(() => {
    httpRequest(`usuarios`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objUsuarios = [];
      res.body.map((item) => {
        objUsuarios.push({
          value: item.id,
          label: item.first_name,
        });
      });
      setselectUsuarios(objUsuarios);
    });
  }, []);

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
  } = useForm();

  const onSubmit = (data) => {
    setDataForm(data);
    setLogsFIltro(data);
    buscaFiltro(data).then((res) => {
      setDados(res);
    });
  };
  async function buscaFiltro(data) {
    let busca = `?order=DESC`;
    if (data.usuario) {
      busca = `${busca}&usuario=${data.usuario.value}`;
    }
    if (data.acao) {
      busca = `${busca}&acao=${data.acao.value}`;
    }
    if (data.modulo) {
      busca = `${busca}&modulo=${data.modulo.value}`;
    }
    if (data.usuario) {
      busca = `${busca}&usuario_id=${data.usuario.value}`;
    }
    if (data.periodo_1) {
      busca = `${busca}&data_inicio=${converterData(data.periodo_1)}`;
    }
    if (data.periodo_2) {
      busca = `${busca}&data_final=${converterData(data.periodo_2)}`;
    }
    let retorno = await httpRequest(`logs${busca}`, {
      method: "GET",
      token: getToken(),
    });
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
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="usuario">
                Usuário
              </Label>

              <Controller
                id="usuario"
                control={control}
                name="usuario"
                render={({ field }) => (
                  <Select
                    options={selectUsuarios}
                    classNamePrefix="select"
                    theme={selectThemeColors}
                    className={"react-select"}
                    {...field}
                    isClearable={true}
                    value={field.value || null}
                  />
                )}
              />
            </Col>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="acao">
                Ação
              </Label>

              <Controller
                id="acao"
                control={control}
                name="acao"
                render={({ field }) => (
                  <Select
                    options={acoesOPT}
                    classNamePrefix="select"
                    theme={selectThemeColors}
                    className={"react-select"}
                    {...field}
                    isClearable={true}
                    value={field.value || null}
                  />
                )}
              />
            </Col>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="modulo">
                Módulo
              </Label>

              <Controller
                id="modulo"
                control={control}
                name="modulo"
                render={({ field }) => (
                  <Select
                    options={modulosOPT}
                    classNamePrefix="select"
                    theme={selectThemeColors}
                    className={"react-select"}
                    {...field}
                    isClearable={true}
                    value={field.value || null}
                  />
                )}
              />
            </Col>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="periodo_1">
                Selecione o período
              </Label>
              <Row>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Controller
                    defaultValue=""
                    id="periodo_1"
                    name="periodo_1"
                    control={control}
                    render={({ field }) => (
                      <Cleave
                        {...field}
                        placeholder="dia/mes/ano"
                        className="form-control"
                        options={{
                          delimiters: ["/", "/"],
                          blocks: [2, 2, 4],
                          delimiterLazyShow: true,
                          numericOnly: true,
                          numeralThousandsGroupStyle: "thousand",
                        }}
                      />
                    )}
                  />
                </Col>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Controller
                    defaultValue=""
                    id="periodo_2"
                    name="periodo_2"
                    control={control}
                    render={({ field }) => (
                      <Cleave
                        {...field}
                        placeholder="dia/mes/ano"
                        className="form-control"
                        options={{
                          delimiters: ["/", "/"],
                          blocks: [2, 2, 4],
                          delimiterLazyShow: true,
                          numericOnly: true,
                          numeralThousandsGroupStyle: "thousand",
                        }}
                      />
                    )}
                  />
                </Col>
              </Row>
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
