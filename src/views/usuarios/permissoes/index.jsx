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
import Tooltip from "../../../components/Tooltip";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UsuariosPermissoes = () => {
  isAzure();
  
  const MySwal = withReactContent(Swal);

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
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUsr, setSelectedUsr] = useState([]);

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

  useEffect(() => {
    httpRequest(`usuarios`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      let dadosLogado = JSON.parse(atob(getToken().split(".")[1]));

      const result = res.body.filter((usuario) => usuario.id != dadosLogado.id);
      setUsuarios(result);
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

  function marcaCheckUsr(valor) {
    let checks = structuredClone(selectedUsr);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelectedUsr(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelectedUsr(checks);
      } else {
        checks.push(valor.id);
        setSelectedUsr(checks);
      }
    }
  }

  const onSubmit = (data) => {
    setData(data);

    
    const dadosObj = {};

    let objetoPermissoes = [];
      setores.forEach((setor) => { 
        const item = dados.Setores ? dados.Setores.find((item) => setor.id === item.id) : false;

        objetoPermissoes.push({
          id: setor.id,
          tipo: item ? item.Usuarios_Setores.tipo : "usuario",
          permissoes: {
            ver: eval(`data.checkbox_d_ver_${setor.id}`),
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

      dadosObj.Usuarios = [];
      usuarios.map((usuario) => {
        if (eval(`data.checkbox_usr_${usuario.id}`)) {
          dadosObj.Usuarios.push(usuario.id);
        }
      });

      httpRequest(`usuarios/permissoes`, {
        method: "PUT",
        body: dadosObj,
        token: getToken(),
      }).then((res) => {
        MySwal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Atualização de permissões realizada com sucesso.",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
        // navigate("/usuarios");
      });
  };

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
                  <Col xl="8" md="8" sm="12">
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
                        </div><div className="row">
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
                                  <div className="d-flex">
                                    <span className="pe-1 font-12">Criar envio</span>
                                    <Tooltip
                                      id={"criar-envio-"+setor.id+index}
                                      tooltipText="Permite a criação de novos envios na TELA DE ENVIOS"
                                      placement="top"
                                    />
                                  </div>
                                </Label>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="demo-inline-spacing">
                              <div className="form-check form-check-inline">
                                <input
                                  {...register(`checkbox_d_ver_${setor.id}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_d_ver_${setor.id}`}
                                  checked={
                                    selectedVer.includes(setor.id)
                                      ? true
                                      : false
                                  }
                                  onChange={() => {
                                    marcaCheckVer(setor);
                                  }}
                                />
                                <Label
                                  for={`checkbox_d_ver_${setor.id}`}
                                  className="form-check-label"
                                >
                                  <div className="d-flex">
                                    <span className="pe-1 font-12">Ver lista docs</span>
                                    <Tooltip
                                      id={"envio-"+setor.id+index}
                                      tooltipText="Permite a visualização da TELA DE DOCUMENTOS"
                                      placement="top"
                                    />
                                  </div>
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
                                  <div className="d-flex">
                                    <span className="pe-1 font-12">Upload</span>
                                    <Tooltip
                                      id={"upload-"+setor.id+index}
                                      tooltipText="Permite o upload/atualização de documentos na TELA DE DOCUMENTOS"
                                      placement="top"
                                    />
                                  </div>
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
                                  <div className="d-flex">
                                    <span className="pe-1 font-12">Ver PDF</span>
                                    <Tooltip
                                      id={"pdf-"+setor.id+index}
                                      tooltipText="Permite a visualização do documento que está no sistema, através da TELA DE DOCUMENTOS"
                                      placement="top"
                                    />
                                  </div>
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col xl="4" md="4" sm="12">
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

                <Row className="pt-4">
                  <Col xl="12">
                    <Label className="form-label" for="documentos">
                      Usuários
                    </Label>
                  </Col>
                  {usuarios.map((usuario, index) => (
                    <Col key={index} xl="6" md="6" sm="12">
                      <div className="demo-inline-spacing">
                        <div className="form-check form-check-inline">
                          <input
                            {...register(`checkbox_usr_${usuario.id}`)}
                            className="form-check-input"
                            type="checkbox"
                            id={`checkbox_usr_${usuario.id}`}
                            onChange={() => {
                              marcaCheckUsr(usuario);
                            }}
                          />
                          <Label for={`checkbox_usr_${usuario.id}`} className="form-check-label">
                            {usuario.first_name} - {usuario.email}
                          </Label>
                        </div>
                      </div>
                    </Col>
                  ))}
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
