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
import {
  limpaValores,
  formataCNPJ,
  formataCPF,
} from "../../../services/Funcoes";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

const FuncionariosForm = () => {
  isAzure();

  const statusOPT = [
    { value: "1", label: "Ativo" },
    { value: "0", label: "Inativo" },
  ];

  const defaultValues = {
    status: statusOPT[0],
    empresa: null,
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
  const [empresas, setEmpresa] = useState([]);

  //verifica se é edição
  if (id !== undefined) {
    useEffect(() => {
      httpRequest(`funcionarios/${id}`, {
        method: "GET",
        token: getToken(),
      }).then((res) => {
        reset({
          status: res.body.status ? statusOPT[0] : statusOPT[1],
          nome: res.body.nome,
          cpf: formataCPF(res.body.cpf),
          cnpj: formataCNPJ(res.body.cnpj),
          rg: res.body.rg,
          cnh: res.body.cnh,
          matricula: res.body.matricula,
          pis: res.body.pis
        });
        setValue("empresa", {
          value: res.body.empresa_id,
          label: res.body.Empresa.nome_fantasia,
        });
      });
    }, []);
  }

  useEffect(() => {
    httpRequest(`empresas`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const objEmpresas = [];
      res.body.map((tipo) => {
        objEmpresas.push({
          value: tipo.id,
          label: tipo.nome_fantasia,
        });
      });
      setEmpresa(objEmpresas);
    });
  }, []);

  const onSubmit = (data) => {
    setData(data);
    if (
      data.nome !== "" &&
      data.cpf !== "" &&
      // data.rg !== "" &&
      // data.cnh !== "" &&
      // data.pis !== "" &&
      // data.matricula !== "" &&
      data.cpf.length === 14
    ) {
      const dados = {
        empresa_id: data.empresa.value,
        nome: data.nome,
        cpf: limpaValores(data.cpf),
        cnpj: data.cnpj.length ? limpaValores(data.cnpj) : "00000000000000",
        rg: data.rg,
        cnh: data.cnh,
        matricula: data.matricula,
        pis: data.pis,
        status: data.status.value,
      };

      if (id === undefined) {
        httpRequest(`funcionarios`, {
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
          navigate("/funcionarios");
        });
      } else {
        httpRequest(`funcionarios/${id}`, {
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
          navigate("/funcionarios");
        });
      }
    }
  };

  function marcaCheck(valor) {
    let checks = structuredClone(selected);
    if (checks.length === 0) {
      checks.push(valor.id);
      setSelected(checks);
    } else {
      if (checks.includes(valor.id)) {
        for (var i = checks.length - 1; i >= 0; i--) {
          if (checks[i] === valor.id) {
            checks.splice(i, 1);
          }
        }
        setSelected(checks);
      } else {
        checks.push(valor.id);
        setSelected(checks);
      }
    }
  }

  return (
    <Fragment>
      <Breadcrumbs
        title="Funcionários"
        data={[
          { title: "Funcionários", link: "/funcionarios" },
          { title: "Novo Funcionários" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="empresa">
                      Empresa
                    </Label>
                    <Controller
                      id="empresa"
                      control={control}
                      name="empresa"
                      render={({ field }) => (
                        <Select
                          options={empresas}
                          classNamePrefix="select"
                          theme={selectThemeColors}
                          className={classnames("react-select", {
                            "is-invalid":
                              data !== null && data.empresa === null,
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
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
                    <Label className="form-label" for="cpf">
                      CPF
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="cpf"
                      name="cpf"
                      render={({ field }) => (
                        <Cleave
                          {...field}
                          placeholder="00.000.000-00"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.cpf === null ||
                                !data.cpf.length ||
                                data.cpf.length < 14),
                          })}
                          options={{
                            delimiters: [".", ".", "-"],
                            blocks: [3, 3, 3, 2],
                            delimiterLazyShow: true,
                            numericOnly: true,
                            numeralThousandsGroupStyle: "thousand",
                          }}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="rg">
                      RG
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="rg"
                      name="rg"
                      render={({ field }) => (
                        <Input
                          placeholder="RG"
                          className={classnames("form-control", {
                            // "is-invalid":
                            //   data !== null &&
                            //   (data.rg === null || !data.rg.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="cnh">
                      CNH
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="cnh"
                      name="cnh"
                      render={({ field }) => (
                        <Input
                          placeholder="CNH"
                          className={classnames("form-control", {
                            // "is-invalid":
                            //   data !== null &&
                            //   (data.cnh === null || !data.cnh.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="matricula">
                      Matrícula
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="matricula"
                      name="matricula"
                      render={({ field }) => (
                        <Input
                          placeholder="Matrícula"
                          className={classnames("form-control", {
                            // "is-invalid":
                            //   data !== null &&
                            //   (data.matricula === null ||
                            //     !data.matricula.length),
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
                          className={classnames("form-control")}
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
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="pis">
                      PIS
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="pis"
                      name="pis"
                      render={({ field }) => (
                        <Input
                          placeholder="PIS"
                          className={classnames("form-control", {
                            // "is-invalid":
                            //   data !== null &&
                            //   (data.pis === null ||
                            //     !data.pis.length),
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

export default FuncionariosForm;
