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
  Alert
} from "reactstrap";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import classnames from "classnames";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { useNavigate, useParams } from "react-router-dom";
import { EditorState, ContentState, convertToRaw, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

//components
import isAzure from "../../components/isAzure";
import { getToken } from "../../services/Auth";
import { httpRequest } from "../../services/Api";

// ** Styles
import "@styles/react/libs/editor/editor.scss";

const EmailForm = () => {
  isAzure();

  const [value, setValue] = useState(EditorState.createEmpty());
  const [value2, setValue2] = useState(EditorState.createEmpty());

  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState(null);

  let navigate = useNavigate();

  function onEditorStateChange(editorState) {
    setValue(editorState);
  }

  function onEditorStateChange2(editorState) {
    setValue2(editorState);
  }

  //verifica se é edição
  useEffect(() => {
    httpRequest(`emails`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      reset({
        assunto: res.body.assunto,
        assunto_2: res.body.assunto_2,
        assunto_3: res.body.assunto_3,
      });
      const content = convertFromHTML(res.body.texto_anexo);
      setValue(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(content)
        )
      );
      const content2 = convertFromHTML(res.body.texto_link);
      setValue2(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(content2)
        )
      );
    });
  }, []);

  const onSubmit = (data) => {
    setData(data);
    let texto_anexo = draftToHtml(convertToRaw(value.getCurrentContent()));
    let texto_link = draftToHtml(convertToRaw(value2.getCurrentContent()));
    
    if (data.assunto !== "") {
      const dados = {
        assunto: data.assunto,
        assunto_2: data.assunto_2,
        assunto_3: data.assunto_3,
        texto_anexo: texto_anexo,
        texto_link: texto_link,
      };
      console.log(dados);
      httpRequest(`emails`, {
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
      });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        title="Configurações"
        data={[
          { title: "Configurações", link: "/email" },
          { title: "Editar e-mail" },
        ]}
      />
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="assunto">
                      Assunto - instantâneo
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="assunto"
                      name="assunto"
                      render={({ field }) => (
                        <Input
                          placeholder="Assunto"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.assunto === null || !data.assunto.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="assunto_2">
                      Assunto - Agendado
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="assunto_2"
                      name="assunto_2"
                      render={({ field }) => (
                        <Input
                          placeholder="Assunto"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.assunto_2 === null || !data.assunto_2.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col className="mb-1" xl="4" md="6" sm="12">
                    <Label className="form-label" for="assunto_3">
                      Assunto - Recorente
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="assunto_3"
                      name="assunto_3"
                      render={({ field }) => (
                        <Input
                          placeholder="Assunto"
                          className={classnames("form-control", {
                            "is-invalid":
                              data !== null &&
                              (data.assunto_3 === null || !data.assunto_3.length),
                          })}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-1" xl="12" md="12" sm="12">
                    <Label className="form-label" for="texto_anexo">
                      E-mail anexo
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="texto_anexo"
                      name="texto_anexo"
                      render={({ field }) => (
                        <Editor
                          editorState={value}
                          onEditorStateChange={onEditorStateChange}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-1" xl="12" md="12" sm="12">
                    <Label className="form-label" for="texto_link">
                      E-mail link
                    </Label>
                    <Controller
                      defaultValue=""
                      control={control}
                      id="texto_link"
                      name="texto_link"
                      render={({ field }) => (
                        <Editor
                          editorState={value2}
                          onEditorStateChange={onEditorStateChange2}
                          {...field}
                        />
                      )}
                    />
                  </Col>
                  <Col
                    xl="12"
                    md="12"
                    sm="12"
                  >
                    <Label className="form-label" for="documento">
                      Orientação de variáveis
                    </Label>
                    <div>
                      <Alert color="primary">
                        <div className="alert-body">
                          <span>
                            Listar documentos: <i>{'{LISTA_DOCUMENTOS}'}</i><br />
                            Listar link de download: <i>{'{LISTA_LINKS}'}</i> 
                          </span>
                        </div>
                      </Alert>
                    </div>
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

export default EmailForm;
