import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { BANNER_INFO } from "../../../model/Constants";

type Props = {};

const useStyles = makeStyles({
  head: {
    width: "319px",
    "&.MuiTypography-root": {
      marginBottom: "15px",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
  },
  text: {
    width: "461px",
    "&.MuiTypography-root": {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "23px",
      color: "#6D787E",
    },
  },
  mainContainer: {
    width: "900px",
    padding: "45px",
    paddingBottom: "18px",
    "&.MuiBox-root": {
      marginLeft: "17%",
      backgroundColor: "#F1F6F4",
      display: "flex",
      justifyContent: "space-between",
    },
  },
});

const Banner = (_props: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.head}>{BANNER_INFO.head}</Typography>
        <Typography className={classes.text}>{BANNER_INFO.body}</Typography>
      </Box>
      <Box>
        <img src="/assets/pictures/explore.png" alt="reading Book" />
      </Box>
    </Box>
  );
};

export default Banner;
