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
import { limpaValores, formataCNPJ } from "../../../services/Funcoes";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const EmpresasForm = () => {
  isAzure();

  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [dados, setDados] = useState(null);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`empresas/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          razao_social: res.body.razao_social,
          nome_fantasia: res.body.nome_fantasia,
          cnpj: formataCNPJ(res.body.cnpj),
        });
      });
    }, []);
  }

  const onSubmit = (data) => {
    setData(data);
    if (
      data.razao_social !== "" &&
      data.nome_fantasia !== "" &&
      data.cnpj !== "" &&
      data.cnpj.length === 18
    ) {
      const dados = {
        razao_social: data.razao_social,
        nome_fantasia: data.nome_fantasia,
        cnpj: limpaValores(data.cnpj),
      };
      if (id === undefined) {
        httpRequest(`empresas`, {
          method: "POST",
          body: dados,
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
          navigate("/empresas");
        });
      }else{
        httpRequest(`empresas/${id}`, {
          method: "PUT",
          body: dados,
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
          navigate("/empresas");
        });
      }
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="Empresas"
        data={[
          { title: "Empresas", link: "/empresas" },
          { title: "Nova Empresa" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="razao_social">
                      Razão Social
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="razao_social"
                      name="razao_social"
                      render={({ field }) => (
                        <Input
                          placeholder="Razão Social"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.razao_social === null ||
                                !data.razao_social.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="nome_fantasia">
                      Nome Fantasia
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="nome_fantasia"
                      name="nome_fantasia"
                      render={({ field }) => (
                        <Input
                          placeholder="Nome Fantasia"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.nome_fantasia === null ||
                                !data.nome_fantasia.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="cnpj">
                      CNPJ
                    </Label>
                    <Controller
                      defaultValue=""
                      id="cnpj"
                      name="cnpj"
                      control={control}
                      render={({ field }) => (
                        <Cleave
                          {...field}
                          placeholder="00.000.000/0000-00"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.cnpj === null ||
                                !data.cnpj.length ||
                                data.cnpj.length < 18),
                          })}
                          options={{
                            delimiters: [".", ".", "/", "-"],
                            blocks: [2, 3, 3, 4, 2],
                            delimiterLazyShow: true,
                            numericOnly: true,
                            numeralThousandsGroupStyle: "thousand",
                          }}
                        />
                      )}
                    />
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

export default EmpresasForm;
