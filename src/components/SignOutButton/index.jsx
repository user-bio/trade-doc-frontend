import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "reactstrap";

function handleLogout(instance) {
  instance.logoutRedirect().catch((e) => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <Button
      className="mt-2 w-100"
      color="primary"
      onClick={() => handleLogout(instance)}
      key="loginRedirect"
    >
      Sair
    </Button>
  );
};
