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
  Alert,
} from "reactstrap";
import Select from "react-select";
import { selectThemeColors } from "@utils";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import classnames from "classnames";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { useNavigate, useParams } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { pt } from "flatpickr/dist/l10n/pt";

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/file-uploader/file-uploader.scss";

//components
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";
import { dataPTBR } from "../../../services/Funcoes";
import Usuarios from "../../../services/Usuarios";

const EnviosForm = () => {
  isAzure();

  const tiposOPT = [
    { value: "instantaneo", label: "Instantaneo" },
    { value: "rascunho", label: "Rascunho" },
    { value: "agendado", label: "Agendado" },
    { value: "recorrente", label: "Recorrente" },
  ];

  let diasOPT = [];
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      diasOPT.push({ value: "0" + i, label: "0" + i });
    } else {
      diasOPT.push({ value: i, label: i });
    }
  }

  const defaultValues = {
    tipo: tiposOPT[0],
    dataEnvio: [],
    dataFim: [],
    dataRecorrente: [],
    assunto: "",
  };

  const options = {
    dateFormat: "d/m/Y",
    minDate: new Date(),
    locale: "pt",
  };

  const {
    reset,
    control,
    setError,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [envio, setEnvio] = useState(null);
  const [selectClientes, setselectClientes] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectEmpresas, setselectEmpresas] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [selectedF, setSelectedF] = useState([]);
  const [documentos, setDocumentos] = useState([]);
  const [selectedD, setSelectedD] = useState([]);
  const [selectedAtu, setSelectedAtu] = useState([]);
  const [tipoSel, setTipoSele] = useState(null);
  const [assuntos, setAssuntos] = useState(null);
  const [clienteView, setClienteView] = useState([]);

  const [searchFuncionarios, setSearchFuncionarios] = useState("");
  const [searchDocumentos, setSearchDocumentos] = useState("");

  // useEffect(() => {
  //   Usuarios.getUser().then((res) => {
  //     setDadosUser(res)
  //   });
  // }, []);

  useEffect(() => {
    httpRequest(`clientes?status=1`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      console.log(res);
      const objClientes = [];
      res.body.map((tipo) => {
        if (!tipo.possui_setor) {
          objClientes.push({
            value: tipo.id,
            label: tipo.nome_fantasia,
          });
        } else {
          let dadosUser = JSON.parse(localStorage.getItem("@bioseta-User"));
          if (dadosUser.Setores.length > 0) {
            let possuiSetor = dadosUser.Setores.some(
              (setor) => setor.id === tipo.possui_setor
            );
            if (possuiSetor) {
              objClientes.push({
                value: tipo.id,
                label: tipo.nome_fantasia,
              });
            }
          }
        }
      });
      setselectClientes(objClientes);
    });
  }, []);

  useEffect(() => {
    httpRequest(`emails`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setValue("assunto", res.body.assunto);
      setAssuntos({
        rascunho: res.body.assunto,
        instantaneo: res.body.assunto,
        agendado: res.body.assunto_2,
        recorrente: res.body.assunto_3,
      });
    });
  }, []);

  useEffect(() => {
    httpRequest(`empresas?status=1`, {
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

  if (id === undefined) {
    useEffect(() => {
      httpRequest(`documentos/tipos`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        const docsFilter = res.body.filter((item) => item.status === true);
        if (Usuarios.isAdmin()) {
          setDocumentos(docsFilter);
        } else {
          const idsFiltrados = exibirTiposDocumentos();
          const itensFiltrados = docsFilter.filter((objeto) =>
            idsFiltrados.includes(objeto.setor_id)
          );
          setDocumentos(itensFiltrados);
        }
      });
    }, []);
  }

  const filteredDocumentos = documentos.filter((item) =>
    item.nome.toLowerCase().includes(searchDocumentos.toLowerCase())
  );

  function exibirTiposDocumentos() {
    const setores = Usuarios.getUserStorage();

    let obj = [];
    for (let setor of setores.Setores) {
      if (
        setor.Usuarios_Setores.permissoes &&
        setor.Usuarios_Setores.permissoes.criaEnvio
      ) {
        obj.push(setor.id);
      }
    }
    return obj;
  }

  function changeClientes(e) {
    setValue("clientes", {
      value: e.value,
      label: e.label,
    });
    httpRequest(`clientes/${e.value}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setClienteView(res.body);
      setContatos(res.body.Contatos);
    });
  }

  function marcaCheck(valor) {
    let checks = structuredClone(selected);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelected(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelected(checks);
      } else {
        checks.push(valor.id);
        setSelected(checks);
      }
    }
  }

  function changeEmpresas(e) {
    setValue("empresa", {
      value: e.value,
      label: e.label,
    });
    httpRequest(`empresas/${e.value}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setFuncionarios(res.body.Funcionarios);
    });
  }

  // Filtra os itens conforme o texto digitado
  const filteredfuncionarios = funcionarios.filter((item) =>
    item.nome.toLowerCase().includes(searchFuncionarios.toLowerCase())
  );

  function changeTipo(e) {
    setValue("tipo", {
      value: e.value,
      label: e.label,
    });

    if (id === undefined) {
      setValue("assunto", assuntos[e.value]);
    }
    setTipoSele(e.value);
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

  function marcaCheckD(valor) {
    let checks = structuredClone(selectedD);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedD(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedD(checks);
      } else {
        checks.push(valor.id);
        setSelectedD(checks);
      }
    }
  }

  function marcaCheckAtu(valor) {
    let checks = structuredClone(selectedAtu);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedAtu(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedAtu(checks);
      } else {
        checks.push(valor.id);
        setSelectedAtu(checks);
      }
    }
  }

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`envios/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        setEnvio(res.body.dados);

        setTipoSele(res.body.dados.tipo);
        setValue("tipo", {
          value: res.body.dados.tipo,
          label: res.body.dados.tipo,
        });
        setValue("assunto", res.body.dados.assunto);

        if (res.body.dados.tipo === "recorrente") {
          setValue("dia", {
            value: res.body.dados.dia,
            label: res.body.dados.dia,
          });
        } else if (res.body.dados.tipo === "agendado") {
          setValue("dataEnvio", [new Date()]);
        }
        setValue("clientes", {
          value: res.body.dados.cliente_id,
          label: res.body.dados.Cliente.nome_fantasia,
        });
        setValue("empresa", {
          value: res.body.dados.empresa_id,
          label: res.body.dados.Empresa.nome_fantasia,
        });
        // TIPOS CHECK //
        httpRequest(`documentos/tipos`, {
          method: "GET",
          token: getToken(),
        }).then((em) => {
          const docsFilter = em.body.filter((item) => item.status === true);
          setDocumentos(docsFilter);

          let obj = docsFilter;
          docsFilter.map((tipo, index) => {
            res.body.dados.Documentos_Tipos.filter(function (item) {
              if (tipo.id === item.id) {
                obj[index].check = true;
                obj[index].envia_atua =
                  item.Documentos_Tipos_Envios.envia_documentos_atualizados;
              }
            });
          });
          let arrayAx = [];
          let arrayAxAtu = [];
          for (var i = obj.length - 1; i >= 0; i--) {
            if (obj[i].check === true) {
              arrayAx.push(obj[i].id);
              setValue(`checkbox_d_${obj[i].id}`, true);
            }
            if (obj[i].envia_atua === "sim") {
              arrayAxAtu.push(obj[i].id);
              setValue(`checkbox_atu_${obj[i].id}`, true);
            }
          }
          setSelectedD(arrayAx);
          setSelectedAtu(arrayAxAtu);
        });
        // TIPOS CHECK //
        // CONTATOS //
        httpRequest(`clientes/${res.body.dados.cliente_id}`, {
          method: "GET",
          token: getToken(),
        }).then((con) => {
          setContatos(con.body.Contatos);
          let obj = con.body.Contatos;
          con.body.Contatos.map((contato, index) => {
            res.body.dados.Contatos.filter(function (item) {
              if (contato.id === item.id) {
                obj[index].check = true;
              }
            });
          });
          let arrayAx = [];
          for (var i = obj.length - 1; i >= 0; i--) {
            if (obj[i].check === true) {
              arrayAx.push(obj[i].id);
              setValue(`checkbox_${obj[i].id}`, true);
            }
          }
          setSelected(arrayAx);
        });
        // CONTATOS //
        // FUNCIONARIOS //
        httpRequest(`empresas/${res.body.dados.empresa_id}`, {
          method: "GET",
          token: getToken(),
        }).then((en) => {
          setFuncionarios(en.body.Funcionarios);
          let obj = en.body.Funcionarios;
          en.body.Funcionarios.map((funcionario, index) => {
            res.body.dados.Funcionarios.filter(function (item) {
              if (funcionario.id === item.id) {
                obj[index].check = true;
              }
            });
          });
          let arrayAx = [];
          for (var i = obj.length - 1; i >= 0; i--) {
            if (obj[i].check === true) {
              arrayAx.push(obj[i].id);
              setValue(`checkbox_f_${obj[i].id}`, true);
            }
          }
          setSelectedF(arrayAx);
        });
        // FUNCIONARIOS //

        setValue(
          "dataEnvio",
          res.body.dados.data !== null
            ? [res.body.dados.data + "T03:00:00.000Z"]
            : []
        );

        setValue(
          "dataFim",
          res.body.dados.data_final_envio !== null
            ? [res.body.dados.data_final_envio + "T03:00:00.000Z"]
            : []
        );
      });
    }, []);
  }

  function changeData(valor) {
    setValue(`dataEnvio`, valor);
  }
  function changeDataFim(valor) {
    setValue(`dataFim`, valor);
  }

  const getCheckedFuncionarios = () => {
    return funcionarios.filter((funcionario) =>
      selectedF.includes(funcionario.id)
    );
  };
  
  const filteredFuncionariosSelect = getCheckedFuncionarios();

  const getCheckedDocumentos = () => {
    return documentos.filter((documento) =>
      selectedD.includes(documento.id)
    );
  };
  const filteredDocumentosSelect = getCheckedDocumentos();

  const onSubmit = (data) => {
    setData(data);
    if (data.empresa !== undefined && data.clientes !== undefined) {
      let objEnvio = {
        tipo: data.tipo.value,
        cliente_id: data.clientes.value,
        empresa_id: data.empresa.value,
        data: data.dataEnvio.length > 0 ? data.dataEnvio[0] : null,
        data_final_envio: data.dataFim.length > 0 ? data.dataFim[0] : null,
        dia: data.dia !== undefined ? data.dia.value : "",
        assunto: data.assunto,
      };

      objEnvio.destinos = [];
      contatos.map((contato) => {
        if (eval(`data.checkbox_${contato.id}`)) {
          objEnvio.destinos.push(contato.id);
        }
      });

      objEnvio.funcionarios = [];
      funcionarios.map((funcionario) => {
        if (eval(`data.checkbox_f_${funcionario.id}`)) {
          objEnvio.funcionarios.push(funcionario.id);
        }
      });

      objEnvio.documentos = [];
      documentos.map((documento) => {
        if (eval(`data.checkbox_d_${documento.id}`)) {
          objEnvio.documentos.push({
            tipoId: documento.id,
            envia_documentos_atualizados: eval(
              `data.checkbox_atu_${documento.id}`
            )
              ? "sim"
              : "nao",
          });
        }
      });

      if (id === undefined) {
        httpRequest(`envios`, {
          method: "POST",
          body: objEnvio,
          token: getToken(),
        })
          .then((res) => {
            MySwal.fire({
              icon: "success",
              title: "Sucesso!",
              text: "Envio criado com sucesso.",
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
            navigate("/envios");
          })
          .catch((error) => {
            console.log(error);
            MySwal.fire({
              icon: "error",
              title: "Erro!",
              text: error.response.data.message,
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
            navigate(`/envios/detalhe/${error.response.data.id}`);
          });
      } else {
        httpRequest(`envios/${id}`, {
          method: "POST",
          body: objEnvio,
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
            navigate(`/envios/detalhe/${id}`);
          })
          .catch((error) => {
            MySwal.fire({
              icon: "error",
              title: "Erro!",
              text: error.response.data,
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
            navigate(`/envios/detalhe/${id}`);
          });
      }
    }
  };

  const reenvioDeEmail = () => {
    return MySwal.fire({
      title: "Deseja realizar o reenvio?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, reenviar!",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ms-1",
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        httpRequest(`envios/reenviar`, {
          method: "POST",
          body: {
            id: id,
          },
          token: getToken(),
        })
          .then(() => {
            MySwal.fire({
              icon: "success",
              title: "Enviado!",
              text: "Reenvio realizada com sucesso.",
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
          })
          .catch((error) => {
            MySwal.fire({
              icon: "error",
              title: "Erro!",
              text: error.response.data.message,
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
            navigate(`/envios/detalhe/${id}`);
          });
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.close();
      }
    });
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="Envios"
        data={[{ title: "Envios", link: "/envios" }, { title: "Novo Envio" }]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className={`${id !== undefined ? "" : "d-none"}`}>
                  <Col className="mb-1" xl="12" md="12" sm="12">
                    <Label className="form-label">Reenvio de e-mail</Label>
                    <div>
                      <Button color="outline-primary" onClick={reenvioDeEmail}>
                        Reenviar
                      </Button>
                    </div>
                    <div className="mt-2">
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>
                            Obs.: Essa opção executa um envio instantâneo
                            utilizando as configurações de envio.
                          </span>
                        </div>
                      </Alert>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="tipo">
                      Tipo
                    </Label>

                    <Controller
                      id="tipo"
                      control={control}
                      name="tipo"
                      render={({ field }) => (
                        <Select
                          options={tiposOPT}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames("react-select", {
                            "is-invalid": data !== null && data.tipo === null,
                          })}
                          isDisabled={
                            id !== undefined &&
                            envio !== null &&
                            envio.tipo !== "rascunho"
                              ? true
                              : false
                          }
                          {...field}
                          onChange={(e) => changeTipo(e)}
                        />
                      )}
                    />
                  </Col>
                  <Col
                    className={`mb-1 ${tipoSel !== "agendado" ? "d-none" : ""}`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="dataEnvio">
                      Data
                    </Label>
                    <Controller
                      control={control}
                      id="dataEnvio"
                      name="dataEnvio"
                      render={({ field }) => (
                        <Flatpickr
                          {...field}
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.dataEnvio === null ||
                                !data.dataEnvio.length),
                          })}
                          id="dataEnvio"
                          options={options}
                          // onChange={(date) => changeData(date)}
                        />
                      )}
                    />
                  </Col>
                  <Col
                    className={`mb-1 ${
                      tipoSel !== "recorrente" ? "d-none" : ""
                    }`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="dia">
                      Data
                    </Label>

                    <Controller
                      id="dia"
                      control={control}
                      name="dia"
                      render={({ field }) => (
                        <Select
                          options={diasOPT}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames("react-select", {
                            "is-invalid": data !== null && data.dia === null,
                          })}
                          // isDisabled={
                          //   id !== undefined &&
                          //   envio !== null &&
                          //   envio.tipo !== "rascunho"
                          //     ? true
                          //     : false
                          // }
                          {...field}
                        />
                      )}
                    />
                    {/* <Controller
                      defaultValue=""
                      control={control}
                      id="dia"
                      name="dia"
                      render={({ field }) => (
                        <Input
                          placeholder="Dia"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.dia === null || !data.dia.length),
                          })}
                          {...field}
                        />
                      )}
                    /> */}
                  </Col>
                  <Col
                    className={`mb-1 ${
                      tipoSel !== "recorrente" ? "d-none" : ""
                    }`}
                    xl="4"
                    md="6"
                    sm="12"
                  >
                    <Label className="form-label" for="dataFim">
                      Data de conclusão
                    </Label>
                    <Controller
                      control={control}
                      id="dataFim"
                      name="dataFim"
                      render={({ field }) => (
                        <Flatpickr
                          {...field}
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.dataFim === null || !data.dataFim.length),
                          })}
                          id="dataFim"
                          options={options}
                          // onChange={(date) => changeData(date)}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="assunto">
                      Assunto
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="assunto"
                      name="assunto"
                      render={({ field }) => (
                        <Input
                          placeholder="Assunto"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.assunto === null || !data.assunto.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="clientes">
                      Selecione o cliente
                    </Label>

                    <Controller
                      id="clientes"
                      control={control}
                      name="clientes"
                      render={({ field }) => (
                        <Select
                          options={selectClientes}
                          classNamePrefix="select"
                          className={classnames("react-select", {
                            "is-invalid":
                              data !== null && data.clientes === undefined,
                          })}
                          theme={selectThemeColors}
                          isDisabled={id !== undefined ? true : false}
                          {...field}
                          onChange={(e) => changeClientes(e)}
                        />
                      )}
                    />
                  </Col>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="clientes">
                      Tipo de envio
                    </Label>
                    <div>{clienteView.anexo ? "Anexo" : "Link"}</div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-1">
                    <Label className="form-label" for="clientes">
                      Selecione os contatos
                    </Label>
                    <div className={`${contatos.length > 0 ? "d-none" : ""}`}>
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>Nenhum contato disponível</span>
                        </div>
                      </Alert>
                    </div>
                    {contatos
                      .filter((contato) => contato.status == 1)
                      .map((contato, index) => (
                        <div key={index} className="demo-inline-spacing">
                          <div className="form-check form-check-inline">
                            <input
                              {...register(`checkbox_${contato.id}`)}
                              className="form-check-input"
                              type="checkbox"
                              id={`checkbox_${contato.id}`}
                              checked={
                                selected.includes(contato.id) ? true : false
                              }
                              onChange={() => {
                                marcaCheck(contato);
                              }}
                            />

                            <Label
                              for={`checkbox_${contato.id}`}
                              className="form-check-label"
                            >
                              {contato.nome}
                            </Label>
                          </div>
                        </div>
                      ))}
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="empresa">
                      Selecione a empresa
                    </Label>

                    <Controller
                      id="empresa"
                      control={control}
                      name="empresa"
                      render={({ field }) => (
                        <Select
                          options={selectEmpresas}
                          classNamePrefix="select"
                          className={classnames("react-select", {
                            "is-invalid":
                              data !== null && data.empresa === undefined,
                          })}
                          theme={selectThemeColors}
                          isDisabled={id !== undefined ? true : false}
                          {...field}
                          onChange={(e) => changeEmpresas(e)}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label className="form-label" for="clientes">
                      Selecione os funcionários
                    </Label>
                    <div className="col-lg-3 mb-1">
                      <input
                        type="text"
                        placeholder="Busque por nome"
                        value={searchFuncionarios}
                        className="form-control w-lg-25"
                        onChange={(e) => setSearchFuncionarios(e.target.value)}
                      />
                    </div>
                    <div>
                      <ul>
                        {filteredFuncionariosSelect.map((funcionario, key) => (
                          <li key={key}>{funcionario.nome}</li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`${funcionarios.length > 0 ? "d-none" : ""}`}
                    >
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>Nenhum funcionário disponível</span>
                        </div>
                      </Alert>
                    </div>
                    {filteredfuncionarios
                      .filter((funcionario) => funcionario.status == 1)
                      .map((funcionario, index) => (
                        <div key={index} className="demo-inline-spacing">
                          <div className="form-check form-check-inline">
                            <input
                              {...register(`checkbox_f_${funcionario.id}`)}
                              className="form-check-input"
                              type="checkbox"
                              id={`checkbox_f_${funcionario.id}`}
                              checked={
                                selectedF.includes(funcionario.id)
                                  ? true
                                  : false
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
                <hr />
                <Row>
                  <Col>
                    <Label className="form-label" for="documentos">
                      Selecione os documentos
                    </Label>
                    <div className="col-lg-3 mb-1">
                      <input
                        type="text"
                        placeholder="Busque por tipo de documento"
                        className="form-control w-lg-25"
                        value={searchDocumentos}
                        onChange={(e) => setSearchDocumentos(e.target.value)}
                      />
                    </div>
                    <div>
                      <ul>
                        {filteredDocumentosSelect.map((documento, key) => (
                          <li key={key}>{documento.nome}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${documentos.length > 0 ? "d-none" : ""}`}>
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>Nenhum documento disponível</span>
                        </div>
                      </Alert>
                    </div>
                    {filteredDocumentos.map((documento, index) => (
                      <div key={index} className="demo-inline-spacing">
                        <div className="row w-100">
                          <div className="col-lg-6">
                            <div className="form-check form-check-inline">
                              <input
                                {...register(`checkbox_d_${documento.id}`)}
                                className="form-check-input"
                                type="checkbox"
                                id={`checkbox_d_${documento.id}`}
                                checked={
                                  selectedD.includes(documento.id)
                                    ? true
                                    : false
                                }
                                onChange={() => {
                                  marcaCheckD(documento);
                                }}
                              />

                              <Label
                                for={`checkbox_d_${documento.id}`}
                                className="form-check-label"
                              >
                                {documento.nome}
                              </Label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-check form-check-inline">
                              <input
                                {...register(`checkbox_atu_${documento.id}`)}
                                className="form-check-input"
                                type="checkbox"
                                id={`checkbox_atu_${documento.id}`}
                                checked={
                                  selectedAtu.includes(documento.id)
                                    ? true
                                    : false
                                }
                                onChange={() => {
                                  marcaCheckAtu(documento);
                                }}
                              />

                              <Label
                                for={`checkbox_atu_${documento.id}`}
                                className="form-check-label"
                              >
                                Envio de documento após atualização
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>
                <div className=" text-end w-100">
                  <Button type="submit" color="primary">
                    Salvar / Enviar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default EnviosForm;
