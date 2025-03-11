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
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { selectThemeColors } from "@utils";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  Button,
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";

import { httpRequest } from "../../../services/Api";
import { getToken } from "../../../services/Auth";

const DataTablesReOrder = () => {
  let navigate = useNavigate();
  const [data, setDados] = useState([]);
  // ** States
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [dataForm, setDataForm] = useState(null);
    const [selectNome, setselectNome] = useState([]);
    const [selectEmail, setselectEmail] = useState([]);
  // ** Hooks
  const { t } = useTranslation();

  let defaultValues = {
    nome: null,
    email: null,
    campo: { value: "first_name", label: "Nome" },
    ordenacao: { value: "crescente", label: "Crescente" },
  };

  const ordenacaoOPT = [
    { value: "decrescente", label: "Decrescente" },
    { value: "crescente", label: "Crescente" },
  ];

  const camposOPT = [
    { value: "id", label: "ID" },
    { value: "first_name", label: "Nome" },
    { value: "email", label: "E-mail" },
  ];

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

  useEffect(() => {
    httpRequest(`usuarios`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      let dadosLogado = JSON.parse(atob(getToken().split(".")[1]));

      const result = res.body.filter((usuario) => usuario.id != dadosLogado.id);
      const objUsuarios = [];
      let last_name = "";
      result.map((item) => {
        last_name = item.last_name != null ? item.last_name : "";
        objUsuarios.push({
          value: item.id,
          label: item.first_name + " " + last_name,
        });
      });
      const objEmail = [];
      result.map((item) => {
        objEmail.push({
          value: item.id,
          label: item.email,
        });
      });
      setselectEmail(objEmail);
      setselectNome(objUsuarios);
      setDados(result);
    });
  }, []);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  const onSubmit = (data) => {
    setDataForm(data);
    buscaFiltro(data).then((res) => {
      setDados(res);
    });
  };

  async function buscaFiltro(data) {
    let busca = `?order=${data.ordenacao.value}&campo=${data.campo.value}`;
    if (data.nome) {
      busca = `${busca}&nome=${data.nome.value}`;
    }
    if (data.email) {
      busca = `${busca}&email=${data.email.value}`;
    }
    let retorno = await httpRequest(`usuarios${busca}`, {
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
      pageCount={Math.ceil(data.length / 10) || 1}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <CardTitle tag="h4">Usuários</CardTitle>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate("/usuarios/form")}
          >
            Novo usuário
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="nome">
                Nome
              </Label>

              <Controller
                id="nome"
                control={control}
                name="nome"
                render={({ field }) => (
                  <Select
                    options={selectNome}
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
              <Label className="form-label" for="email">
                E-mail
              </Label>

              <Controller
                id="email"
                control={control}
                name="email"
                render={({ field }) => (
                  <Select
                    options={selectEmail}
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
              <Label className="form-label" for="campo">
                Ordenação
              </Label>
              <Row>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Controller
                    id="campo"
                    control={control}
                    name="campo"
                    render={({ field }) => (
                      <Select
                        options={camposOPT}
                        classNamePrefix="select"
                        theme={selectThemeColors}
                        className={"react-select"}
                        {...field}
                      />
                    )}
                  />
                </Col>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Controller
                    id="ordenacao"
                    control={control}
                    name="ordenacao"
                    render={({ field }) => (
                      <Select
                        options={ordenacaoOPT}
                        classNamePrefix="select"
                        theme={selectThemeColors}
                        className={"react-select"}
                        {...field}
                      />
                    )}
                  />
                </Col>
              </Row>
            </Col>
            <Col className={`mb-1`} xl="12" md="12" sm="12">
              <Button type="submit" color="outline-primary">
                Filtrar
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={searchValue.length ? filteredData : data}
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
