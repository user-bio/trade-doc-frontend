import React, { Fragment, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";
import Select from "react-select";
import { selectThemeColors } from "@utils";
import { Alert } from "reactstrap";

// ** Third Party Components
import Breadcrumbs from "@components/breadcrumbs";
import { useForm, Controller } from "react-hook-form";
import classnames from "classnames";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { pt } from "flatpickr/dist/l10n/pt";

// ** Custom Components

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/file-uploader/file-uploader.scss";
import "./style.scss";

//components
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";
import { Blocos } from "./blocos";
import Usuarios from "../../../services/Usuarios";

const LotesForm = () => {
  const [data, setData] = useState(null);
  const [selectTipo, setselectTipo] = useState([]);
  const [selectEmpresas, setselectEmpresas] = useState([]);
  const [selectFuncionarios, setselectFuncionarios] = useState([]);

  const [statusBlocos, setStatusBlocos] = useState(false);
  const [blocos, setBlocos] = useState([]);

  isAzure();

  const options = {
    dateFormat: "d/m/Y",
    minDate: new Date(),
    locale: "pt",
  };
  const optionsComp = {
    showMonths: true,
    dateFormat: "m/Y",
    locale: "pt",
  };

  const defaultValues = {
    tipo: "",
    empresa: "",
    validadecampos: false,
    seleciona_todos: false,
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

  useEffect(() => {
    httpRequest(`documentos/tipos?tipo=normal`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      
      const docsFilter = res.body.filter(item => item.status === true);
      let itensFiltrados = [];
      if (Usuarios.isAdmin()) {
        itensFiltrados = docsFilter;
      } else {
        const idsFiltrados = exibirTiposDocumentos();
        itensFiltrados = docsFilter.filter((objeto) =>
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
      // const objTipos = [];
      // res.body.map((tipo) => {
      //   objTipos.push({
      //     value: tipo.id,
      //     label: tipo.nome,
      //   });
      // });
      setselectTipo(objTipos);
    });
  }, []);

  useEffect(() => {
    httpRequest(`empresas`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objEmpresas = [];
      res.body.map((tipo) => {
        objEmpresas.push({
          value: tipo.id,
          label: tipo.nome_fantasia,
        });
      });
      setselectEmpresas(objEmpresas);
    });
  }, []); // verifica permissoes
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

  function carregaFuncionarios(data) {
    setValue("empresa", {
      value: data.value,
      label: data.label,
    });
    httpRequest(`empresas/${data.value}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setselectFuncionarios(res.body.Funcionarios);
    });
  }

  let navigate = useNavigate();

  const onSubmit2 = (data) => {
    setData(data);
    const obj = [];
    for (let item of selectFuncionarios) {
      if (data[`funcionario_${item.id}`]) {
        obj.push({
          value: item.id,
          label: item.nome,
        });
      }
    }
    data.funcionario = obj;
    if (data.tipo !== "" && data.empresa !== "" && data.funcionario !== "") {
      setStatusBlocos(true);
      setBlocos(data);
    } else {
      setStatusBlocos(false);
      setBlocos([]);
    }
  };

  function marcaCheck(e){
    const isChecked = e.target.checked;
    if(isChecked){
      selectFuncionarios.map((item) => {
        setValue(`funcionario_${item.id}`, true)
      })
    }else{
      selectFuncionarios.map((item) => {
        setValue(`funcionario_${item.id}`, false)
      })
    }
  }

  return (
    <Fragment>
      <Breadcrumbs
        title="Documentos"
        data={[
          { title: "Documentos", link: "/documentos" },
          { title: "Documentos em lote" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card className={`${statusBlocos ? "d-none" : ""}`}>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit2)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="tipo">
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
                          className={classnames("react-select", {
                            "is-invalid": data !== null && data.tipo === null,
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
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
                          className={classnames("react-select", {
                            "is-invalid":
                              data !== null &&
                              data.empresa === null &&
                              data.tipo_upload.value !== "split",
                          })}
                          {...field}
                          onChange={(e) => carregaFuncionarios(e)}
                        />
                      )}
                    />
                  </Col>
                  {/* <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="empresa">
                      Funcionários
                    </Label>

                    <Controller
                      id="funcionario"
                      control={control}
                      name="funcionario"
                      render={({ field }) => (
                        <Select
                          isMulti
                          options={selectFuncionarios}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames(
                            "react-select basic-multi-select",
                            {
                              "is-invalid":
                                data !== null &&
                                data.empresa === null &&
                                data.tipo_upload.value !== "split",
                            }
                          )}
                          {...field}
                        />
                      )}
                    />
                  </Col> */}
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="empresa">
                      Validade e competência para cada funcionário?
                    </Label>
                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`validadecampos`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`validadecampos`}
                        />
                        <Label
                          for={`validadecampos`}
                          className="form-check-label"
                        >
                          Sim
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-1" sm="12">
                    <Label className="form-label" for="empresa">
                      Funcionários
                    </Label>

                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`seleciona_todos`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`seleciona_todos`}
                          // checked={selected ? true : false}
                          onChange={marcaCheck}
                        />

                        <Label
                          for={`seleciona_todos`}
                          className="form-check-label"
                        >
                          Selecionar todos
                        </Label>
                      </div>
                    </div>
                    {selectFuncionarios
                    .filter((funcionario) => funcionario.status == 1)
                    .map((item, index) => (
                      <div>
                        <div
                          key={index}
                          className="form-check form-check-inline mt-1"
                        >
                          <input
                            {...register(`funcionario_${item.id}`)}
                            className="form-check-input"
                            type="checkbox"
                            id={`funcionario_${item.id}`}
                            // checked={selected ? true : false}
                            // onChange={marcaCheck}
                          />

                          <Label
                            for={`funcionario_${item.id}`}
                            className="form-check-label"
                          >
                            {item.nome}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>
                <div className={`text-end w-100`}>
                  <Button type="submit" color="primary">
                    Enviar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className={`${statusBlocos ? "" : "d-none"}`}>
        <Col sm="12">
          <Card>
            <CardBody>
              <Blocos status={statusBlocos} dados={blocos} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LotesForm;
