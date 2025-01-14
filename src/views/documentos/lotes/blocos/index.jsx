import React, { useState, useEffect } from "react";
import { Col, Form, Row, Label, Button, Input, Progress } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { pt } from "flatpickr/dist/l10n/pt";
import { useForm, Controller } from "react-hook-form";
import classnames from "classnames";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { useNavigate } from "react-router-dom";

import "@styles/react/libs/file-uploader/file-uploader.scss";

import { getToken } from "../../../../services/Auth";
import { httpRequest } from "../../../../services/Api";

export function Blocos(props) {
  // console.log(props.dados);
  const [pessoas, setPessoas] = useState([]);
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(false);
  const [selectedcomp, setSelectedcomp] = useState(false);
  const [file, setFile] = useState(null);
  const [progressBar, setProgressBar] = useState(0);
  const [statusProgressBar, setStatusProgresBar] = useState(false);
  const [campos, setVampos] = useState(false);
  const [coampos, setCoampos] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (props.dados.length !== 0) {
      setPessoas(props.dados.funcionario);
      const obj = [];
      props.dados.funcionario.map((item) => {
        obj[`documento_${item.value}`] = "";
      });
      if (props.dados.validadecampos) {
        setVampos(true);
      }
      if (props.dados.compoetenciacampos) {
        setCoampos(true);
      }
      console.log(props.dados);
      setFile(obj);
    }
  }, [props.dados]);

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

  const defaultValues = {
    tipo: null,
    empresa: null,
    funcionario: null,
    vencimento: [],
    documento: null,
    competenciadata: [],
    semduplicidade: false,
  };

  const {
    reset,
    control,
    setError,
    getInputProps,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  function marcaCheck(e) {
    if (e.target.checked) {
      setSelected(e.target.checked);
    } else {
      setSelected(e.target.checked);
    }
  }

  function marcaCheckComp(e) {
    if (e.target.checked) {
      setSelectedcomp(e.target.checked);
    } else {
      setSelectedcomp(e.target.checked);
    }
  }

  const handleFileChange = (event, id) => {
    const objNew = file;
    const selectedFile = event.target.files[0];

    objNew[`documento_${id}`] = selectedFile;
    setFile(objNew);
  };

  const onSubmit = async (data) => {
    setData(data);

    let validaAcao = true;
    let validaComp = true;
    if (campos) {
      //pego os campos de funcionarios que retornam como true do checkbox na etapa anterior
      for (let item of props.dados.funcionario) {
        if (!data[`semvalidade_${item.value}`]) {
          if (data[`vencimento_${item.value}`] === undefined) {
            validaAcao = false;
          }
        } else {
          data[`vencimento_${item.value}`] = 0;
        }
      }
    } else {
      validaAcao = false;
      if (
        data.vencimento !== null &&
        data.vencimento.length > 0 &&
        data.semvalidade === false
      ) {
        validaAcao = true;
      } else if (data.semvalidade === true) {
        validaAcao = true;
      } else {
        validaAcao = false;
      }
    }

    if(coampos){
      for (let item of props.dados.funcionario) {
        if (!data[`semcompetencia_${item.value}`]) {
          if (data[`competenciadata_${item.value}`] === undefined) {
            validaComp = false;
          }
        } else {
          data[`competenciadata_${item.value}`] = 0;
        }
      }
    }else{
      validaComp = false;
      if (
        data.competenciadata !== null &&
        data.competenciadata.length > 0 &&
        data.semcompetencia === false
      ) {
        validaComp = true;
      } else if (data.semcompetencia === true) {
        validaComp = true;
      } else {
        validaComp = false;
      }
    }

    if (validaAcao === true && validaComp === true) {
      const totalPercorrer = props.dados.funcionario.length;

      setStatusProgresBar(true);

      for (let i = 0; i < totalPercorrer; i++) {
        try {
          console.log((i / (totalPercorrer - 1)) * 100);
          setProgressBar((i / (totalPercorrer - 1)) * 100);
          const dados = new FormData();
          dados.append("tipo_upload", "normal");
          dados.append("empresa_id", props.dados.empresa.value);
          dados.append("documentos_tipo_id", props.dados.tipo.value);

          dados.append("funcionario_id", props.dados.funcionario[i].value);
          ////////
          if (campos) {
            dados.append(
              "semvalidade",
              data[`semvalidade_${props.dados.funcionario[i].value}`]
            );
            dados.append(
              "dias_aviso",
              data[`dias_${props.dados.funcionario[i].value}`]
            );
            dados.append(
              "validade",
              data[`vencimento_${props.dados.funcionario[i].value}`].length > 0
                ? data[`vencimento_${props.dados.funcionario[i].value}`][0]
                : null
            );
          } else {
            dados.append("semvalidade", data.semvalidade);
            dados.append("dias_aviso", data.dias);
            dados.append(
              "validade",
              data.vencimento.length > 0 ? data.vencimento[0] : null
            );
          }
          if (coampos) {
            dados.append(
              "semcompetencia",
              data[`semcompetencia_${props.dados.funcionario[i].value}`]
            );
            dados.append(
              "competenciadata",
              data[`competenciadata_${props.dados.funcionario[i].value}`]
                .length > 0
                ? data[`competenciadata_${props.dados.funcionario[i].value}`][0]
                : null
            );
          }else{
            dados.append("semcompetencia", data.semcompetencia);
            dados.append(
              "competenciadata",
              data.competenciadata.length > 0 ? data.competenciadata[0] : null
            );
          }

          dados.append(
            "file",
            file[`documento_${props.dados.funcionario[i].value}`]
          );

          const response = await httpRequest(`documentos`, {
            method: "POST",
            body: dados,
            token: getToken(),
          });
          console.log("Data sent successfully: " + i, response);
        } catch (error) {
          console.error("Error sending data: " + i, error);
        }
      }
      MySwal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Arquivos enviados com sucesso.",
        customClass: {
          confirmButton: "btn btn-success",
        },
      });
      navigate("/documentos");
    } else {
      console.log("nao passou");
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={`${statusProgressBar ? "d-none" : ""}`}
      >
        <Row>
          <Col lg="7">
            <Row className={``}>
              <Col
                className={`${campos ? "d-none" : ""}`}
                xl="4"
                md="6"
                sm="12"
              >
                <div className={`mb-1 ${selected ? "d-none" : "d-block"}`}>
                  <Label className="form-label" for="dias">
                    Dias aviso vencimento
                  </Label>
                  <Controller
                    defaultValue="30"
                    control={control}
                    id="dias"
                    name="dias"
                    render={({ field }) => (
                      <Input
                        placeholder="Dias para aviso"
                        className={classnames("form-control", {
                          "is-invalid":
                            data !== null &&
                            (data.dias === null || !data.dias.length),
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>
              </Col>
              <Col
                className={`${campos ? "d-none" : ""}`}
                xl="4"
                md="6"
                sm="12"
              >
                <div className={`mb-1 ${selected ? "d-none" : "d-block"}`}>
                  <Label className="form-label" for="vencimento">
                    Vencimento
                  </Label>
                  <Controller
                    control={control}
                    id="vencimento"
                    name="vencimento"
                    render={({ field }) => (
                      <Flatpickr
                        {...field}
                        className={classnames("form-control", {
                          "is-invalid":
                            data !== null &&
                            (data.vencimento === null ||
                              !data.vencimento.length),
                        })}
                        id="vencimento"
                        options={options}
                      />
                    )}
                  />
                </div>
              </Col>
              <Col
                className={`mb-1 ${campos ? "d-none" : ""}`}
                xl="4"
                md="6"
                sm="12"
              >
                <Label className="form-label" for="semvalidade">
                  Documento sem validade?
                </Label>
                <div>
                  <div className="form-check form-check-inline mt-1">
                    <input
                      {...register(`semvalidade`)}
                      className="form-check-input"
                      type="checkbox"
                      id={`semvalidade`}
                      checked={selected ? true : false}
                      onChange={marcaCheck}
                    />

                    <Label for={`semvalidade`} className="form-check-label">
                      Sim
                    </Label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="5">
            <Row className={`${coampos ? "d-none" : ""}`}>
              <Col
                lg="6"
              >
                <div className={`mb-1 ${selectedcomp ? "d-none" : "d-block"}`}>
                  <Label className="form-label" for="competenciadata">
                    Competência
                  </Label>
                  <Controller
                    control={control}
                    id="competenciadata"
                    name="competenciadata"
                    render={({ field }) => (
                      <Flatpickr
                        {...field}
                        className={classnames("form-control", {
                          "is-invalid":
                            data !== null &&
                            (data.competenciadata === null ||
                              !data.competenciadata.length),
                        })}
                        id="competenciadata"
                        options={optionsComp}
                      />
                    )}
                  />
                </div>
              </Col>
              <Col className={`mb-1`} lg="6">
                <Label className="form-label" for="semcompetencia">
                  Documento sem competência?
                </Label>
                <div>
                  <div className="form-check form-check-inline mt-1">
                    <input
                      {...register(`semcompetencia`)}
                      className="form-check-input"
                      type="checkbox"
                      id={`semcompetencia`}
                      checked={selectedcomp ? true : false}
                      onChange={marcaCheckComp}
                    />

                    <Label for={`semcompetencia`} className="form-check-label">
                      Sim
                    </Label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          {pessoas.map((item, index) => (
            <Col lg="12" key={index}>
              <Row className="d-flex align-items-center">
                <Col lg="12">
                  <h4>{item.label}</h4>
                  {/* <Label className="form-label" for={`documento_${item.value}`}>
                    <b></b>
                  </Label> */}
                  <div className={`mt-2 `}>
                    <Row>
                      <Col lg="7" className={`${campos ? "" : "d-none"}`}>
                        <Row>
                          <Col
                            className={`mb-1 ${
                              selected ? "d-none" : "d-block"
                            }`}
                            xl="4"
                            md="6"
                            sm="12"
                          >
                            <Label
                              className="form-label"
                              for={`dias_${item.value}`}
                            >
                              Dias aviso vencimento
                            </Label>
                            <Controller
                              defaultValue="30"
                              control={control}
                              id={`dias_${item.value}`}
                              name={`dias_${item.value}`}
                              render={({ field }) => (
                                <Input
                                  placeholder="Dias para aviso"
                                  className={classnames("form-control", {
                                    "is-invalid":
                                      data !== null &&
                                      (data[`dias_${item.value}`] === null ||
                                        !data[`dias_${item.value}`].length),
                                  })}
                                  {...field}
                                />
                              )}
                            />
                          </Col>
                          <Col
                            className={`mb-1 ${
                              selected ? "d-none" : "d-block"
                            }`}
                            xl="4"
                            md="6"
                            sm="12"
                          >
                            <Label
                              className="form-label"
                              for={`vencimento_${item.value}`}
                            >
                              Vencimento
                            </Label>
                            <Controller
                              control={control}
                              id={`vencimento_${item.value}`}
                              name={`vencimento_${item.value}`}
                              render={({ field }) => (
                                <Flatpickr
                                  {...field}
                                  className={classnames("form-control", {
                                    "is-invalid":
                                      data !== null &&
                                      (data[`vencimento_${item.value}`] ===
                                        null ||
                                        data[`vencimento_${item.value}`] ===
                                          undefined),
                                  })}
                                  id={`vencimento_${item.value}`}
                                  options={options}
                                />
                              )}
                            />
                          </Col>
                          <Col className={`mb-1`} xl="4" md="6" sm="12">
                            <Label className="form-label" for="semvalidade">
                              Documento sem validade?
                            </Label>
                            <div>
                              <div className="form-check form-check-inline mt-1">
                                <input
                                  {...register(`semvalidade_${item.value}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`semvalidade_${item.value}`}
                                  // checked={selected ? true : false}
                                  // onChange={marcaCheck}
                                />

                                <Label
                                  for={`semvalidade_${item.value}`}
                                  className="form-check-label"
                                >
                                  Sim
                                </Label>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg="5" className={`${coampos ? "" : "d-none"}`}>
                        <Row>
                          <Col
                            className={`mb-1 ${
                              selectedcomp ? "d-none" : "d-block"
                            }`}
                            lg="6"
                          >
                            <Label
                              className="form-label"
                              for={`competenciadata_${item.value}`}
                            >
                              Competência
                            </Label>
                            <Controller
                              control={control}
                              id={`competenciadata_${item.value}`}
                              name={`competenciadata_${item.value}`}
                              render={({ field }) => (
                                <Flatpickr
                                  {...field}
                                  className={classnames("form-control", {
                                    "is-invalid":
                                      data !== null &&
                                      (data[`competenciadata_${item.value}`] ===
                                        null ||
                                        data[
                                          `competenciadata_${item.value}`
                                        ] === undefined),
                                  })}
                                  id={`competenciadata_${item.value}`}
                                  options={optionsComp}
                                />
                              )}
                            />
                          </Col>
                          <Col className={`mb-1`} lg="6">
                            <Label className="form-label" for="semcompetencia">
                              Documento sem competência?
                            </Label>
                            <div>
                              <div className="form-check form-check-inline mt-1">
                                <input
                                  {...register(`semcompetencia_${item.value}`)}
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`semcompetencia_${item.value}`}
                                  // checked={selectedcomp ? true : false}
                                  // onChange={marcaCheckComp}
                                />

                                <Label
                                  for={`semcompetencia_${item.value}`}
                                  className="form-check-label"
                                >
                                  Sim
                                </Label>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg="6">
                  <div>
                    <Controller
                      control={control}
                      id={`documento_${item.value}`}
                      name={`documento_${item.value}`}
                      render={({ field }) => (
                        <input
                          class="form-control"
                          accept="application/pdf"
                          type="file"
                          {...field}
                          onChange={(e) => handleFileChange(e, item.value)}
                        />
                      )}
                    />
                  </div>
                </Col>
              </Row>
              <hr />
            </Col>
          ))}
        </Row>
        <div className={`text-end w-100`}>
          <Button type="submit" color="primary">
            Salvar
          </Button>
        </div>
      </Form>
      <div className={`${statusProgressBar ? "" : "d-none"}`}>
        <Progress value={progressBar} />
      </div>
    </>
  );
}
