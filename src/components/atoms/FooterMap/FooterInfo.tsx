import Typography from "@mui/material/Typography";
import React from "react";
import { FOOTER_INFO } from "../../../model/Constants";

type Props = {};

const FooterInfo = (_props: Props) => {
  return (
    <Typography
      sx={{ color: "#6D787E", fontSize: "14px" }}
      variant={"body2"}
      component={"pre"}
    >
      {FOOTER_INFO}
    </Typography>
  );
};

export default FooterInfo;
