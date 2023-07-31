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

// ** Third Party Components
import Breadcrumbs from "@components/breadcrumbs";
import { useForm, Controller } from "react-hook-form";
import classnames from "classnames";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { pt } from "flatpickr/dist/l10n/pt";

// ** Custom Components

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/file-uploader/file-uploader.scss";

//components
import isAzure from "../../../components/isAzure";
import { getToken } from "../../../services/Auth";
import { httpRequest } from "../../../services/Api";

import Upload from "../form/upload";

const LeitorForm = () => {
  isAzure();

  const defaultValues = {
    documento: null,
  };

  const [data, setData] = useState(null);
  const [dados, setDados] = useState(null);
  const [tabela, setResultado] = useState([]);

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

  let navigate = useNavigate();

  useEffect(() => {
    if (dados !== null) {
      setValue("documento", dados);
    }
  }, [dados]);

  function limpaValores(valor) {
    let result = String(valor);
    result = result.replace(/%20/g, " ");
    result = result.replace(/%2F/g, "/");
    result = result.replace(/%3A/g, "");
    result = result.replace(/%2C/g, ",");
    result = result.replace(/%24/g, "$");
    result = result.replace(/%C3%A7/g, "ç");
    result = result.replace(/%C3%A9/g, "é");
    result = result.replace(/%C3%AD/g, "í");
    result = result.replace(/%C3%A1/g, "á");
    result = result.replace(/%C3%B3/g, "ó");
    result = result.replace(/%C3%BA/g, "ú");
    result = result.replace(/%C3%A3/g, "ã");
    result = result.replace(/%C3%83/g, "Ã");
    result = result.replace(/%C3%B5/g, "õ");
    result = result.replace(/%C2%BA/g, "o");
    result = result.replace(/%C3%AA/g, "ê");

    return result;
  }

  const onSubmit = (data) => {
    setData(data);

    let documentoTrue = false;
    if (data.documento === null) {
      documentoTrue = false;
    } else {
      documentoTrue = true;
    }

    if (documentoTrue === true) {
      const dados = new FormData();
      dados.append("file", data.documento[0]);

      console.log("chegamos aqui");
      httpRequest(`documentos/leitor`, {
        method: "POST",
        body: dados,
        token: getToken(),
      })
        .then((res) => {
          let result = res.body;
          setResultado(result);
          console.log(132323);
          console.log(result);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Fragment>
      <Breadcrumbs title="Configurações" data={[{ title: "Leitor PDF" }]} />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className={`mb-1`} xl="12" md="12" sm="12">
                    <Label className="form-label" for="documento">
                      Documento
                    </Label>
                    <Upload
                      id="documento"
                      funcao={setDados}
                      class={
                        data !== null &&
                        (data.documento === null || !data.documento.length)
                          ? "border-danger"
                          : ""
                      }
                    />
                  </Col>
                </Row>
                <div className=" text-end w-100">
                  <Button type="submit" color="primary">
                    Executar
                  </Button>
                </div>
                <Row>
                  <Col className={`mb-1`} xl="12" md="12" sm="12">
                    <div>
                      {tabela.map((res, index) => (
                        <div key={index}>
                          <h3 className="mb-2 mt-2">Página {index + 1}</h3>
                          <div className="AjusteTabela">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th width="15%">#</th>
                                  <th width="55%">Texto</th>
                                  <th width="15%">X</th>
                                  <th width="15%">Y</th>
                                </tr>
                              </thead>
                              <tbody>
                                {res.Texts.map((text, position) => (
                                  <tr key={position}>
                                    <th scope="row">{position + 1}</th>
                                    <td>{limpaValores(text.R[0].T)}</td>
                                    <td>{text.x}</td>
                                    <td>{text.y}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LeitorForm;
