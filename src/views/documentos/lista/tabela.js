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
import Select from "react-select";
import { selectThemeColors } from "@utils";
import { useForm, Controller } from "react-hook-form";
import Cleave from "cleave.js/react";
import { CSVLink } from "react-csv";

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
import {
  getDocFIltro,
  isDocFIltro,
  setDocFIltro,
} from "../../../services/Filtros";
import { converterData, converterDataAnoMes } from "../../../services/Funcoes";
import Usuarios from "../../../services/Usuarios";

const DataTablesReOrder = () => {
  let navigate = useNavigate();
  const [data, setDados] = useState([]);
  const [dataCsv, setDataCsv] = useState([]);
  // ** States
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [dataForm, setDataForm] = useState(null);

  const [selectTipo, setselectTipo] = useState([]);
  const [selectEmpresas, setselectEmpresas] = useState([]);
  const [selectFuncionarios, setselectFuncionarios] = useState([]);
  // ** Hooks
  const { t } = useTranslation();

  let defaultValues = {
    tipo: null,
    empresa: null,
    funcionario: null,
    campo: { value: "id", label: "ID" },
    ordenacao: { value: "decrescente", label: "Decrescente" },
  };

  const ordenacaoOPT = [
    { value: "decrescente", label: "Decrescente" },
    { value: "crescente", label: "Crescente" },
  ];

  const camposOPT = [
    { value: "id", label: "ID" },
    { value: "tipo", label: "Tipo" },
    { value: "empresa", label: "Empresa" },
    { value: "funcionario", label: "Funcionário" },
    { value: "validade", label: "Validade" },
  ];

  if (getDocFIltro()) {
    defaultValues = getDocFIltro();
    useEffect(() => {
      buscaFiltro(getDocFIltro()).then((res) => {
        setDados(res);
        ajustaCsv(res);
      });
    }, []);
  } else {
    useEffect(() => {
      httpRequest(`documentos`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        if (Usuarios.isAdmin()) {
          setDados(res.body);
          ajustaCsv(res.body);
        } else {
          const idsFiltrados = exibirTiposDocumentos();
          const itensFiltrados = res.body.filter((objeto) =>
            idsFiltrados.includes(objeto.Documentos_Tipo.setor_id)
          );
          setDados(itensFiltrados);
          ajustaCsv(itensFiltrados);
        }
      });
    }, []);
  }

  function ajustaCsv(dataValor) {
    let obj = [];
    dataValor.map((item) => {
      obj.push({
        codigo_documento: item.id,
        documento_tipo: item.Documentos_Tipo.nome,
        empresa: item.Empresa.nome_fantasia,
        funcionario: item.Funcionario !== null ? item.Funcionario.nome : "",
        validade: item.validade,
      });
    });
    setDataCsv(obj);
  }

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

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = data.filter((item) => {
        const startsWith =
          item.Documentos_Tipo.nome
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.Empresa.nome_fantasia
            .toLowerCase()
            .startsWith(value.toLowerCase());
        // item.Funcionario.nome.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.Documentos_Tipo.nome
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          item.Empresa.nome_fantasia
            .toLowerCase()
            .includes(value.toLowerCase());
        // item.Funcionario.nome.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData(updatedData);
      setSearchValue(value);
    }
  };

  function exibirTiposDocumentos() {
    const setores = Usuarios.getUserStorage();

    let obj = [];

    for (let setor of setores.Setores) {
      if (setor.Usuarios_Setores.permissoes !== null) {
        if (setor.Usuarios_Setores.permissoes.uploadDoc) {
          obj.push(setor.id);
        }
      }
    }
    return obj;
  }

  useEffect(() => {
    httpRequest(`documentos/tipos`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      let itensFiltrados = [];
      if (Usuarios.isAdmin()) {
        itensFiltrados = res.body;
      } else {
        const idsFiltrados = exibirTiposDocumentos();
        itensFiltrados = res.body.filter((objeto) =>
          idsFiltrados.includes(objeto.setor_id)
        );
      }
      const objTipos = [];
      itensFiltrados.map((item) => {
        objTipos.push({
          value: item.id,
          label: item.nome + " - " + item.tipo,
        });
      });
      setselectTipo(objTipos);
    });
  }, []);

  useEffect(() => {
    httpRequest(`empresas`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const obj = [];
      res.body.map((item) => {
        obj.push({
          value: item.id,
          label: item.nome_fantasia,
        });
      });
      setselectEmpresas(obj);
    });
  }, []);

  function carregaFuncionarios(data) {
    setValue("empresa", {
      value: data.value,
      label: data.label,
    });
    httpRequest(`empresas/${data.value}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objFuncionarios = [];
      res.body.Funcionarios.map((funcionario) => {
        objFuncionarios.push({
          value: funcionario.id,
          label: funcionario.nome,
        });
      });
      setselectFuncionarios(objFuncionarios);
    });
  }

  const onSubmit = (data) => {
    setDataForm(data);
    setDocFIltro(data);
    buscaFiltro(data).then((res) => {
      setDados(res);
    });
  };

  async function buscaFiltro(data) {
    let busca = `?order=${data.ordenacao.value}&campo=${data.campo.value}`;
    if (data.tipo) {
      busca = `${busca}&tipo_id=${data.tipo.value}`;
    }
    if (data.empresa) {
      busca = `${busca}&empresa_id=${data.empresa.value}`;
    }
    if (data.funcionario) {
      busca = `${busca}&funcionario_id=${data.funcionario.value}`;
    }
    if (data.vencimento) {
      busca = `${busca}&vencimento_mes_ano=${converterDataAnoMes(
        data.vencimento
      )}`;
    }
    if (data.periodo_1) {
      busca = `${busca}&data_inicio=${converterData(data.periodo_1)}`;
    }
    if (data.periodo_2) {
      busca = `${busca}&data_final=${converterData(data.periodo_2)}`;
    }
    let retorno = await httpRequest(`documentos${busca}`, {
      method: "GET",
      token: getToken(),
    });

    if (Usuarios.isAdmin()) {
      return retorno.body;
    } else {
      const idsFiltrados = exibirTiposDocumentos();
      const itensFiltrados = retorno.body.filter((objeto) =>
        idsFiltrados.includes(objeto.Documentos_Tipo.setor_id)
      );
      return itensFiltrados;
    }
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

  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: "ALL",
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <CardTitle tag="h4">Documentos</CardTitle>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate("/documentos/form")}
          >
            Novo Documento
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="tipo_upload">
                Tipo de documento
              </Label>

              <Controller
                id="tipo"
                control={control}
                name="tipo"
                render={({ field }) => (
                  <Select
                    options={selectTipo}
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
              <Label className="form-label" for="empresa">
                Empresa
              </Label>

              <Controller
                id="empresa"
                control={control}
                name="empresa"
                render={({ field }) => (
                  <Select
                    options={selectEmpresas}
                    classNamePrefix="select"
                    theme={selectThemeColors}
                    className={"react-select"}
                    {...field}
                    onChange={(e) => {
                      if (e !== null) {
                        carregaFuncionarios(e);
                      } else {
                        setValue("empresa", null);
                      }
                    }}
                    isClearable={true}
                    value={field.value || null}
                  />
                )}
              />
            </Col>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="funcionario">
                Funcionário
              </Label>

              <Controller
                id="funcionario"
                control={control}
                name="funcionario"
                render={({ field }) => (
                  <Select
                    options={selectFuncionarios}
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
                Período de criação
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
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="vencimento">
                Vencimento
              </Label>
              <Row>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Controller
                    defaultValue=""
                    id="vencimento"
                    name="vencimento"
                    control={control}
                    render={({ field }) => (
                      <Cleave
                        {...field}
                        placeholder="mes/ano"
                        className="form-control"
                        options={{
                          delimiters: ["/"],
                          blocks: [2, 4],
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
          </Row>
          <div className=" text-end w-100">
            <div className="row d-flex justify-content-end">
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <CSVLink
                      className="btn btn-outline-primary"
                      data={dataCsv}
                      filename={"documentos.csv"}
                    >
                      Exportar CSV
                    </CSVLink>
                  </div>
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

      <div className="react-dataTable react-dataTable-documentos">
        <DataTable
          noHeader
          pagination
          data={searchValue.length ? filteredData : data}
          columns={coluns}
          className="react-dataTable padding-bottom-80"
          sortIcon={<ChevronDown size={10} />}
          // paginationComponent={CustomPagination}
          paginationDefaultPage={currentPage + 1}
          paginationRowsPerPageOptions={[100, 150]}
          paginationPerPage={100}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
