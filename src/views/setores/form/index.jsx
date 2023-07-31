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
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const SetoresForm = () => {
  isAzure();

  const {
    reset,
    control,
    setError,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [selectUsuarios, setselectUsuarios] = useState([]);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`setores/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        console.log(res)
        setValue("setor", res.body.setor);
        if(res.body.responsaveis.length > 0){
          setValue("usuario", {
            value: res.body.responsaveis[0].id,
            label: res.body.responsaveis[0].first_name,
          });
        }
        if(res.body.gestores.length > 0){
          setValue("gestor", {
            value: res.body.gestores[0].id,
            label: res.body.gestores[0].first_name,
          });
        }
      });
    }, []);
  }

  useEffect(() => {
    httpRequest(`usuarios`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objUsuarios = [];
      res.body.map((tipo) => {
        objUsuarios.push({
          value: tipo.id,
          label: tipo.first_name,
        });
      });
      setselectUsuarios(objUsuarios);
    });
  }, []);

  const onSubmit = (data) => {
    setData(data);
    if (data.setor !== "") {
      const dados = {
        setor: data.setor,
        usuario_id: data.usuario == null ? null : data.usuario.value,
      };
      if (id === undefined) {
        httpRequest(`setores`, {
          method: "POST",
          body: dados,
          token: getToken(),
        }).then((res) => {
          httpRequest(`setores/${res.body.id}/usuarios`, {
            method: "PUT",
            body: [
              {
                usuarioId: data.gestor == null ? null : data.gestor.value,
                tipo: "gestor",
              },
              {
                usuarioId: data.usuario == null ? null : data.usuario.value,
                tipo: "responsavel",
              },
            ],
            token: getToken(),
          }).then((resp) => {
            MySwal.fire({
              icon: "success",
              title: "Sucesso!",
              text: "Cadastro realizada com sucesso.",
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
          });
          navigate("/setores");
        });
      } else {
        httpRequest(`setores/${id}`, {
          method: "PUT",
          body: dados,
          token: getToken(),
        }).then((res) => {
          httpRequest(`setores/${id}/usuarios`, {
            method: "PUT",
            body: [
              {
                usuarioId: data.gestor == null ? null : data.gestor.value,
                tipo: "gestor",
              },
              {
                usuarioId: data.usuario == null ? null : data.usuario.value,
                tipo: "responsavel",
              },
            ],
            token: getToken(),
          }).then((resp) => {
            MySwal.fire({
              icon: "success",
              title: "Sucesso!",
              text: "Cadastro atualizado com sucesso.",
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
          });
          navigate("/setores");
        });
      }
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="Setores"
        data={[{ title: "Setores", link: "/setores" }, { title: "Novo Setor" }]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="setor">
                      Setor
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="setor"
                      name="setor"
                      render={({ field }) => (
                        <Input
                          placeholder="Setor"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.setor === null || !data.setor.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="gestor">
                      Gestor
                    </Label>

                    <Controller
                      id="gestor"
                      control={control}
                      name="gestor"
                      render={({ field }) => (
                        <Select
                          options={selectUsuarios}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="usuario">
                      Usuário Responsável
                    </Label>

                    <Controller
                      id="usuario"
                      control={control}
                      name="usuario"
                      render={({ field }) => (
                        <Select
                          options={selectUsuarios}
                          classNamePrefix="select"
                          theme={selectThemeColors}
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

export default SetoresForm;
