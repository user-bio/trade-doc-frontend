import React, { useEffect } from "react";
import { useSkin } from "@hooks/useSkin";
import { useNavigate } from "react-router-dom";
import { Row, Col, CardTitle } from "reactstrap";
import "@styles/react/pages/page-authentication.scss";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../../configs/authConfig";
import { SignInButton } from "../../../components/SignInButton";
import { httpRequest } from "../../../services/Api";
import { setToken, setData } from "../../../services/Auth";
import Usuarios from "../../../services/Usuarios";

import logo from "../../../assets/images/logo/logo.png";

const Login = () => {
  const { skin } = useSkin();
  let navigate = useNavigate();
  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const isAuthenticated = useIsAuthenticated();

  const { instance, accounts } = useMsal();

  const request = {
    ...loginRequest,
    account: accounts[0],
  };

  useEffect(() => {
    if (isAuthenticated) {
      instance
        .acquireTokenSilent(request)
        .then((res) => {
          const dados = {
            email: res.account.username,
            token: res.accessToken,
          };
          httpRequest(`usuarios/login`, {
            method: "POST",
            body: dados,
          })
            .then((r) => {
              setToken(r.body.access_token);
              setData(r.body.expires_in);
              Usuarios.getUser(true).then(() => {
                window.location.href = "./";
              });
            })
            .catch((error) => {
              instance.logoutRedirect().catch((error) => {
                console.error(error);
              });
            });
        })
        .catch((error) => {
          instance.logoutRedirect().catch((e) => {
            console.error(e);
          });
        });
    }
  }, [isAuthenticated]);

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              <img className="me-1" src={logo} width="32" />
              Trade DOC
            </CardTitle>
            <UnauthenticatedTemplate>
              <SignInButton />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>Carregando...</AuthenticatedTemplate>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
