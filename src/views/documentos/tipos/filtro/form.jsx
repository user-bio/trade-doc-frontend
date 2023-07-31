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

// ** Custom Components
import Select from "react-select";
import { selectThemeColors } from "@utils";
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

// ** Custom Components

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";

//components
import isAzure from "../../../../components/isAzure";
import { getToken } from "../../../../services/Auth";
import { httpRequest } from "../../../../services/Api";
import { dataPTBR } from "../../../../services/Funcoes";

const FiltroForm = () => {
  isAzure();

  const defaultValues = {
    empresa: null,
    funcionario: null,
    vencimento: [],
    competenciadata: [],
  };

  const {
    reset,
    control,
    setError,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

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

  const [data, setData] = useState(null);
  const [dados, setDados] = useState(null);
  const [retorno, setRetorno] = useState([]);
  const [selectEmpresas, setselectEmpresas] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedcomp, setSelectedcomp] = useState(false);

  let navigate = useNavigate();
  let { id } = useParams();

  // useEffect(() => {
  //   httpRequest(`empresas`, {
  //     method: "GET",
  //     token: getToken(),
  //   }).then((res) => {
  //     const objEmpresas = [];
  //     res.body.map((tipo) => {
  //       objEmpresas.push({
  //         value: tipo.id,
  //         label: tipo.nome_fantasia,
  //       });
  //     });
  //     setselectEmpresas(objEmpresas);
  //   });
  // }, []);

  // const onSubmit = (data) => {
  //   setData(data);
  //   let url;
  //   if (data.empresa === undefined) {
  //     url = `documentos?tipo_id=${id}`;
  //   } else {
  //     url = `documentos?tipo_id=${id}&empresa_id=${data.empresa.value}`;
  //     setDados(data.empresa.value);
  //     httpRequest(`${url}`, {
  //       method: "GET",
  //       token: getToken(),
  //     }).then((res) => {
  //       setRetorno(res.body);
  //     });
  //   }
  // };

  // function marcaCheck(e) {
  //   if (e.target.checked) {
  //     setSelected(e.target.checked);
  //   } else {
  //     setSelected(e.target.checked);
  //   }
  // }

  // function marcaCheckComp(e) {
  //   if (e.target.checked) {
  //     setSelectedcomp(e.target.checked);
  //   } else {
  //     setSelectedcomp(e.target.checked);
  //   }
  // }

  // const onSubmit2 = (data) => {
  //   setData(data);

  //   if (!data.item.isArray) {
  //     httpRequest(`documentos/merge`, {
  //       method: "POST",
  //       body: {
  //         documentos_tipo_id: id,
  //         empresa_id: dados,
  //         funcionario_id: data.item,
  //         semvalidade: data.semvalidade,
  //         dias_aviso: data.dias,
  //         validade: data.vencimento.length > 0 ? data.vencimento[0] : null,
  //         semcompetencia: data.semcompetencia,
  //         competenciadata:
  //           data.competenciadata.length > 0 ? data.competenciadata[0] : null,
  //       },
  //       token: getToken(),
  //     }).then((res) => {
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Sucesso!",
  //         html: `${res.body.sucesso.length} documento(s) gerado com sucesso. <br> ${res.body.erro.length} documento(s) não foram gerados.`,
  //         customClass: {
  //           confirmButton: "btn btn-success",
  //         },
  //       });
  //     });
  //   } else {
  //     for (let value of data.item) {
  //       httpRequest(`documentos/merge`, {
  //         method: "POST",
  //         body: {
  //           documentos_tipo_id: id,
  //           empresa_id: dados,
  //           funcionario_id: value,
  //           semvalidade: data.semvalidade,
  //           dias_aviso: data.dias,
  //           validade: data.vencimento.length > 0 ? data.vencimento[0] : null,
  //           semcompetencia: data.semcompetencia,
  //           competenciadata:
  //             data.competenciadata.length > 0 ? data.competenciadata[0] : null,
  //         },
  //         token: getToken(),
  //       }).then((res) => {
  //         MySwal.fire({
  //           icon: "success",
  //           title: "Sucesso!",
  //           html: `${res.body.sucesso.length} documento(s) gerado com sucesso. <br> ${res.body.erro.length} documento(s) não foram gerados.`,
  //           customClass: {
  //             confirmButton: "btn btn-success",
  //           },
  //         });
  //       });
  //     }
  //   }
  //   navigate(`/documentos`);
  // };

  return (
    <Fragment>
      <Breadcrumbs
        title="Documentos"
        data={[
          { title: "Documentos", link: "/documentos" },
          { title: "Tipos" },
          { title: "Filtro" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
             
              <div>
                <div>
                  <div>
                    <h3 className="mb-2 mt-2">Resultado</h3>
                    {/* <form
                      className="AjusteTabela"
                      onSubmit={handleSubmit(onSubmit2)}
                    > */}
                      <table className="table">
                        <thead>
                          <tr>
                            <th width="10%"></th>
                            <th width="10%">ID</th>
                            <th width="15%">EMPRESA</th>
                            <th width="15%">FUNCIONÁRIO</th>
                            <th width="15%">DATA CRIAÇÃO</th>
                            <th width="15%">DATA GERAÇÃO</th>
                            <th width="15%">VALIDADE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {retorno.map((rer, index) => (
                            <tr key={index}>
                              <th scope="row">
                                <input
                                  type="checkbox"
                                  {...register("item[]", {})}
                                  className="mx-3"
                                  defaultValue={rer.Funcionario.id}
                                />
                              </th>
                              <th scope="row">{rer.id}</th>
                              <td>{rer.Empresa.nome_fantasia}</td>
                              <td>{rer.Funcionario.nome}</td>
                              <td>{dataPTBR(rer.createdAt)}</td>
                              <td>{dataPTBR(rer.updatedAt)}</td>
                              <td>
                                {rer.validade !== null
                                  ? dataPTBR(rer.validade)
                                  : ""}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className=" text-end w-100">
                        <Button type="submit" color="primary">
                          Gerar unificado
                        </Button>
                      </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default FiltroForm;
