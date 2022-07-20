import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabsBlinkList from "../components/molecules/tabs/TabsBlinkList";
import Template from "../components/templates/Template";
import { CardModel } from "../model/CardModel";
import { HOME_HEADING } from "../model/Constants";

type Props = {};

const useStyles = makeStyles((_theme: Theme) => ({
  heading: {
    paddingLeft: "19%",
    "&.MuiTypography-root": {
      marginTop: "59px",
      marginBottom: "45px",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
  },
}));

const Body: FC = (_props: Props) => {
  const [data, setData] = useState<CardModel[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/books");
      setData(response.data);
    })();
  }, []);

  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h1" className={classes.heading}>
        {HOME_HEADING}
      </Typography>
      <TabsBlinkList data={data} />
    </Box>
  );
};

const Home = (_props: Props) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  });
  return <Template children={<Body />} />;
};

export default Home;
