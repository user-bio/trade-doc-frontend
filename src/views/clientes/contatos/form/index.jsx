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

const ContatosForm = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  let { item } = useParams();
  const [cliente, setCliente] = useState(null);
  const [contato, setContato] = useState(null);
  const [data, setData] = useState(null);

  isAzure();

  const statusOPT = [
    { value: "1", label: "Ativo" },
    { value: "0", label: "Inativo" },
  ];

  const defaultValues = {
    status: statusOPT[0],
  };

  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

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
      httpRequest(`clientes/contatos/${item}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          nome: res.body.nome,
          email: res.body.email,
          status: res.body.status ? statusOPT[0] : statusOPT[1],
        });
        setContato(res.body);
      });
    }, []);
  }

  const onSubmit = (data) => {
    setData(data);
    if (data.nome !== "" && data.email !== "" && data.status.value !== "") {
      const dados = {
        cliente_id: id,
        nome: data.nome,
        email: data.email,
        status: data.status.value,
      };
      if (item === undefined) {
        httpRequest(`clientes/contatos`, {
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
          navigate(`/clientes/contatos/${id}`);
        });
      } else {
        httpRequest(`clientes/contatos/${item}`, {
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
          navigate(`/clientes/contatos/${id}`);
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
          { title: "Contatos", link: `/clientes/contatos/${id}` },
          { title: "Novo Contato" },
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
                    <Label className="form-label" for="nome_fantasia">
                      E-mail
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="email"
                      name="email"
                      render={({ field }) => (
                        <Input
                          placeholder="E-mail"
                          type="email"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.email === null || !data.email.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="cnpj">
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
                            "is-invalid": data !== null && data.status === null,
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

export default ContatosForm;
