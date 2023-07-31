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
import isAzure from "../../../../components/isAzure";
import { getToken } from "../../../../services/Auth";
import { httpRequest } from "../../../../services/Api";

const DocumentosTipoForm = () => {
  isAzure();

  const statusOPT = [
    { value: "1", label: "Ativo" },
    { value: "0", label: "Inativo" },
  ];

  const tiposOPT = [
    { value: "normal", label: "Normal" },
    { value: "merge", label: "Unificado" },
  ];

  const defaultValues = {
    status: statusOPT[0],
    tipo: tiposOPT[0],
    setor: null
  };

  const {
    reset,
    control,
    setError,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [setorOPT, setSetorOPT] = useState([]);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`documentos/tipos/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        setValue("nome", res.body.nome);
        setValue("instrucoes", res.body.instrucoes);
        setValue("tipo", res.body.tipo === "normal" ? tiposOPT[0] : tiposOPT[1]);
        setValue("status", res.body.status ? statusOPT[0] : statusOPT[1]);
        if (res.body.setor_id) {
          setValue("setor", {
            value: res.body.Setore.id,
            label: res.body.Setore.setor,
          });
        }
      });
    }, []);
  }

  useEffect(() => {
    httpRequest(`setores`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objSetores = [];
      res.body.map((tipo) => {
        objSetores.push({
          value: tipo.id,
          label: tipo.setor,
        });
      });
      setSetorOPT(objSetores);
    });
  }, []);

  const onSubmit = (data) => {
    setData(data);
    if (
      data.nome !== "" &&
      data.status.value !== "" &&
      data.tipo.value !== "" &&
      data.setor.value !== ""
    ) {
      const dados = {
        nome: data.nome,
        instrucoes: data.instrucoes,
        tipo: data.tipo.value,
        status: data.status.value,
        setor_id: data.setor.value,
      };
      if (id === undefined) {
        httpRequest(`documentos/tipos`, {
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
          navigate("/documento/tipos");
        });
      } else {
        httpRequest(`documentos/tipos/${id}`, {
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
          navigate("/documento/tipos");
        });
      }
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="Documentos"
        data={[
          { title: "Documentos", link: "/documentos" },
          { title: "Tipos" },
          { title: "Novo" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="nome">
                      Nome
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="nome"
                      name="nome"
                      render={({ field }) => (
                        <Input
                          placeholder="Nome"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.nome === null || !data.nome.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="setor">
                      Setor
                    </Label>

                    <Controller
                      id="setor"
                      control={control}
                      name="setor"
                      render={({ field }) => (
                        <Select
                          options={setorOPT}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames("react-select", {
                            "is-invalid":
                              data !== null &&
                              data.setor === null
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
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
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Row>
                    <Col className="mb-1" xl="4" md="6" sm="12">
                      <Label className="form-label" for="status">
                        Status
                      </Label>

                      <Controller
                        id="status"
                        control={control}
                        name="status"
                        render={({ field }) => (
                          <Select
                            options={statusOPT}
                            classNamePrefix="select"
                            theme={selectThemeColors}
                            className={classnames("react-select", {
                              "is-invalid":
                                data !== null && data.status === null,
                            })}
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="instrucoes">
                      Instruções
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="instrucoes"
                      name="instrucoes"
                      render={({ field }) => (
                        <Input
                          type="textarea"
                          placeholder="Instruções"
                          className={classnames("form-control")}
                          {...field}
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

export default DocumentosTipoForm;
