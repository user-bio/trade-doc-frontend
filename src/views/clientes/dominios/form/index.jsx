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

const DominiosForm = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  let { item } = useParams();
  const [cliente, setCliente] = useState(null);
  const [contato, setDominio] = useState(null);
  const [data, setData] = useState(null);

  isAzure();

  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (id === undefined) {
    navigate(`/clientes`);
  }

  useEffect(() => {
    httpRequest(`clientes/${id}`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      setCliente(res.body);
    });
  }, []);

  if (item !== undefined) {
    useEffect(() => {
      httpRequest(`clientes/dominios/${item}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          dominio: res.body.dominio,
        });
        setDominio(res.body);
      });
    }, []);
  }

  const onSubmit = (data) => {
    setData(data);
    if (data.dominio !== "") {
      const dados = {
        cliente_id: id,
        dominio: data.dominio
      };
      if (item === undefined) {
        httpRequest(`clientes/dominios`, {
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
          navigate(`/clientes/dominios/${id}`);
        });
      } else {
        httpRequest(`clientes/dominios/${item}`, {
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
          navigate(`/clientes/dominios/${id}`);
        });
      }
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="Clientes"
        data={[
          { title: "Clientes", link: "/clientes" },
          //{ title: `${cliente.nome_fantasia}`, link: `/clientes/form/${id}` },
          { title: "Contatos", link: `/clientes/dominios/${id}` },
          { title: "Novo Domínio" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="12" md="12" sm="12">
                    <Label className="form-label" for="nome">
                      Nome
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="dominio"
                      name="dominio"
                      render={({ field }) => (
                        <Input
                          placeholder="Domínio"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.dominio === null || !data.dominio.length),
                          })}
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

export default DominiosForm;
