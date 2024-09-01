import React, { Fragment, useState, useEffect } from "react";
import { Eye } from "react-feather";
import {
  Card,
  CardBody,
  Form,
  Label,
  Alert,
  Row,
  Col,
  Button,
  Badge,
} from "reactstrap";
import Highlight from "react-highlight";

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
import { dataPTBR } from "../../../services/Funcoes";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const EnviosDetalhe = () => {
  isAzure();

  const {
    reset,
    control,
    setError,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [detalhe, setDetalhe] = useState([]);
  const [empresa, setEmpresa] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [permissao, setPermissao] = useState(null);
  const [vencidosEmpresa, setVencidosEmpresa] = useState([]);
  const [venvidosFuncionarios, setVenvidosFuncionarios] = useState([]);
  const [tiposVazio, setTiposVazio] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let object = JSON.parse(atob(getToken().split(".")[1]));

    let conditions = ["aprova-envio", "admin"];
    if (conditions.some((i) => object.permissoes.includes(i))) {
      setPermissao(true);
    } else {
      setPermissao(false);
    }
  }, []);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`envios/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        const dadosTratados = res.body.dados;
       
        Promise.all(
          dadosTratados.Envio_Execucaos.map(async (item) => {
            try {
              const res = await httpRequest(`logs/politicas/${item.id}`, {
                method: "GET",
                token: getToken(),
              });
              item.logs_politicas = res.body; // Assumindo que a resposta relevante está em res.body
            } catch (error) {
              console.error('Erro ao buscar logs politicas:', error);
              item.logs_politicas = []; // Adiciona uma chave vazia em caso de erro
            }
            return item;
          })
        ).then(updatedItems => {
          dadosTratados.Envio_Execucaos = updatedItems;
          setData(dadosTratados);
          setDetalhe(dadosTratados);
          setEmpresa(dadosTratados.Empresa);
          setCliente(dadosTratados.Cliente);
          setTiposVazio(dadosTratados.tiposVazios);
        }).catch(error => {
          console.error('Erro ao processar Envio_Execucaos:', error);
        });
      }).catch(error => {
        console.error('Erro ao buscar envios:', error);
      });
    }, []);
  }

  const aprovaEnvio = () => {
    return MySwal.fire({
      title: "Deseja aprovar o envio?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, aprovar!",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ms-1",
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        httpRequest(`envios/aprovacao/${id}`, {
          method: "POST",
          token: getToken(),
        }).then(() => {
          MySwal.fire({
            icon: "success",
            title: "Aprovado!",
            text: "Envio aprovado com sucesso.",
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            window.location.reload(false);
          });
        });
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.close();
      }
    });
  };

  const reprovarEnvio = () => {
    return MySwal.fire({
      title: "Deseja reprovar o envio?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, reprovar!",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ms-1",
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        httpRequest(`envios/reprovar/${id}`, {
          method: "POST",
          token: getToken(),
        }).then(() => {
          MySwal.fire({
            icon: "success",
            title: "Reprovado!",
            text: "Envio reprovado com sucesso.",
            customClass: {
              confirmButton: "btn btn-success",
            },
          }).then(() => {
            window.location.reload(false);
          });
        });
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.close();
      }
    });
  };

  useEffect(() => {
    if (empresa.length > 0) {
      let filterObj = empresa.Documentos.filter(function (val) {
        return val.status === "vencido";
      });
      setVencidosEmpresa(filterObj);
    }
  }, [empresa]);

  useEffect(() => {
    if (detalhe.Funcionarios != undefined) {
      let obj = [];
      let filterObj = {};
      detalhe.Funcionarios.map((func) => {
        filterObj = func.Documentos.filter(function (val) {
          return val.status === "vencido";
        });
        obj.push(filterObj);
      });
      setVenvidosFuncionarios(filterObj);
    }
  }, [detalhe]);

  useEffect(() => {
    httpRequest(`logs/envios/${id}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      console.log("Logs envio");
      console.log(res.body);
      setLogs(res.body);
    });
  }, []);

  function buscarObjetoPorId(idDesejado) {
    for (let i = 0; i < logs.length; i++) {
      if (logs[i].id === idDesejado) {
        return logs[i];
      }
    }
    return null; // retorna null caso nenhum objeto com o ID desejado seja encontrado
  }

  function abreLog(valor) {
    const objetoEncontrado = buscarObjetoPorId(valor);
    MySwal.fire({
      title: "Detalhe",
      html: `
      <pre><code class="bg-dark language-name-of-snippet">${objetoEncontrado.objeto}</code></pre>
      `,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Fechar",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ms-1",
      },
      buttonsStyling: false,
    });
  }

  return (
    <Fragment>
      <Breadcrumbs
        title="Envios"
        data={[{ title: "Envios", link: "/envios" }, { title: "Detalhe" }]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Row>
                <Col className={`mb-1`} xl="12" md="12" sm="12">
                  <div>
                    <div>
                      <Badge
                        color="success"
                        pill
                        className={`${
                          detalhe.aprovacao == "aprovada" ||
                          detalhe.aprovacao == "instantaneo"
                            ? ""
                            : "d-none"
                        }`}
                      >
                        Aprovado
                      </Badge>
                      <Badge
                        color="danger"
                        pill
                        className={`${
                          detalhe.aprovacao == "pendente" ? "" : "d-none"
                        }`}
                      >
                        Pendente
                      </Badge>
                      <Badge
                        color="danger"
                        pill
                        className={`${
                          detalhe.aprovacao == "reprovada" ? "" : "d-none"
                        }`}
                      >
                        Reprovado
                      </Badge>
                    </div>
                    {detalhe.aprovacao == "pendente" ||
                    detalhe.aprovacao == "reprovada" ? (
                      <div>
                        <h3 className="mb-2 mt-2">Informações de pendência</h3>
                        <div
                          className={`mb-2 ${
                            data !== null && data.emailNegados.length > 0
                              ? ""
                              : "d-none"
                          }`}
                        >
                          <label>
                            <b>Lista de contatos não autorizados:</b>
                          </label>
                          {data !== null
                            ? data.emailNegados.map((result, index) => (
                                <div key={index}>{result}</div>
                              ))
                            : ""}
                        </div>

                        <div
                          className={`mb-2 ${
                            vencidosEmpresa.length > 0 ? "" : "d-none"
                          }`}
                        >
                          <label>
                            <b>Documentos vencidos da empresa:</b>
                          </label>
                          {vencidosEmpresa.length > 0
                            ? vencidosEmpresa.map((result, index) => (
                                <div key={index}>
                                  - {result.Documentos_Tipo.nome}
                                </div>
                              ))
                            : ""}
                        </div>

                        <div
                          className={`mb-2 ${
                            venvidosFuncionarios.length > 0 ? "" : "d-none"
                          }`}
                        >
                          <label>
                            <b>Documentos vencidos de funcionário:</b>
                          </label>
                          {venvidosFuncionarios.length > 0
                            ? venvidosFuncionarios.map((result, index) => (
                                <div key={index}>
                                  Código do funcionário: {result.funcionario_id}{" "}
                                  - {result.Documentos_Tipo.nome}
                                </div>
                              ))
                            : ""}
                        </div>

                        <div
                          className={`mb-2 ${
                            tiposVazio.length > 0 ? "" : "d-none"
                          }`}
                        >
                          <label>
                            <b>
                              Documentos não encontrados em pelo menos um
                              cadastro:
                            </b>
                          </label>
                          {tiposVazio.length > 0
                            ? tiposVazio.map((result, index) => (
                                <div key={index}>- {result.nome}</div>
                              ))
                            : ""}
                        </div>

                        {permissao ? (
                          <>
                            <div className="row">
                              <div className="col-lg-3">
                                <Label className="form-label">
                                  Aprovar envio
                                </Label>
                                <div>
                                  <Button
                                    color="outline-primary"
                                    onClick={aprovaEnvio}
                                  >
                                    Aprovar
                                  </Button>
                                </div>
                              </div>
                              <div
                                className={`col-lg-3 ${
                                  detalhe.aprovacao == "reprovada"
                                    ? "d-none"
                                    : ""
                                }`}
                              >
                                <Label className="form-label">
                                  Reprovar envio
                                </Label>
                                <div>
                                  <Button
                                    color="outline-danger"
                                    onClick={reprovarEnvio}
                                  >
                                    Reprovar
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        )}

                        <hr />
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      <h3 className="mb-2 mt-2">Detalhe do envio</h3>
                      <div className="mb-2">
                        <label>
                          <b>Tipo envio:</b> {detalhe.tipo}
                          {detalhe.tipo === "recorrente" &&
                            detalhe.data_final_envio !== null && (
                              <>
                                <br />
                                <b>Data final:</b>{" "}
                                {dataPTBR(detalhe.data_final_envio)}
                              </>
                            )}
                        </label>
                      </div>
                      <div className="mb-2">
                        <label>
                          <b>Envio de arquivos:</b>{" "}
                          {cliente.anexo ? "Anexo" : "Link"}
                        </label>
                      </div>
                      <div
                        className={`mb-2 ${
                          detalhe.tipo != "recorrente" ? "d-none" : ""
                        }`}
                      >
                        <label>
                          <b>Dia de envio:</b> {detalhe.dia}
                        </label>
                      </div>
                      <div
                        className={`mb-2 ${
                          detalhe.tipo != "agendado" ? "d-none" : ""
                        }`}
                      >
                        <label>
                          <b>Data de envio:</b> {detalhe.data}
                        </label>
                      </div>
                      <div className="mb-2">
                        <label>
                          <b>Cliente:</b> {cliente.nome_fantasia}
                        </label>
                      </div>
                      <div className="mb-2">
                        <label>
                          <b>Lista de contatos:</b>
                        </label>
                        {data !== null
                          ? data.Contatos.map((result, index) => (
                              <div key={index}>{result.email}</div>
                            ))
                          : ""}
                      </div>
                      <div className="mb-2">
                        <label>
                          <b>Lista de tipos de documento:</b>
                        </label>
                        {data !== null
                          ? data.Documentos_Tipos.map((result, index) => (
                              <div key={index}>{result.nome}</div>
                            ))
                          : ""}
                      </div>
                      <div className="mb-2">
                        <label>
                          <b>Empresa:</b> {empresa.nome_fantasia}
                          <Alert color="primary">
                            <div className="alert-body">
                              {/* <span>
                                <b>
                                  ID: {result.id} - {result.nome}
                                </b>
                              </span> */}
                              <div>Lista de documentos:</div>
                              {empresa.length !== 0
                                ? empresa.Documentos.map((doc, posi) => (
                                    <div key={posi}>
                                      <i>
                                        - {doc.Documentos_Tipo.nome} (
                                        {doc.status === "vencido" ? (
                                          <span className="text-danger">
                                            {doc.status}
                                          </span>
                                        ) : (
                                          <span className="text-success">
                                            {doc.status}
                                          </span>
                                        )}
                                        )
                                      </i>
                                    </div>
                                  ))
                                : ""}
                            </div>
                          </Alert>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label>
                          <b>Lista de funcionários:</b>
                        </label>
                        {data !== null
                          ? data.Funcionarios.map((result, index) => (
                              <div key={index}>
                                <Alert color="primary">
                                  <div className="alert-body">
                                    <span>
                                      <b>
                                        ID: {result.id} - {result.nome}
                                      </b>
                                    </span>
                                    <div>Lista de documentos:</div>
                                    {data !== null
                                      ? result.Documentos.map((doc, posi) => (
                                          <div>
                                            <i>
                                              - {doc.Documentos_Tipo.nome} (
                                              {doc.status === "vencido" ? (
                                                <span className="text-danger">
                                                  {doc.status}
                                                </span>
                                              ) : (
                                                <span className="text-success">
                                                  {doc.status}
                                                </span>
                                              )}
                                              )
                                            </i>
                                          </div>
                                        ))
                                      : ""}
                                  </div>
                                </Alert>
                              </div>
                            ))
                          : ""}
                      </div>
                      <h3 className="mb-2 mt-2">Relatório de envios</h3>
                      <div className="AjusteTabela">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width="20%">Data envio</th>
                              <th width="20%">Lista E-mails</th>
                              <th width="20%">Assinatura de logs</th>
                              <th width="20%" className="text-end">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data !== null
                              ? data.Envio_Execucaos.map((result, index) => (
                                  <tr key={index}>
                                    <td>{dataPTBR(result.createdAt)}</td>
                                    <td>
                                      {result.Envio_Execucao_Vistos &&
                                        Array.isArray(
                                          result.Envio_Execucao_Vistos
                                        ) &&
                                        result.Envio_Execucao_Vistos.map(
                                          (info, position) => (
                                            <div key={position}>
                                              {info.Contato &&
                                                info.Contato.email}
                                            </div>
                                          )
                                        )}
                                    </td>
                                    <td>
                                    {result.logs_politicas &&
                                        result.logs_politicas.map(
                                          (info, position) => (
                                            <div key={position}>
                                              <a href={`https://app-bioseta.azurewebsites.net/api/v1/log/${info.arquivo}`} target="_blank">
                                                Log: {info.Contato.nome}
                                              </a>
                                            </div>
                                          )
                                        )}
                                    </td>
                                    <td className="text-end">
                                      <span
                                        className={`badge  ${
                                          result.Envio_Execucao_Vistos.length >
                                          0
                                            ? "bg-success"
                                            : "bg-danger"
                                        }`}
                                      >
                                        {result.Envio_Execucao_Vistos.length > 0
                                          ? "Visualizado"
                                          : "Não Visualizado"}
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              : ""}
                          </tbody>
                        </table>
                      </div>
                      <h3 className="mb-2 mt-3">Logs de envios</h3>
                      <div className="AjusteTabela">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width="45%">Usuário</th>
                              <th width="25%">Ação</th>
                              <th width="25%">Data</th>
                              <th width="15%">Detalhe</th>
                            </tr>
                          </thead>
                          <tbody>
                            {logs.map((item, key) => (
                              <tr key={key}>
                                <td>
                                  {item.Usuario.first_name}{" "}
                                  {item.Usuario.last_name} -{" "}
                                  {item.Usuario.email}
                                </td>
                                <td>{item.tipo}</td>
                                <td>{dataPTBR(item.data)}</td>
                                <td>
                                  <Button
                                    color="primary"
                                    onClick={() => abreLog(item.id)}
                                  >
                                    <Eye size={15} />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default EnviosDetalhe;
