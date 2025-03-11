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
import { limpaValores, formataCNPJ } from "../../../services/Funcoes";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const ClientesForm = () => {
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
    register,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [dados, setDados] = useState(null);
  const [selected, setSelected] = useState(false);
  const [setorOPT, setSetorOPT] = useState([]);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`clientes/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          razao_social: res.body.razao_social,
          nome_fantasia: res.body.nome_fantasia,
          cnpj: formataCNPJ(res.body.cnpj),
          status: res.body.status ? statusOPT[0] : statusOPT[1],
        });
        setSelected(res.body.anexo);
        setValue("anexo", res.body.anexo);

        if(res.body.possui_setor){
          httpRequest(`setores/${res.body.possui_setor}`, {
            method: "GET",
            token: getToken(),
          }).then((resS) => {
            setValue("setor", {
              value: resS.body.id,
              label: resS.body.setor,
            });
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

  function marcaCheck(e) {
    if (e.target.checked) {
      setSelected(e.target.checked);
    } else {
      setSelected(e.target.checked);
    }
  }

  const onSubmit = (data) => {
    setData(data);
    if (
      data.razao_social !== "" &&
      data.nome_fantasia !== "" &&
      data.cnpj !== "" &&
      data.cnpj.length === 18
    ) {
      console.log(data)
      const dados = {
        razao_social: data.razao_social,
        nome_fantasia: data.nome_fantasia,
        cnpj: limpaValores(data.cnpj),
        anexo: data.anexo,
        status: data.status.value,
        possui_setor: data.setor === null || data.setor === undefined ? 0 : data.setor.value
      };
      if (id === undefined) {
        httpRequest(`clientes`, {
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
          navigate("/clientes");
        });
      }else{
        httpRequest(`clientes/${id}`, {
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
          navigate("/clientes");
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
          { title: "Novo Cliente" },
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
                  <Col className={`mb-1`} xl="4" md="6" sm="12">
                    <Label className="form-label" for="anexo">
                      Recebe documentos por anexo?
                    </Label>
                    <div>
                      <div className="form-check form-check-inline mt-1">
                        <input
                          {...register(`anexo`)}
                          className="form-check-input"
                          type="checkbox"
                          id={`anexo`}
                          checked={selected ? true : false}
                          onChange={marcaCheck}
                        />

                        <Label for={`anexo`} className="form-check-label">
                          Sim
                        </Label>
                      </div>
                    </div>
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
                          isClearable={true}
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

export default ClientesForm;
