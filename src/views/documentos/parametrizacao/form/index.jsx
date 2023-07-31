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

const DocumentosTiposParametrizacaoForm = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  let { item } = useParams();
  const [documentoTipo, setDocumentoTipo] = useState(null);
  const [para, setPara] = useState(null);
  const [data, setData] = useState(null);

  isAzure();

  const statusOPT = [
    { value: "empresa", label: "empresa" },
    { value: "funcionario", label: "funcionario" },
  ];

  const {
    reset,
    control,
    setError,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({  });

  if (id === undefined) {
    navigate(`/clientes`);
  }

  useEffect(() => {
    httpRequest(`documentos/tipos/${id}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setDocumentoTipo(res.body);
    });
  }, []);

  if (item !== undefined) {
    useEffect(() => {
      httpRequest(`documentos/tipos/parse/${item}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          tipo_funcionario: res.body.tipo_funcionario,
          x: res.body.x,
          y: res.body.y,
          index: res.body.index,
        });
        setValue("tipo", {
          value: res.body.tipo,
          label: res.body.tipo,
        });
        setPara(res.body);
      });
    }, []);
  }

  const onSubmit = (data) => {
    setData(data);
    if (data.tipo !== undefined && data.tipo_funcionario != "") {
      const dados = {
        tipo: data.tipo.value,
        documento_tipo_id: id,
        tipo_funcionario: data.tipo_funcionario,
        x: data.x,
        y: data.y,
        // index: data.index,
      };
      if (item === undefined) {
        httpRequest(`documentos/tipos/parse`, {
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
          navigate(`/documento/tipos/parametrizacao/${id}`);
        });
      } else {
        httpRequest(`documentos/tipos/parse/${item}`, {
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
          navigate(`/documento/tipos/parametrizacao/${id}`);
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
          { title: "Tipos", link: "/documento/tipos" },
          { title: "Nova Parametrização" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                          options={statusOPT}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames("react-select", {
                            "is-invalid":
                            data !== null &&
                            (data.tipo === undefined), 
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="tipo_funcionario">
                      Campo
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="tipo_funcionario"
                      name="tipo_funcionario"
                      render={({ field }) => (
                        <Input
                          placeholder="cnpj, cpf, cnh, matricula, pis, rg"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.tipo_funcionario === null || !data.tipo_funcionario.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="x">
                      X
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="x"
                      name="x"
                      render={({ field }) => (
                        <Input
                          placeholder="X"
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="y">
                      Y
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="y"
                      name="y"
                      render={({ field }) => (
                        <Input
                          placeholder="Y"
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  {/* <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="index">
                      Posição
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="index"
                      name="index"
                      render={({ field }) => (
                        <Input
                          placeholder="Posição"
                          {...field}
                        />
                      )}
                    />
                  </Col> */}
                  
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

export default DocumentosTiposParametrizacaoForm;
