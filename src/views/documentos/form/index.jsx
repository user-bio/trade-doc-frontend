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

//components
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

import Upload from "./upload";
import Usuarios from "../../../services/Usuarios";

const DocumentosForm = () => {
  isAzure();

  const statusOPT = [
    { value: "normal", label: "Normal" },
    { value: "split", label: "Split" },
    { value: "merge", label: "Unificado" },
  ];

  const options = {
    dateFormat: "d/m/Y",
    // minDate: new Date(),
    locale: "pt",
  };
  const optionsComp = {
    showMonths: true,
    dateFormat: "m/Y",
    locale: "pt",
  };

  const defaultValues = {
    tipo: null,
    empresa: null,
    funcionario: null,
    vencimento: [],
    documento: null,
    competenciadata: [],
    tipo_upload: statusOPT[0],
    semduplicidade: false,
  };

  const [data, setData] = useState(null);
  const [dados, setDados] = useState(null);
  const [tipoInformacao, setTipoInformacao] = useState(false);
  const [tipoInfo, setTipoInfo] = useState(null);
  const [empresaUrl, setEmpresaUrl] = useState(false);
  const [funcionarioUrl, setFuncionarioUrl] = useState(false);
  const [urlDestino, setUrlDestino] = useState("documentos");
  const [listaFuncionarios, setListaFuncionarios] = useState([]);
  const [selectedF, setSelectedF] = useState([]);

  const [selectTipo, setselectTipo] = useState([]);
  const [selectEmpresas, setselectEmpresas] = useState([]);
  const [selectFuncionarios, setselectFuncionarios] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedcomp, setSelectedcomp] = useState(false);
  const [selectTipoUpload, setTipoUpload] = useState(false);
  const [fileBlock, setFileBlock] = useState(false);
  const [mergeAtivo, setMergeAtivo] = useState(false);
  const [infoMerge, setInfoMerge] = useState([]);
  const [retornoMerge, setRetornoMerge] = useState(null);
  const [selectedDocEmpresap, setSelectedDocEmpresap] = useState(false);
  const [selecionarTodos, setSelecionarTodos] = useState(false);

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

  let navigate = useNavigate();
  let { id } = useParams();


  useEffect(() => {
    getTiposNormal();
  }, []);
  function getTiposNormal() {
    httpRequest(`documentos/tipos?tipo=normal`, {
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
      itensFiltrados.map((tipo) => {
        objTipos.push({
          value: tipo.id,
          label: tipo.nome,
        });
      });
      setselectTipo(objTipos);
    });
  }

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
  }, []);

  function carregaTipo(data) {
    setValue("tipo", {
      value: data.value,
      label: data.label,
    });
    httpRequest(`documentos/tipos/${data.value}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setInfoMerge(res.body.Documentos_Merges);
      if (
        res.body.instrucoes !== null &&
        res.body.instrucoes !== undefined &&
        res.body.instrucoes !== ""
      ) {
        setTipoInformacao(true);
        setTipoInfo(res.body.instrucoes);
      } else {
        setTipoInformacao(false);
        setTipoInfo(null);
      }
    });
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
      setListaFuncionarios(res.body.Funcionarios);
      const objFuncionarios = [];
      res.body.Funcionarios
      .filter((funcionario) => funcionario.status == 1)
      .map((funcionario) => {
        objFuncionarios.push({
          value: funcionario.id,
          label: funcionario.nome,
        });
      });
      setselectFuncionarios(objFuncionarios);
    });
  }

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`documentos/${id}`, {
        method: "GET",
        token: getToken(),
      })
        .then((res) => {

          if (!exibirTiposDocumentos().includes(res.body.Documentos_Tipo.setor_id) && !Usuarios.isAdmin()) {
            navigate(`/`);
          }
          
          let tipo = res.body.Documentos_Tipo.tipo;
          if (tipo === "merge") {
            setValue("tipo_upload", {
              value: "merge",
              label: "Unificado",
            });
            setTipoUpload(true);
            setFileBlock(true);
            // getTiposMerge();
            setMergeAtivo(true);

            //pegar funcionarios empresa - res.body.empresa_id
            httpRequest(`empresas/${res.body.empresa_id}`, {
              method: "GET",
              token: getToken(),
            }).then((empresa) => {
              setListaFuncionarios(empresa.body.Funcionarios);
              let objFunc = empresa.body.Funcionarios;
              objFunc.map((funcionario, index) => {
                res.body.funcionariosMerges.filter(function (item) {
                  if (funcionario.id === item.id) {
                    objFunc[index].check = true;
                  }
                });
              });
              let arrayAx = [];
              for (var i = objFunc.length - 1; i >= 0; i--) {
                if (objFunc[i].check === true) {
                  arrayAx.push(objFunc[i].id);
                  setValue(`checkbox_f_${objFunc[i].id}`, true);
                }
              }
              setSelectedF(arrayAx);
            });
            httpRequest(`documentos/tipos/${res.body.Documentos_Tipo.id}`, {
              method: "GET",
              token: getToken(),
            }).then((merge) => {
              if (
                merge.body.instrucoes !== null &&
                merge.body.instrucoes !== undefined &&
                merge.body.instrucoes !== ""
              ) {
                setTipoInformacao(true);
                setTipoInfo(res.body.instrucoes);
              } else {
                setTipoInformacao(false);
                setTipoInfo(null);
              }
              setInfoMerge(merge.body.Documentos_Merges);
            });
          }
          setSelected(res.body.semvalidade);
          setSelectedcomp(res.body.semcompetencia);
          setValue("semvalidade", res.body.semvalidade);
          setValue("semcompetencia", res.body.semcompetencia);
          setValue("documento", ["update"]);
          setValue(
            "vencimento",
            res.body.validade !== null ? [res.body.validade] : []
          );
          setValue(
            "competenciadata",
            res.body.competenciadata !== null ? [res.body.competenciadata] : []
          );
          setValue("dias", [res.body.dias_aviso]);
          if (res.body.funcionario_id) {
            setValue("funcionario", {
              value: res.body.funcionario_id,
              label: res.body.Funcionario.nome,
            });
          }
          setValue("empresa", {
            value: res.body.empresa_id,
            label: res.body.Empresa.nome_fantasia,
          });
          setValue("tipo", {
            value: res.body.documentos_tipo_id,
            label: res.body.Documentos_Tipo.nome,
          });
          if (
            res.body.Documentos_Tipo.instrucoes !== null &&
            res.body.Documentos_Tipo.instrucoes !== undefined
          ) {
            setTipoInformacao(true);
            setTipoInfo(res.body.Documentos_Tipo.instrucoes);
          } else {
            setTipoInformacao(false);
            setTipoInfo(null);
          }
        })
        .catch((error) => {
          navigate(`/`);
        });
    }, []);
  } else {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("empresa_id")) {
      const empresa_id = searchParams.get("empresa_id");
      useEffect(() => {
        httpRequest(`empresas/${empresa_id}`, {
          method: "GET",
          token: getToken(),
        }).then((res) => {
          carregaFuncionarios({ value: empresa_id });
          setValue("empresa", {
            value: res.body.id,
            label: res.body.nome_fantasia,
          });
          setEmpresaUrl(true);
          setUrlDestino(`empresas/documentos/${empresa_id}`);
        });
      }, []);
    }
    if (searchParams.has("funcionario_id")) {
      const funcionario_id = searchParams.get("funcionario_id");
      useEffect(() => {
        httpRequest(`funcionarios/${funcionario_id}`, {
          method: "GET",
          token: getToken(),
        }).then((res) => {
          setValue("funcionario", {
            value: res.body.id,
            label: res.body.nome,
          });
          setFuncionarioUrl(true);
          setUrlDestino(`funcionarios/documentos/${funcionario_id}`);
        });
      }, []);
    }
  }

  useEffect(() => {
    if (dados !== null) {
      setValue("documento", dados);
    }
  }, [dados]);

  const onSubmit = (data) => {
    setData(data);

    let documentoTrue = false;
    if (
      data.documento === null &&
      id === undefined &&
      data.tipo_upload.value !== "merge"
    ) {
      documentoTrue = false;
    } else if (
      data.documento === null &&
      id === undefined &&
      data.tipo_upload.value === "merge"
    ) {
      documentoTrue = true;
    } else if (data.documento !== null && id === undefined) {
      documentoTrue = true;
    } else {
      documentoTrue = true;
    }

    let validaAcao = false;
    if (
      data.vencimento !== null &&
      data.vencimento.length > 0 &&
      data.tipo_upload.value === "merge" &&
      data.semvalidade === false
    ) {
      validaAcao = true;
    } else if (
      data.vencimento !== null &&
      data.vencimento.length > 0 &&
      data.documento !== null &&
      data.semvalidade === false
    ) {
      validaAcao = true;
    } else if (data.semvalidade === true) {
      validaAcao = true;
    } else {
      validaAcao = false;
    }

    let validaComp = false;
    if (
      data.competenciadata !== null &&
      data.competenciadata.length > 0 &&
      data.documento !== null &&
      data.semcompetencia === false
    ) {
      validaComp = true;
    } else if (
      data.competenciadata !== null &&
      data.competenciadata.length > 0 &&
      data.tipo_upload.value === "merge" &&
      data.semcompetencia === false
    ) {
      validaComp = true;
    } else if (data.semcompetencia === true) {
      validaComp = true;
    } else {
      validaComp = false;
    }

    let validaTipo_upload = false;
    if (data.tipo_upload.value === "normal" && data.empresa !== null) {
      validaTipo_upload = true;
    } else if (data.tipo_upload.value === "split") {
      validaTipo_upload = true;
    } else if (data.tipo_upload.value === "merge") {
      validaTipo_upload = true;
    } else {
      validaTipo_upload = false;
    }

    if (
      data.tipo !== null &&
      validaAcao === true &&
      validaComp === true &&
      validaTipo_upload === true &&
      documentoTrue === true
    ) {
      const dados = new FormData();
      dados.append("tipo_upload", data.tipo_upload.value);
      dados.append("documentos_tipo_id", data.tipo.value);
      dados.append("semduplicidade", data.semduplicidade);
      dados.append(
        "empresa_id",
        data.empresa == null ? null : data.empresa.value
      );
      dados.append(
        "funcionario_id",
        data.funcionario == null ? null : data.funcionario.value
      );
      dados.append("semvalidade", data.semvalidade);
      dados.append("dias_aviso", data.dias);
      dados.append(
        "validade",
        data.vencimento.length > 0 ? data.vencimento[0] : null
      );
      dados.append("semcompetencia", data.semcompetencia);
      dados.append(
        "competenciadata",
        data.competenciadata.length > 0 ? data.competenciadata[0] : null
      );

      if (data.tipo_upload.value !== "merge") {
        if (data.documento[0] !== "update") {
          dados.append("file", data.documento[0]);
        }
      }

      if (id === undefined && data.tipo_upload.value !== "merge") {
        // if (data.tipo_upload.value === "merge") {

        // } else {
        httpRequest(`documentos`, {
          method: "POST",
          body: dados,
          token: getToken(),
        })
          .then((res) => {
            if (data.tipo_upload.value === "split") {
              let totalItens = res.body.funcionariosEncontrados.length;
              MySwal.fire({
                icon: "success",
                title: "Sucesso!",
                html: `<p>
                    Total de ${totalItens} registros inseridos! <br><br>
                    ${
                      res.body.funcionariosNaoEncontrados.length > 0
                        ? "<b>Campos não encontrados no sistema:</b> <br>"
                        : ""
                    }
                    ${
                      res.body.funcionariosNaoEncontrados.length > 0
                        ? res.body.funcionariosNaoEncontrados
                            .map((nao) => {
                              return nao.campo;
                            })
                            .reduce((a, b) => `${a}, ${b}`)
                        : ""
                    }
                  </p>`,
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            } else {
              MySwal.fire({
                icon: "success",
                title: "Sucesso!",
                text: "Cadastro realizada com sucesso.",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            }
            navigate(`/${urlDestino}`);
          })
          .catch((error) => {
            MySwal.fire({
              icon: "error",
              title: "Erro!",
              text: error.response.data.error,
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
          });
        // }
      } else {
        if (data.tipo_upload.value === "merge") {
          let gerado = {
            documentos_tipo_id: data.tipo.value,
            documentoempresa: data.documentoempresa,
            empresa_id: data.empresa.value,
            semvalidade: data.semvalidade,
            dias_aviso: data.dias,
            validade: data.vencimento.length > 0 ? data.vencimento[0] : null,
            semcompetencia: data.semcompetencia,
            competenciadata:
              data.competenciadata.length > 0 ? data.competenciadata[0] : null,
          };

          gerado.funcionarios = [];
          listaFuncionarios.map((funcionario) => {
            if (eval(`data.checkbox_f_${funcionario.id}`)) {
              gerado.funcionarios.push(funcionario.id);
            }
          });

          httpRequest(`documentos/merge`, {
            method: "POST",
            body: gerado,
            token: getToken(),
          })
            .then((res) => {
              setRetornoMerge(res.body);
              MySwal.fire({
                icon: "success",
                title: "Sucesso!",
                html: `Documento gerado com sucesso!<br>Ao final da página detalhes da geração do unificado.`,
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
              // navigate(`/documentos/form/${res.body.documento_id}`);
            })
            .catch((error) => {
              MySwal.fire({
                icon: "error",
                title: "Erro!",
                text: error.response.data.error,
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            });
        } else {
          httpRequest(`documentos/${id}`, {
            method: "PUT",
            body: dados,
            token: getToken(),
          })
            .then((res) => {
              MySwal.fire({
                icon: "success",
                title: "Sucesso!",
                text: "Cadastro atualizado com sucesso.",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
              navigate(`/${urlDestino}`);
            })
            .catch((error) => {
              MySwal.fire({
                icon: "error",
                title: "Erro!",
                text: error.response.data.error,
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            });
        }
      }
    }
  };

  function marcaCheck(e) {
    if (e.target.checked) {
      setSelected(e.target.checked);
    } else {
      setSelected(e.target.checked);
    }
  }

  function marcaCheckDocEmp(e) {
    if (e.target.checked) {
      setSelectedDocEmpresap(e.target.checked);
    } else {
      setSelectedDocEmpresap(e.target.checked);
    }
  }

  function marcaCheckComp(e) {
    if (e.target.checked) {
      setSelectedcomp(e.target.checked);
    } else {
      setSelectedcomp(e.target.checked);
    }
  }

  function selecionaTipo(e) {
    if (e.value === "normal") {
      setTipoUpload(false);
      setFileBlock(false);
      getTiposNormal();
      setMergeAtivo(false);
      setValue("tipo_upload", {
        value: "normal",
        label: "Normal",
      });
    } else if (e.value === "split") {
      setTipoUpload(true);
      setFileBlock(false);
      getTiposNormal();
      setMergeAtivo(false);
      setValue("tipo_upload", {
        value: "split",
        label: "Split",
      });
    } else if (e.value === "merge") {
      // SELECIONATIPO
      setTipoUpload(true);
      setFileBlock(true);
      getTiposMerge();
      setMergeAtivo(true);
      setValue("tipo_upload", {
        value: "merge",
        label: "Unificado",
      });
    }
  }
  function getTiposMerge() {
    httpRequest(`documentos/tipos?tipo=merge`, {
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
      itensFiltrados.map((tipo) => {
        objTipos.push({
          value: tipo.id,
          label: tipo.nome,
        });
      });
      setselectTipo(objTipos);
    });
  }

  function marcaCheckF(valor) {
    let checks = structuredClone(selectedF);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedF(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedF(checks);
      } else {
        checks.push(valor.id);
        setSelectedF(checks);
      }
    }
  }

  function marcaTodos(valor) {
    if (valor) {
      setSelecionarTodos(false);
      let arrayAx = [];
      listaFuncionarios.map((funcionario, index) => {
        setValue(`checkbox_f_${funcionario.id}`, false);
      });
      setSelectedF(arrayAx);
    } else {
      setSelecionarTodos(true);
      let arrayAx = [];
      listaFuncionarios.map((funcionario, index) => {
        arrayAx.push(funcionario.id);
        setValue(`checkbox_f_${funcionario.id}`, true);
      });
      setSelectedF(arrayAx);
    }
  }

  // verifica permissoes
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
  let permissoes = exibirTiposDocumentos();

  if (permissoes.length === 0 && !Usuarios.isAdmin()) {
    navigate(`/`);
  }

  return (
    <Fragment>
      <Breadcrumbs
        title="Documentos"
        data={[
          { title: "Documentos", link: "/documentos" },
          { title: "Novo Documento" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col
                    className={`mb-1 ${id !== undefined ? `d-none` : ``}`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="tipo_upload">
                      Tipo de upload
                    </Label>

                    <Controller
                      id="tipo_upload"
                      control={control}
                      name="tipo_upload"
                      render={({ field }) => (
                        <Select
                          options={statusOPT}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          {...field}
                          onChange={(e) => selecionaTipo(e)}
                        />
                      )}
                    />
                  </Col>
                </Row>
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
                          isDisabled={id !== undefined ? true : false}
                          {...field}
                          onChange={(e) => carregaTipo(e)}
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
                          isDisabled={
                            id !== undefined || empresaUrl ? true : false
                          }
                          {...field}
                          onChange={(e) => carregaFuncionarios(e)}
                        />
                      )}
                    />
                  </Col>
                  <Col
                    className={`mb-1 ${
                      selectTipoUpload === true ? `d-none` : ``
                    }`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
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
                          isDisabled={
                            id !== undefined || funcionarioUrl ? true : false
                          }
                          {...field}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    className={`mb-1 ${selected ? "d-none" : "d-block"}`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="dias">
                      Dias aviso vencimento
                    </Label>
                    <Controller
                      defaultValue="30"
                      control={control}
                      id="dias"
                      name="dias"
                      render={({ field }) => (
                        <Input
                          placeholder="Dias para aviso"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.dias === null || !data.dias.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col
                    className={`mb-1 ${selected ? "d-none" : "d-block"}`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="vencimento">
                      Vencimento
                    </Label>
                    <Controller
                      control={control}
                      id="vencimento"
                      name="vencimento"
                      render={({ field }) => (
                        <Flatpickr
                          {...field}
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.vencimento === null ||
                                !data.vencimento.length),
                          })}
                          id="vencimento"
                          options={options}
                        />
                      )}
                    />
                  </Col>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="semvalidade">
                      Documento sem validade?
                    </Label>
                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`semvalidade`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`semvalidade`}
                          checked={selected ? true : false}
                          onChange={marcaCheck}
                        />

                        <Label for={`semvalidade`} className="form-check-label">
                          Sim
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className={`mb-1 ${selectedcomp ? "d-none" : "d-block"}`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="competenciadata">
                      Competência
                    </Label>
                    <Controller
                      control={control}
                      id="competenciadata"
                      name="competenciadata"
                      render={({ field }) => (
                        <Flatpickr
                          {...field}
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.competenciadata === null ||
                                !data.competenciadata.length),
                          })}
                          id="competenciadata"
                          options={optionsComp}
                        />
                      )}
                    />
                  </Col>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="semcompetencia">
                      Documento sem competência?
                    </Label>
                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`semcompetencia`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`semcompetencia`}
                          checked={selectedcomp ? true : false}
                          onChange={marcaCheckComp}
                        />

                        <Label
                          for={`semcompetencia`}
                          className="form-check-label"
                        >
                          Sim
                        </Label>
                      </div>
                    </div>
                  </Col>
                  <Col
                    className={`${tipoInformacao ? "d-block" : "d-none"}`}
                    xl="12"
                    md="12"
                    sm="12"
                  >
                    <Label className="form-label" for="documento">
                      Orientação
                    </Label>
                    <div>
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>{tipoInfo}</span>
                        </div>
                      </Alert>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className={`mb-1 ${
                      selectTipoUpload !== true || mergeAtivo ? `d-none` : ``
                    }`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="semduplicidade">
                      Documento com duplicidade de páginas?
                    </Label>
                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`semduplicidade`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`semduplicidade`}
                          onChange={marcaCheckComp}
                        />

                        <Label
                          for={`semduplicidade`}
                          className="form-check-label"
                        >
                          Sim
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className={`mb-1 ${fileBlock === true ? `d-none` : ``}`}
                    xl="12"
                    md="12"
                    sm="12"
                  >
                    <Label className="form-label" for="documento">
                      Documento
                    </Label>
                    <Upload
                      id="documento"
                      funcao={setDados}
                      class={
                        data !== null &&
                        (data.documento === null || !data.documento.length)
                          ? "border-danger"
                          : ""
                      }
                    />
                  </Col>
                </Row>
                <hr className={`${mergeAtivo ? "" : "d-none"}`} />
                <Row className={`${mergeAtivo ? "" : "d-none"}`}>
                  <Col className={``} xl="12" md="12" sm="12">
                    <Label className="form-label" for="documento">
                      Documentos que compoem unificado
                    </Label>
                    <div>
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>
                            {infoMerge.map((item, index) => (
                              <div key={index}>
                                {index + 1} - {item.Documentos_Tipo.nome}
                              </div>
                            ))}
                          </span>
                        </div>
                      </Alert>
                    </div>
                  </Col>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="documentoempresa">
                      Documento de empresa?
                    </Label>
                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`documentoempresa`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`documentoempresa`}
                          checked={selectedDocEmpresap ? true : false}
                          onChange={marcaCheckDocEmp}
                        />

                        <Label
                          for={`documentoempresa`}
                          className="form-check-label"
                        >
                          Sim
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className={`${mergeAtivo ? "" : "d-none"}`}>
                  <Col>
                    <Label className="form-label" for="clientes">
                      Selecione os funcionários que compoem o documento
                    </Label>
                    <div
                      className={`${
                        listaFuncionarios.length > 0 ? "d-none" : ""
                      }`}
                    >
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>Nenhum funcionário disponível</span>
                        </div>
                      </Alert>
                    </div>
                    <div className="demo-inline-spacing">
                      <div className="form-check form-check-inline">
                        <input
                          {...register(`selecionar_todos`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`selecionar_todos`}
                          checked={selecionarTodos}
                          onChange={() => {
                            marcaTodos(selecionarTodos);
                          }}
                        />

                        <Label
                          for={`selecionar_todos`}
                          className="form-check-label"
                        >
                          Selecionar todos
                        </Label>
                      </div>
                    </div>
                    <hr />
                    {listaFuncionarios.map((funcionario, index) => (
                      <div key={index} className="demo-inline-spacing">
                        <div className="form-check form-check-inline">
                          <input
                            {...register(`checkbox_f_${funcionario.id}`)}
                            className="form-check-input"
                            type="checkbox"
                            id={`checkbox_f_${funcionario.id}`}
                            checked={
                              selectedF.includes(funcionario.id) ? true : false
                            }
                            onChange={() => {
                              marcaCheckF(funcionario);
                            }}
                          />

                          <Label
                            for={`checkbox_f_${funcionario.id}`}
                            className="form-check-label"
                          >
                            {funcionario.nome}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>
                <div className=" text-end w-100">
                  <Button type="submit" color="primary">
                    Salvar
                  </Button>
                </div>
                <Row className={`${retornoMerge != null ? "" : "d-none"}`}>
                  <Col>
                    {/* RetornoMerge */}
                    <Label className="form-label" for="clientes">
                      Relatório de geração de unificado:
                    </Label>
                    <div>
                      <Alert color="primary">
                        <div>
                          <div className="alert-body">
                            <span>
                              <b>Empresa: </b>{" "}
                              {retornoMerge != null
                                ? retornoMerge.empresa.nome_fantasia
                                : ""}{" "}
                              <br />
                              <b>Documento encontratos: </b>
                              {retornoMerge != null &&
                              retornoMerge.empresa.documentos.length > 0
                                ? retornoMerge.empresa.documentos
                                    .map((nao) => {
                                      return nao.nome;
                                    })
                                    .reduce((a, b) => `${a}, ${b}`)
                                : ""}
                              <br />
                              <b>Documento não encontratos: </b>
                              {retornoMerge != null &&
                              retornoMerge.empresa.documentosNaoEncontrados
                                .length > 0
                                ? retornoMerge.empresa.documentosNaoEncontrados
                                    .map((nao) => {
                                      return nao.nome;
                                    })
                                    .reduce((a, b) => `${a}, ${b}`)
                                : ""}
                            </span>
                          </div>
                          <hr className="border-white m-0" />
                          {retornoMerge != null
                            ? retornoMerge.funcionarios.map(
                                (funcionario, index) => (
                                  <div key={index} className="alert-body">
                                    <span>
                                      <b>Funcionário: </b> {funcionario.nome}{" "}
                                      <br />
                                      <b>Documento encontratos: </b>
                                      {funcionario.documentos.length > 0
                                        ? funcionario.documentos
                                            .map((nao) => {
                                              return nao.nome;
                                            })
                                            .reduce((a, b) => `${a}, ${b}`)
                                        : ""}
                                      <br />
                                      <b>Documento não encontratos: </b>
                                      {funcionario.documentosNaoEncontrados
                                        .length > 0
                                        ? funcionario.documentosNaoEncontrados
                                            .map((nao) => {
                                              return nao.nome;
                                            })
                                            .reduce((a, b) => `${a}, ${b}`)
                                        : ""}
                                    </span>
                                  </div>
                                )
                              )
                            : ""}
                        </div>
                      </Alert>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DocumentosForm;
