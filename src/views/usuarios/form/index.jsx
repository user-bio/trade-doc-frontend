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

//components
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const UsuariosForm = () => {
  isAzure();

  const defaultValues = {};

  const {
    reset,
    control,
    setError,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  const permissoesLista = [
    {
      id: 11,
      nome: "aprova-envio",
      descricao: "Autorizar envio de e-mails",
      tipo: 1,
    },
    {
      id: 12,
      nome: "cadastro",
      descricao: "Cadastros",
      tipo: 2,
    },
    {
      id: 2,
      nome: "cliente",
      descricao: "Clientes",
      tipo: 3,
    },
    {
      id: 13,
      nome: "empresa",
      descricao: "Empresas",
      tipo: 3,
    },
    {
      id: 3,
      nome: "funcionario",
      descricao: "Funcionários",
      tipo: 3,
    },
    {
      id: 8,
      nome: "envio",
      descricao: "Envios",
      tipo: 2,
    },
    {
      id: 14,
      nome: "documento",
      descricao: "Documentos",
      tipo: 2,
    },
    {
      id: 4,
      nome: "configuracao",
      descricao: "Configuração",
      tipo: 2,
    },
    {
      id: 5,
      nome: "tipoDocumento",
      descricao: "Tipos de documentos",
      tipo: 3,
    },
    {
      id: 7,
      nome: "setores",
      descricao: "Setores",
      tipo: 3,
    },
    {
      id: 6,
      nome: "email",
      descricao: "E-mail",
      tipo: 3,
    },
    {
      id: 9,
      nome: "log",
      descricao: "Logs",
      tipo: 2,
    },
    {
      id: 10,
      nome: "usuarios",
      descricao: "Usuários",
      tipo: 2,
    },
  ];

  let navigate = useNavigate();
  let { id } = useParams();

  const [dados, setDados] = useState([]);
  const [data, setData] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState([]);
  const [selectedUpload, setSelectedUpload] = useState([]);
  const [selectedEnvio, setSelectedEnvio] = useState([]);
  const [selectedP, setSelectedP] = useState([]);
  const [setores, setSetores] = useState([]);
  const [permissoes, setPermissoes] = useState([]);

  useEffect(() => {
    httpRequest(`setores`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setSetores(res.body);
    });
  }, []);

  useEffect(() => {
    httpRequest(`permissoes`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setPermissoes(res.body);
    });
  }, []);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`usuarios/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        console.log(res.body);
        setDados(res.body);
        reset({
          first_name: res.body.first_name,
          last_name: res.body.last_name,
          email: res.body.email,
        });

        //verificaPermissoes
        if (res.body.Setores.length > 0) {
          httpRequest(`setores`, {
            method: "GET",
            token: getToken(),
          }).then((em) => {
            let obj = em.body;
            obj.map((setor, index) => {
              res.body.Setores.filter(function (item) {
                if (setor.id === item.id) {
                  obj[index].funcao = item.Usuarios_Setores.tipo;
                  obj[index].check = true;
                  obj[index].pdPdf = item.Usuarios_Setores.permissoes
                    ? item.Usuarios_Setores.permissoes.lePDF
                    : false;
                  obj[index].criaEnvio = item.Usuarios_Setores.permissoes
                    ? item.Usuarios_Setores.permissoes.criaEnvio
                    : false;
                  obj[index].uploadDoc = item.Usuarios_Setores.permissoes
                    ? item.Usuarios_Setores.permissoes.uploadDoc
                    : false;
                }
              });
            });
            let arrayAxPDF = [];
            let arrayAxEnvio = [];
            let arrayAxUpload = [];
            for (var i = obj.length - 1; i >= 0; i--) {
              if (obj[i].check === true) {
                if (obj[i].pdPdf) {
                  arrayAxPDF.push(obj[i].id);
                  setValue(`checkbox_d_pdf_${obj[i].id}`, true);
                }
                if (obj[i].criaEnvio) {
                  arrayAxEnvio.push(obj[i].id);
                  setValue(`checkbox_d_envio_${obj[i].id}`, true);
                }
                if (obj[i].uploadDoc) {
                  arrayAxUpload.push(obj[i].id);
                  setValue(`checkbox_d_up_${obj[i].id}`, true);
                }
              }
            }
            setSelectedPdf(arrayAxPDF);
            setSelectedEnvio(arrayAxEnvio);
            setSelectedUpload(arrayAxUpload);
          });
        }

        httpRequest(`permissoes`, {
          method: "GET",
          token: getToken(),
        }).then((em) => {
          let obj = em.body;
          obj.map((setor, index) => {
            res.body.Permissoes.filter(function (item) {
              if (setor.id === item.id) {
                obj[index].check = true;
              }
            });
          });
          let arrayAx = [];
          for (var i = obj.length - 1; i >= 0; i--) {
            if (obj[i].check === true) {
              arrayAx.push(obj[i].id);
              setValue(`checkbox_p_${obj[i].id}`, true);
            }
          }
          setSelectedP(arrayAx);
        });
      });
    }, []);
  }

  const onSubmit = (data) => {
    setData(data);

    if (data.first_name !== "" && data.email !== "") {
      const dadosObj = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
      };

      // let objetoPermissoes = [];
      // setores.map((setor, index) => {
      //   dados.Setores.filter(function (item) {
      //     if (setor.id === item.id) {
      //       objetoPermissoes.push({
      //         id: setor.id,
      //         tipo: item.Usuarios_Setores.tipo,
      //         permissoes: {
      //           lePDF: eval(`data.checkbox_d_pdf_${setor.id}`),
      //           criaEnvio: eval(`data.checkbox_d_envio_${setor.id}`),
      //           uploadDoc: eval(`data.checkbox_d_up_${setor.id}`),
      //         },
      //       });
      //     } else {
      //       objetoPermissoes.push({
      //         id: setor.id,
      //         tipo: "usuario",
      //         permissoes: {
      //           lePDF: eval(`data.checkbox_d_pdf_${setor.id}`),
      //           criaEnvio: eval(`data.checkbox_d_envio_${setor.id}`),
      //           uploadDoc: eval(`data.checkbox_d_up_${setor.id}`),
      //         },
      //       });
      //     }
      //   });
      // });
      let objetoPermissoes = [];
      setores.forEach((setor) => {
        const item = dados.Setores.find((item) => setor.id === item.id);
        objetoPermissoes.push({
          id: setor.id,
          tipo: item ? item.Usuarios_Setores.tipo : "usuario",
          permissoes: {
            lePDF: eval(`data.checkbox_d_pdf_${setor.id}`),
            criaEnvio: eval(`data.checkbox_d_envio_${setor.id}`),
            uploadDoc: eval(`data.checkbox_d_up_${setor.id}`),
          },
        });
      });

      dadosObj.Setores = objetoPermissoes;

      dadosObj.Permissoes = [];
      permissoes.map((permissao) => {
        if (eval(`data.checkbox_p_${permissao.id}`)) {
          dadosObj.Permissoes.push(permissao.id);
        }
      });

      if (id === undefined) {
        httpRequest(`usuarios`, {
          method: "POST",
          body: dadosObj,
          token: getToken(),
        }).then((res) => {
          MySwal.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Cadastro realizada com sucesso.",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
          navigate("/usuarios");
        });
      } else {
        httpRequest(`usuarios/${id}`, {
          method: "PUT",
          body: dadosObj,
          token: getToken(),
        }).then((res) => {
          MySwal.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Cadastro atualizado com sucesso.",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
          navigate("/usuarios");
        });
      }
    }
  };

  function marcaCheckEnvio(valor) {
    let checks = structuredClone(selectedEnvio);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedEnvio(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedEnvio(checks);
      } else {
        checks.push(valor.id);
        setSelectedEnvio(checks);
      }
    }
  }

  function marcaCheckPdf(valor) {
    let checks = structuredClone(selectedPdf);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedPdf(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedPdf(checks);
      } else {
        checks.push(valor.id);
        setSelectedPdf(checks);
      }
    }
  }

  function marcaCheckUpload(valor) {
    let checks = structuredClone(selectedUpload);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedUpload(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedUpload(checks);
      } else {
        checks.push(valor.id);
        setSelectedUpload(checks);
      }
    }
  }

  function marcaCheckP(valor) {
    let checks = structuredClone(selectedP);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedP(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedP(checks);
      } else {
        checks.push(valor.id);
        setSelectedP(checks);
      }
    }
  }

  return (
    <Fragment>
      <Breadcrumbs
        title="Usuários"
        data={[
          { title: "Usuários", link: "/usuarios" },
          { title: "Novo Usuário" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="first_name">
                      Nome
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="first_name"
                      name="first_name"
                      render={({ field }) => (
                        <Input
                          placeholder="Nome"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.first_name === null ||
                                !data.first_name.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="last_name">
                      Segundo Nome
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="last_name"
                      name="last_name"
                      render={({ field }) => (
                        <Input
                          placeholder="Segundo Nome"
                          className={classnames("form-control")}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="email">
                      E-mail
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="email"
                      name="email"
                      render={({ field }) => (
                        <Input
                          type="email"
                          placeholder="E-mail"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.email === null || !data.email.length),
                          })}
                          {...field}
                          readOnly={`${id !== undefined ? "readonly" : ""}`}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="6" md="6" sm="12">
                    <Label className="form-label" for="documentos">
                      Setores
                    </Label>
                    <div className={`${setores.length > 0 ? "d-none" : ""}`}>
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>Nenhum setor disponível</span>
                        </div>
                      </Alert>
                    </div>
                    {setores.map((setor, index) => (
                      <div key={index} className="">
                        <div className="">
                          <div className="bg-dark">
                            <div className="text-white p-1 mt-2">
                              {setor.setor}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="demo-inline-spacing">
                              <div className="form-check form-check-inline">
                                <input
                                  {...register(`checkbox_d_envio_${setor.id}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_d_envio_${setor.id}`}
                                  checked={
                                    selectedEnvio.includes(setor.id)
                                      ? true
                                      : false
                                  }
                                  onChange={() => {
                                    marcaCheckEnvio(setor);
                                  }}
                                />
                                <Label
                                  for={`checkbox_d_envio_${setor.id}`}
                                  className="form-check-label"
                                >
                                  Criar envio
                                </Label>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="demo-inline-spacing">
                              <div className="form-check form-check-inline">
                                <input
                                  {...register(`checkbox_d_up_${setor.id}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_d_up_${setor.id}`}
                                  checked={
                                    selectedUpload.includes(setor.id)
                                      ? true
                                      : false
                                  }
                                  onChange={() => {
                                    marcaCheckUpload(setor);
                                  }}
                                />
                                <Label
                                  for={`checkbox_d_up_${setor.id}`}
                                  className="form-check-label"
                                >
                                  Upload
                                </Label>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="demo-inline-spacing">
                              <div className="form-check form-check-inline">
                                <input
                                  {...register(`checkbox_d_pdf_${setor.id}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_d_pdf_${setor.id}`}
                                  checked={
                                    selectedPdf.includes(setor.id)
                                      ? true
                                      : false
                                  }
                                  onChange={() => {
                                    marcaCheckPdf(setor);
                                  }}
                                />
                                <Label
                                  for={`checkbox_d_pdf_${setor.id}`}
                                  className="form-check-label"
                                >
                                  Ver PDF
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col xl="6" md="6" sm="12">
                    <Label className="form-label" for="permissoes">
                      Permissões
                    </Label>
                    <div
                      className={`${
                        permissoesLista.length > 0 ? "d-none" : ""
                      }`}
                    >
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>Nenhum permissão disponível</span>
                        </div>
                      </Alert>
                    </div>
                    {permissoesLista.map((permissao, index) => (
                      <div key={index} className="demo-inline-spacing">
                        <div className="form-check form-check-inline">
                          <input
                            {...register(`checkbox_p_${permissao.id}`)}
                            className="form-check-input"
                            type="checkbox"
                            id={`checkbox_p_${permissao.id}`}
                            checked={
                              selectedP.includes(permissao.id) ? true : false
                            }
                            onChange={() => {
                              marcaCheckP(permissao);
                            }}
                          />

                          <Label
                            for={`checkbox_p_${permissao.id}`}
                            className="form-check-label"
                          >
                            {permissao.tipo === 3 ? "- " : ""}
                            {permissao.descricao}
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
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UsuariosForm;
