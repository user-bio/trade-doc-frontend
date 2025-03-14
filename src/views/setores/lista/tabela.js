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
  const [selectSetor, setselectSetor] = useState([]);
  const [selectGestor, setselectGestor] = useState([]);
  const [selectResponsavel, setselectResponsavel] = useState([]);
  // ** Hooks
  const { t } = useTranslation();

  let defaultValues = {
    setor: null,
    gestor: null,
    responsavel: null,
    campo: { value: "setor", label: "Setor" },
    ordenacao: { value: "crescente", label: "Crescente" },
  };

  const ordenacaoOPT = [
    { value: "decrescente", label: "Decrescente" },
    { value: "crescente", label: "Crescente" },
  ];

  const camposOPT = [
    { value: "id", label: "ID" },
    { value: "setor", label: "Setor" },
    { value: "gestor", label: "Gestor" },
    { value: "responsavel", label: "Responsável" },
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
    httpRequest(`setores`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objSetor = [];
      res.body.map((item) => {
        objSetor.push({
          value: item.id,
          label: item.setor,
        });
      });
      setselectSetor(objSetor);
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
      setselectGestor(objUsuarios);
      setselectResponsavel(objUsuarios);
    });
  }, []);

  const onSubmit = (data) => {
    setDataForm(data);
    buscaFiltro(data).then((res) => {
      let gestor = data.gestor;
      let resultado = [];
      if (gestor) {
        resultado = res.filter((item) =>
          item.gestores.some((g) => g.id === gestor.value)
        );
      } else {
        resultado = res;
      }
      setDados(resultado);
    });
  };

  async function buscaFiltro(data) {
    let busca = `?order=${data.ordenacao.value}&campo=${data.campo.value}`;
    if (data.setor) {
      busca = `${busca}&setor=${data.setor.value}`;
    }
    if (data.gestor) {
      busca = `${busca}&gestor=${data.gestor.value}`;
    }
    if (data.responsavel) {
      busca = `${busca}&responsavel=${data.responsavel.value}`;
    }
    if (data.status) {
      busca = `${busca}&status=${data.status.value}`;
    }
    let retorno = await httpRequest(`setores${busca}`, {
      method: "GET",
      token: getToken(),
    });

    return retorno.body;
  }

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
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <CardTitle tag="h4">Setores</CardTitle>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate("/setores/form")}
          >
            Novo Setor
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="setor">
                Setor
              </Label>

              <Controller
                id="setor"
                control={control}
                name="setor"
                render={({ field }) => (
                  <Select
                    options={selectSetor}
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
              <Label className="form-label" for="gestor">
                Gestor
              </Label>

              <Controller
                id="gestor"
                control={control}
                name="gestor"
                render={({ field }) => (
                  <Select
                    options={selectGestor}
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
              <Label className="form-label" for="responsavel">
                Responsável
              </Label>

              <Controller
                id="responsavel"
                control={control}
                name="responsavel"
                render={({ field }) => (
                  <Select
                    options={selectResponsavel}
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
          //paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
