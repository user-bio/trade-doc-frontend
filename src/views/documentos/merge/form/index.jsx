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

const DocumentosMergeForm = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  let { item } = useParams();
  //const [documentoTipo, setDocumentoTipo] = useState(null);
  const [selectTipo, setselectTipo] = useState([]);
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
    httpRequest(`documentos/tipos?tipo=normal`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objTipos = [];
      res.body.map((tipo) => {
        objTipos.push({
          value: tipo.id,
          label: tipo.nome,
        });
      });
      setselectTipo(objTipos);
    });
  }, []);

  if (item !== undefined) {
    useEffect(() => {
      httpRequest(`documentos/tipos/merge/${item}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          ordem: res.body.ordem,
        });
        setValue("tipo", {
          value: res.body.merge_id,
          label: res.body.Documentos_Tipo.nome,
        });
        setPara(res.body);
      });
    }, []);
  }

  const onSubmit = (data) => {
    setData(data);
    if (data.tipo !== undefined && data.tipo_funcionario != "") {
      const dados = {
        documento_tipo_id: id,
        merge_id: data.tipo.value,
        ordem: data.ordem,
      };
      if (item === undefined) {
        httpRequest(`documentos/tipos/merge`, {
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
          navigate(`/documento/tipos/merge/${id}`);
        });
      } else {
        httpRequest(`documentos/tipos/merge/${item}`, {
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
          navigate(`/documento/tipos/merge/${id}`);
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
          { title: "Novo item merge" },
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
                          options={selectTipo}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames("react-select", {
                            "is-invalid":
                            data !== null &&
                            (data.tipo === undefined), 
                          })}
                          isDisabled={item !== undefined ? true : false}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="ordem">
                      Ordem
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="ordem"
                      name="ordem"
                      render={({ field }) => (
                        <Input
                          placeholder="Ordem"
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

export default DocumentosMergeForm;
