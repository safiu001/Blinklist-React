import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import React from "react";
import { FOOTER_NAV_CONTENT } from "../../../model/Constants";

type Props = {};

const info = FOOTER_NAV_CONTENT;

const useStyles = makeStyles((_theme) => ({
  heading: {
    "&.MuiGrid-root": {
      fontFamily: "Cera Pro",
      color: "#03314B",
      fontWeight: "700",
      lineHeight: "24px",
    },
  },
  firstChild: {
    "&.MuiGrid-root": {
      flex: 3,
    },
  },
  item: {
    flex: 2,
    color: "#6D787E",
    "& .MuiGrid-item": {
      fontFamily: "Cera Pro",
      fontSize: "16px",
      display: "inline-block",
    },
  },
  mainContainer: {
    "&.MuiGrid-root": {
      flexWrap: "nowrap",
    },
  },
}));

const FooterNav = (_props: Props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid
        container
        item
        className={`${classes.firstChild} ${classes.item}`}
        direction="column"
        spacing={2}
      >
        <Grid item className={classes.heading}>
          {info[0].title}
        </Grid>
        {info[0].data.map((text, index) => {
          return (
            <Grid item key={index}>
              {text}
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        item
        direction="column"
        className={`${classes.item}`}
        spacing={2}
      >
        <Grid item className={classes.heading}>
          {info[1].title}
        </Grid>
        {info[1].data.map((text, index) => {
          return (
            <Grid item key={index}>
              {text}
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        item
        direction="column"
        className={`${classes.item}`}
        spacing={2}
      >
        <Grid item className={classes.heading}>
          {info[2].title}
        </Grid>
        {info[2].data.map((text, index) => {
          return (
            <Grid item key={index}>
              {text}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default FooterNav;
