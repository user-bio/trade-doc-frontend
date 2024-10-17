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
  const [selectRazao, setselectRazao] = useState([]);
  const [selectNomeFantasia, setselectNomeFantasia] = useState([]);
  const [selectCnpj, setselectCnpj] = useState([]);

  // ** Hooks
  const { t } = useTranslation();

  let defaultValues = {
    tipo: null,
    empresa: null,
    funcionario: null,
    campo: { value: "razao_social", label: "Razao Social" },
    ordenacao: { value: "crescente", label: "Crescente" },
  };

  const ordenacaoOPT = [
    { value: "decrescente", label: "Decrescente" },
    { value: "crescente", label: "Crescente" },
  ];

  const camposOPT = [
    { value: "id", label: "ID" },
    { value: "razao_social", label: "Razao Social" },
    { value: "nome_fantasia", label: "Nome Fantasia" },
    { value: "cnpj", label: "CNPJ" },
    { value: "status", label: "Status" },
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
    httpRequest(`clientes`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setDados(res.body);
      const objRazao = [];
      res.body.map((item) => {
        objRazao.push({
          value: item.id,
          label: item.razao_social,
        });
      });
      setselectRazao(objRazao);
      const objNome = [];
      res.body.map((item) => {
        objNome.push({
          value: item.id,
          label: item.nome_fantasia,
        });
      });
      setselectNomeFantasia(objNome);
      const objCnpj = [];
      res.body.map((item) => {
        objCnpj.push({
          value: item.id,
          label: item.cnpj,
        });
      });
      setselectCnpj(objCnpj);
    });
  }, []);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  const onSubmit = (data) => {
    setDataForm(data);
    buscaFiltro(data).then((res) => {
      const idsToFilter = [
        data.razao_social?.value,
        data.nome_fantasia?.value,
        data.cnpj?.value,
      ].filter(id => id !== undefined && id !== null); // Filtra apenas os IDs que não são nulos ou indefinidos
  
      if (idsToFilter.length > 0) {
        // Filtra o resultado para incluir itens cujo 'id' esteja em 'idsToFilter'
        const filteredRes = res.filter(item => idsToFilter.includes(item.id));
        setDados(filteredRes);
      } else {
        // Se nenhum dos campos tiver valor, apenas define o resultado original
        setDados(res);
      }
    });
  };

  async function buscaFiltro(data) {
    let busca = `?order=${data.ordenacao.value}&campo=${data.campo.value}`;
    if (data.razao_social) {
      busca = `${busca}&razao_social=${data.razao_social.value}`;
    }
    if (data.nome_fantasia) {
      busca = `${busca}&nome_fantasia=${data.nome_fantasia.value}`;
    }
    if (data.cnpj) {
      busca = `${busca}&cnpj=${data.cnpj.value}`;
    }
    if (data.status) {
      busca = `${busca}&status=${data.status.value}`;
    }
    let retorno = await httpRequest(`clientes${busca}`, {
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
          <CardTitle tag="h4">Clientes</CardTitle>
          <Button
            type="submit"
            color="primary"
            onClick={() => navigate("/clientes/form")}
          >
            Novo cliente
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
              <Label className="form-label" for="razao_social">
                Razao Social
              </Label>

              <Controller
                id="razao_social"
                control={control}
                name="razao_social"
                render={({ field }) => (
                  <Select
                    options={selectRazao}
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
              <Label className="form-label" for="nome_fantasia">
                Nome Fantasia
              </Label>

              <Controller
                id="nome_fantasia"
                control={control}
                name="nome_fantasia"
                render={({ field }) => (
                  <Select
                    options={selectNomeFantasia}
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
              <Label className="form-label" for="cnpj">
                CNPJ
              </Label>

              <Controller
                id="cnpj"
                control={control}
                name="cnpj"
                render={({ field }) => (
                  <Select
                    options={selectCnpj}
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
