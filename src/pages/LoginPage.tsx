import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import Template from "../components/templates/Template";
import { WELCOME_GREETING } from "../model/Constants";

type Props = {};

const Body: FC = (_props: Props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box sx={{ padding: "20px 17%" }}>
      <Typography variant="h2">{WELCOME_GREETING}</Typography>
      <Button
        onClick={() => loginWithRedirect()}
        variant="contained"
        sx={{ fontSize: "32px" }}
      >
        Login
      </Button>
    </Box>
  );
};

const LoginPage = (_props: Props) => {
  return (
    <Template>
      <Body />
    </Template>
  );
};

export default LoginPage;
