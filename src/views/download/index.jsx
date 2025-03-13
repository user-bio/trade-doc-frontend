import React, { Fragment, useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

import { httpRequest, BASE_URL } from "../../services/Api";

import logo from "../../assets/images/logo/logo.png";
import { getToken } from "../../services/Auth";

const Download = () => {

  const [funcionarios, setFuncionarios] = useState(null);
  const [empresas, setEmpresas] = useState(null);
  const [erro, setErro] = useState(null);

  let { id } = useParams();
  let { email } = useParams();

  useEffect(() => {
    httpRequest(`logs/politicas/${id}/${email}`, {
      method: "GET",
      token: getToken(),
    })
      .then((res) => {
        if (res.body === "") {
          MySwal.fire({
            title: "Política de Confidencialidade",
            html: "<p class='text-start'>Este acesso, incluindo os seus anexos, é dirigido exclusivamente ao destinatário, com propósito específico, e, pode conter dados pessoais, informações confidenciais e legalmente protegidas. Se você não for destinatário deste acesso, desde já fica notificado de abster-se a divulgar, copiar, distribuir, examinar ou, de qualquer forma, utilizar a informação contida nesta mensagem, por ser ilegal e não ter autorização para tais atos. Se você a recebeu por engano, avise imediatamente o remetente e apague-a. Caso seja o destinatário, ressaltamos que as informações ou dados pessoais aqui transacionados devem ser tratados com respeito à privacidade e fundamentos previstos na Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD) e demais legislações aplicáveis.<br /><br />Neste acesso, declaro ciência e concordância as condições do termo de confidencialidade do site, <a href='https://app-bioseta.azurewebsites.net/api/v1/file/politicas-de-privacidade' target='_blank'>saiba mais.</a></p>",
            icon: "warning",
            showCancelButton: false,
            confirmButtonText: "Sim, entendido!",
            cancelButtonText: "Cancelar",
            customClass: {
              confirmButton: "btn btn-primary",
              cancelButton: "btn btn-danger ms-1",
            },
            buttonsStyling: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
              httpRequest(`logs/politicas`, {
                method: "POST",
                body: {
                  envio_execucao_id: id,
                  envio_execucao_email: email,
                },
                token: getToken(),
              });
            }
          });
        }
      })
      .catch((e) => {
        MySwal.fire({
          title: "Política de Confidencialidade",
          html: "<p class='text-start'>Você está acessando de forma inválida!</p>",
          icon: "warning",
          showCancelButton: false,
          buttonsStyling: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false,
        });
      });
  }, []);

  useEffect(() => {
    httpRequest(`envios/arquivos/${id}`, {
      method: "GET",
    })
      .then((res) => {
        setFuncionarios(res.body.funcionarios);
        setEmpresas(res.body.empresa);
      })
      .catch((error) => {
        setErro(error.response.data);
      });
  }, []);

  return (
    <div className="auth-wrapper auth-cover">
      <div className="container">
        <Fragment>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col className={`mb-1`} xl="12" md="12" sm="12">
                      <div className="pt-2">
                        <CardTitle
                          tag="h1"
                          className="fw-bold mb-1 text-center"
                        >
                          <img className="me-1" src={logo} width="40" />
                          Trade DOC
                        </CardTitle>
                      </div>
                      <div>
                        <div className={`pt-5 ${erro != null ? "" : "d-none"}`}>
                          <CardTitle className="text-center" tag="h2">
                            Link expirado! <br />
                            Solicite um novo envio.
                          </CardTitle>
                        </div>
                        <div
                          className={`pt-5 ${
                            funcionarios != null ? "" : "d-none"
                          }`}
                        >
                          <h3 className="mb-2 mt-2 text-center">
                            Documentos funcionários
                          </h3>
                          <div className="AjusteTabela">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th width="33%">Nome</th>
                                  <th width="33%">Tipo de documentos</th>
                                  <th width="33%" className="text-end"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {funcionarios !== null
                                  ? funcionarios.map((result, index) => (
                                      <tr key={index}>
                                        <td>{result.nome}</td>
                                        <td>
                                          {result.Documentos.map(
                                            (doc, position) => (
                                              <div className="w-100">
                                                <div
                                                  key={position}
                                                  className="btn"
                                                >
                                                  {doc.Documentos_Tipo.nome}
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </td>
                                        <td className="text-end">
                                          {result.Documentos.map(
                                            (doc, position) => (
                                              <div className="my-1 w-100">
                                                <a
                                                  className="btn btn-primary"
                                                  href={`${BASE_URL}envios/arquivos/${id}/${doc.arquivo}`}
                                                  key={position}
                                                  target="_blank"
                                                >
                                                  Baixar
                                                </a>
                                              </div>
                                            )
                                          )}
                                        </td>
                                      </tr>
                                    ))
                                  : ""}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className={`pt-5 ${empresas != null ? "" : "d-none"}`}
                        >
                          <h3 className="mb-2 mt-2 text-center">
                            Documentos empresa
                          </h3>
                          <div className="AjusteTabela">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th width="33%">Empresa</th>
                                  <th width="33%">Tipo de documentos</th>
                                  <th width="33%" className="text-end"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {empresas !== null
                                      ? empresas.razao_social
                                      : ""}
                                  </td>
                                  <td>
                                    {empresas !== null
                                      ? empresas.Documentos.map(
                                          (doc, position) => (
                                            <div className="w-100">
                                              <div
                                                key={position}
                                                className="btn w-100 text-start"
                                              >
                                                {doc.Documentos_Tipo.nome}
                                              </div>
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </td>
                                  <td className="text-end">
                                    {empresas !== null
                                      ? empresas.Documentos.map(
                                          (doc, position) => (
                                            <div className="my-1 w-100">
                                              <a
                                                className="btn btn-primary"
                                                href={`${BASE_URL}envios/arquivos/${id}/${doc.arquivo}`}
                                                key={position}
                                                target="_blank"
                                              >
                                                Baixar
                                              </a>
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </td>
                                </tr>
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
      </div>
    </div>
  );
};

export default Download;
