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

import Breadcrumbs from "@components/breadcrumbs";
import { useForm, Controller } from "react-hook-form";

//components
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const UsuariosPermissoes = () => {
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

  const [dados, setDados] = useState([]);
  const [data, setData] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState([]);
  const [selectedUpload, setSelectedUpload] = useState([]);
  const [selectedEnvio, setSelectedEnvio] = useState([]);
  const [selectedVer, setSelectedVer] = useState([]);
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

  function marcaCheckVer(valor) {
    let checks = structuredClone(selectedVer);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedVer(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedVer(checks);
      } else {
        checks.push(valor.id);
        setSelectedVer(checks);
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

  const onSubmit = (data) => {
    setData(data);
    console.log(data);
  }

  return (
    <Fragment>
      <Breadcrumbs
        title="Usuários"
        data={[
          { title: "Usuários", link: "/usuarios" },
          { title: "Permissões" },
        ]}
      />

      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>

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
                                  {...register(`checkbox_d_ver_${setor.id}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_d_ver_${setor.id}`}
                                  onChange={() => {
                                    marcaCheckVer(setor);
                                  }}
                                />
                                <Label
                                  for={`checkbox_d_ver_${setor.id}`}
                                  className="form-check-label"
                                >
                                  Ver envio
                                </Label>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="demo-inline-spacing">
                              <div className="form-check form-check-inline">
                                <input
                                  {...register(`checkbox_d_envio_${setor.id}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_d_envio_${setor.id}`}
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

export default UsuariosPermissoes;
