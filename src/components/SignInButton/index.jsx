import React from "react";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../configs/authConfig";
import { Button } from "reactstrap";

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {

    if (loginType === "popup") {
        instance.loginPopup(loginRequest);
    } else if (loginType === "redirect") {
        console.log("aqui")
        instance.loginRedirect(loginRequest).catch(e => console.log(e));
    }
  };

  return (
    <Button
      className="mt-2 w-100"
      color="primary"
      onClick={() => handleLogin("redirect")}
      key="loginRedirect"
    >
      Entrar
    </Button>
  );
};
