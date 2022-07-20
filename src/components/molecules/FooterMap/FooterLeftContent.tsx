import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/system/Box";
import React from "react";
import { FOOTER_LEFT_CONTENT } from "../../../model/Constants";
import Logo from "../../atoms/logo/Logo";

type Props = {};

const useStyles = makeStyles((_theme: Theme) => ({
  box: {
    "&.MuiBox-root": {
      minWidth: "360px",
    },
    "& .MuiTypography-root": {
      fontSize: "24px",
      lineHeight: "32px",
      color: "#0365F2",
      fontWeight: "500",
      marginTop: "30px",
    },
  },
}));

const FooterLeftContent = (_props: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Logo
        link="/assets/pictures/BlinkList.png"
        width="99.1px"
        height="24px"
      />
      <Typography>{FOOTER_LEFT_CONTENT}</Typography>
    </Box>
  );
};

export default FooterLeftContent;
