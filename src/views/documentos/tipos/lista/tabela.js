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

import { httpRequest } from "../../../../services/Api";
import { getToken } from "../../../../services/Auth";

const DataTablesReOrder = () => {
  let navigate = useNavigate();
  const [data, setDados] = useState([]);
  // ** States
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [dataForm, setDataForm] = useState(null);
  const [selectNome, setselectNome] = useState([]);
  const [selectSetor, setselectSetor] = useState([]);

  // ** Hooks
  const { t } = useTranslation();

  let defaultValues = {
    tipo: null,
    empresa: null,
    funcionario: null,
    campo: { value: "nome", label: "Nome" },
    ordenacao: { value: "crescente", label: "Crescente" },
  };

  const ordenacaoOPT = [
    { value: "decrescente", label: "Decrescente" },
    { value: "crescente", label: "Crescente" },
  ];

  const camposOPT = [
    { value: "id", label: "ID" },
    { value: "nome", label: "Nome" },
    { value: "setor", label: "Setor" },
    { value: "tipo", label: "Tipo" },
    { value: "status", label: "Status" },
  ];

  const tipoOPT = [
    { value: "normal", label: "Normal" },
    { value: "merge", label: "Merge" },
  ];

  const statusOPT = [
    { value: 1, label: "Ativo" },
    { value: 0, label: "Inativo" },
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
    httpRequest(`documentos/tipos`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objNome = [];
      res.body.map((item) => {
        objNome.push({
          value: item.id,
          label: item.nome,
        });
      });
      setselectNome(objNome);
      setDados(res.body);
    });
  }, []);

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
    });
  }, []);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  const onSubmit = (data) => {
    setDataForm(data);
    buscaFiltro(data).then((res) => {
      // Cria os filtros com os valores de 'nome', 'setor', 'tipo' e 'status'
      const nomeToFilter = data.nome?.value;
      const setorToFilter = data.setor?.value;
      const tipoToFilter = data.tipo?.value;
      const statusToFilter = data.status?.value; // Adicionando o filtro para 'status'

      // Filtra os resultados com base em 'nome', 'setor', 'tipo' e 'status'
      const filteredRes = res.filter((item) => {
        const matchesNome = nomeToFilter ? nomeToFilter === item.id : true;
        const matchesSetor = setorToFilter
          ? setorToFilter === item.setor_id
          : true;
        const matchesTipo = tipoToFilter ? tipoToFilter === item.tipo : true;
        const matchesStatus =
          statusToFilter !== undefined ? statusToFilter == item.status : true; // Ajustado para comparar com números

        return matchesNome && matchesSetor && matchesTipo && matchesStatus; // Agora inclui o filtro de 'status'
      });

      // Atualiza os dados com os resultados filtrados
      setDados(filteredRes);
    });
  };

  async function buscaFiltro(data) {
    let busca = `?order=${data.ordenacao.value}&campo=${data.campo.value}`;
    if (data.nome) {
      busca = `${busca}&nome=${data.nome.value}`;
    }
    if (data.status) {
      busca = `${busca}&status=${data.status.value}`;
    }
    let retorno = await httpRequest(`documentos/tipos${busca}`, {
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
          <CardTitle tag="h4">Tipos</CardTitle>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate("/documento/tipos/form")}
          >
            Novo Tipo
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
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
              <Label className="form-label" for="nome">
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
            <Col className={`mb-1`} xl="3" md="6" sm="12">
              <Label className="form-label" for="tipo">
                Tipo
              </Label>
              <Controller
                id="tipo"
                control={control}
                name="tipo"
                render={({ field }) => (
                  <Select
                    options={tipoOPT}
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
            <Col className={`mb-1`} xl="3" md="6" sm="12">
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
          paginationRowsPerPageOptions={[100, 150]}
          paginationPerPage={100}
        />
      </div>
    </Card>
  );
};

export default DataTablesReOrder;
