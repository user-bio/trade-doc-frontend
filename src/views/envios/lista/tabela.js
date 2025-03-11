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
import { useForm, Controller, set } from "react-hook-form";
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
import { getEnvioFIltro, setEnvioFIltro } from "../../../services/Filtros";
import { converterData } from "../../../services/Funcoes";
import Usuarios from "../../../services/Usuarios";

const DataTablesReOrder = () => {
  let navigate = useNavigate();
  const [data, setDados] = useState([]);
  const [dataCsv, setDataCsv] = useState([]);
  const [dataForm, setDataForm] = useState(null);
  // ** States
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  // ** Hooks

  const [selectTipo, setselectTipo] = useState([]);
  const [selectEmpresas, setselectEmpresas] = useState([]);
  const [selectFuncionarios, setselectFuncionarios] = useState([]);
  const [selectClientes, setselectClientes] = useState([]);
  const [selectContatos, setselectContatos] = useState([]);

  const { t } = useTranslation();

  let defaultValues = {
    envio_id: "",
    status: null,
    cliente_id: null,
    empresa_id: null,
    tipo_envio: null,
    data_inicio: null,
    data_final: null,
    contatos: null,
    anexo: null,
    funcionario: null,
    documentos_tipos: null,
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
    { value: "contatos", label: "Contatos" },
    { value: "funcionario", label: "Funcionário" },
    { value: "data", label: "Data" },
    { value: "dia", label: "Dia" },
  ];

  const tiposEnviosOPT = [
    { value: "agendado", label: "Agendado" },
    { value: "recorrente", label: "Recorrente" },
    { value: "instantaneo", label: "Instantâneo" },
    { value: "rascunho", label: "Rascunho" },
  ];

  const tiposEnviosArquivosOPT = [
    { value: 1, label: "Anexo" },
    { value: 0, label: "Link" },
  ];

  const statusOPT = [
    { value: "pendente", label: "Pendente" },
    { value: "aprovada", label: "Aprovada" },
    { value: "reprovada", label: "Reprovada" },
    { value: "inativado", label: "Inativado" },
  ];

  if (getEnvioFIltro()) {
    defaultValues = getEnvioFIltro();
    useEffect(() => {
      buscaFiltro(defaultValues).then((res) => {
        setDados(res.body.dados);
        ajustaCsv(res.body.dados);
      });
    }, []);
  } else {
    useEffect(() => {
      let filtros = ""
      if(!Usuarios.isAdmin()){
        let contador = 0;
        for(let item of exibirTiposDocumentos()){
          if (contador === 0) {
            filtros += "?setores="+item;
          }else{
            filtros += "&setores="+item;
          }
          contador++;
        }
        console.log(filtros);
        if(filtros === ""){
          filtros = "?setores=vazio";
        }
      }
      httpRequest(`envios${filtros}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        setDados(res.body.dados);
        ajustaCsv(res.body.dados);
      });
    }, []);
  }

  function ajustaCsv(dataValor){
    let obj = []
    dataValor.map(item => {
      obj.push({
        codigo_envio: item.id,
        status: item.aprovacao,
        assunto: item.assunto,
        cliente: item.Cliente.nome_fantasia,
        contatos: item.Contatos.map(contato => contato.email).join('- '),
        empresa: item.Empresa.nome_fantasia,
        tipo_envio: item.tipo,
        data_agendado: item.data,
        data_instantaneo: item.createdAt,
        dia: item.dia,
      })
    })
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
  
  function exibirTiposDocumentos() {
    const setores = Usuarios.getUserStorage();

    let obj = [];

    for (let setor of setores.Setores) {
      if (setor.Usuarios_Setores.permissoes !== null && setor.Usuarios_Setores.permissoes.criaEnvio) {
        obj.push(setor.id);
      }
    }
    return obj;
  }

  useEffect(() => {
    httpRequest(`documentos/tipos`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      let itensFiltrados = []
      if(Usuarios.isAdmin()){
        itensFiltrados = res.body;
      }else{
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
    setValue("empresa_id", {
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

  useEffect(() => {
    httpRequest(`clientes`, {
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
      setselectClientes(obj);
    });
  }, []);

  function carregaContatos(data) {
    setValue("cliente_id", {
      value: data.value,
      label: data.label,
    });
    httpRequest(`clientes/${data.value}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      if (res.body.Contatos.length > 0) {
        const obj = [];
        res.body.Contatos.map((item) => {
          obj.push({
            value: item.id,
            label: item.nome,
          });
        });
        setselectContatos(obj);
      }
    });
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

  const onSubmit = (data) => {
    setDataForm(data);
    setEnvioFIltro(data);
    buscaFiltro(data).then((res) => {
      setDados(res.body.dados);
    });
  };

  async function buscaFiltro(data) {
    let busca = `?order=${data.ordenacao.value}&campo=${data.campo.value}`;
    //tipo de documento
    if (data.documentos_tipos) {
      busca = `${busca}&documentos_tipos=${data.documentos_tipos.value}`;
    }
    //empresa
    if (data.empresa_id) {
      busca = `${busca}&empresa_id=${data.empresa_id.value}`;
    }
    //funcionarios
    if (data.funcionario) {
      busca = `${busca}&funcionarios=${data.funcionario.value}`;
    }
    //cliente
    if (data.cliente_id) {
      busca = `${busca}&cliente_id=${data.cliente_id.value}`;
    }
    //contato
    if (data.contatos) {
      busca = `${busca}&contatos=${data.contatos.value}`;
    }
    //status
    if (data.status) {
      busca = `${busca}&status=${data.status.value}`;
    }
    //tipo de envio
    if (data.tipo_envio) {
      busca = `${busca}&tipo_envio=${data.tipo_envio.value}`;
    }
    //anexo
    if (data.anexo) {
      busca = `${busca}&anexo=${data.anexo.value}`;
    }
    if (data.periodo_1) {
      busca = `${busca}&data_inicio=${converterData(data.periodo_1)}`;
    }
    if (data.periodo_2) {
      busca = `${busca}&data_final=${converterData(data.periodo_2)}`;
    }
    if (data.envio_id !== "") {
      busca = `${busca}&envio_id=${data.envio_id}`;
    }

    
    let filtros = ""
    if(!Usuarios.isAdmin()){
      for(let item of exibirTiposDocumentos()){
          filtros += "&setores="+item;
      }
    }
    
    return await httpRequest(`envios${busca}${filtros}`, {
      method: "GET",
      token: getToken(),
    });
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <CardTitle tag="h4">Envios</CardTitle>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate("/envios/form")}
          >
            Novo Envio
          </Button>
        </div>
      </CardHeader>
      {/* <Row className='justify-content-end mx-0'>
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
      </Row> */}

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="documentos_tipos">
                Tipo de documento
              </Label>

              <Controller
                id="documentos_tipos"
                control={control}
                name="documentos_tipos"
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
              <Label className="form-label" for="empresa_id">
                Empresa
              </Label>

              <Controller
                id="empresa_id"
                control={control}
                name="empresa_id"
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
                        setValue("empresa_id", null);
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
              <Label className="form-label" for="cliente_id">
                Cliente
              </Label>

              <Controller
                id="cliente_id"
                control={control}
                name="cliente_id"
                render={({ field }) => (
                  <Select
                    options={selectClientes}
                    classNamePrefix="select"
                    theme={selectThemeColors}
                    className={"react-select"}
                    {...field}
                    onChange={(e) => {
                      if (e !== null) {
                        carregaContatos(e);
                      } else {
                        setValue("cliente_id", null);
                      }
                    }}
                    isClearable={true}
                    value={field.value || null}
                  />
                )}
              />
            </Col>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Label className="form-label" for="contatos">
                Contato
              </Label>

              <Controller
                id="contatos"
                control={control}
                name="contatos"
                render={({ field }) => (
                  <Select
                    options={selectContatos}
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
              <Row>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Label className="form-label" for="status">
                    Status
                  </Label>
                  <Controller
                    id="status"
                    control={control}
                    name="status"
                    render={({ field }) => (
                      <Select
                        options={statusOPT}
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
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Label className="form-label" for="envio_id">
                    Código do envio
                  </Label>
                  <Controller
                    control={control}
                    id="envio_id"
                    name="envio_id"
                    render={({ field }) => (
                      <Input
                        placeholder="ID envio"
                        className="form-control"
                        {...field}
                      />
                    )}
                  />
                </Col>
              </Row>
            </Col>
            <Col className={`mb-1`} xl="4" md="6" sm="12">
              <Row>
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Label className="form-label" for="tipo_envio">
                    Tipo de envio
                  </Label>
                  <Controller
                    id="tipo_envio"
                    control={control}
                    name="tipo_envio"
                    render={({ field }) => (
                      <Select
                        options={tiposEnviosOPT}
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
                <Col className={`mb-1`} xl="6" md="6" sm="12">
                  <Label className="form-label" for="anexo">
                    Tipo de arquivo
                  </Label>
                  <Controller
                    id="anexo"
                    control={control}
                    name="anexo"
                    render={({ field }) => (
                      <Select
                        options={tiposEnviosArquivosOPT}
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
                      filename={"envios.csv"}
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
          paginationRowsPerPageOptions={[100, 150]}
          paginationPerPage={100}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
