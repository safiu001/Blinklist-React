import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/system/Box";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/molecules/banner/Banner";
import SearchBar from "../components/molecules/searchbar/SearchBar";
import CardsGrid from "../components/organisms/cards_grid/CardsGrid";
import Template from "../components/templates/Template";
import { CardModel } from "../model/CardModel";

type Props = {};

const useStyles = makeStyles((_theme: Theme) => ({
  headings: {
    color: "#03314B",
    "&.MuiTypography-root": {
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30px",
      marginLeft: "17%",
    },
  },
}));

const Body: FC = () => {
  const [featured, setFeatured] = useState<CardModel[]>([]);
  const [trend, setTrend] = useState<CardModel[]>([]);
  const [justAdded, setJustAdded] = useState<CardModel[]>([]);
  const [data, setData] = useState<CardModel[]>([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/books");
      const temp = await response.data;
      const featuredTemp = temp.filter(
        (val: CardModel) => val.category === "Featured audio blinks"
      );
      const trendTemp = temp.filter(
        (val: CardModel) => val.category === "Trending blinks"
      );
      const justAddedTemp = temp.filter(
        (val: CardModel) => val.category === "Just added"
      );

      setFeatured(featuredTemp);
      setTrend(trendTemp);
      setJustAdded(justAddedTemp);
      setData(temp);
    })();
  }, []);

  const handleChange = (card: CardModel) => {
    if (card.category === "Trending blinks") {
      const temp = mapChanged(trend, card);
      setTrend(temp);
    } else if (card.category === "Just added") {
      const temp = mapChanged(justAdded, card);
      setJustAdded(temp);
    } else {
      const temp = mapChanged(featured, card);
      setFeatured(temp);
    }
  };

  const mapChanged = (data: CardModel[], card: CardModel) => {
    return data.map((val) => {
      if (val.id === card.id) {
        return card;
      } else {
        return val;
      }
    });
  };

  const handleSearch = (query: string) => {
    const compareWithQuery = (word: string) => {
      if (word.toUpperCase().indexOf(query.toUpperCase()) > -1) {
        return true;
      } else {
        return false;
      }
    };
    const featuredTemp = data.filter(
      (val: CardModel) =>
        val.category === "Featured audio blinks" &&
        (compareWithQuery(val.author) || compareWithQuery(val.title))
    );
    const trendTemp = data.filter(
      (val: CardModel) =>
        val.category === "Trending blinks" &&
        (compareWithQuery(val.author) || compareWithQuery(val.title))
    );
    const justAddedTemp = data.filter(
      (val: CardModel) =>
        val.category === "Just added" &&
        (compareWithQuery(val.author) || compareWithQuery(val.title))
    );

    setFeatured(featuredTemp);
    setTrend(trendTemp);
    setJustAdded(justAddedTemp);
  };

  const classes = useStyles();
  return (
    <Box>
      <Banner />
      <SearchBar onSearch={(query: string) => handleSearch(query)} />
      {trend.length > 0 && (
        <Typography variant="h3" className={classes.headings}>
          Trending blinks
        </Typography>
      )}
      <CardsGrid
        data={trend}
        category={true}
        onAdded={(card: CardModel) => {
          handleChange(card);
        }}
      />
      {justAdded.length > 0 && (
        <Typography variant="h3" className={classes.headings}>
          Just added
        </Typography>
      )}
      <CardsGrid
        data={justAdded}
        category={true}
        onAdded={(card: CardModel) => {
          handleChange(card);
        }}
      />
      {featured.length > 0 && (
        <Typography variant="h3" className={classes.headings}>
          Featured audio blinks
        </Typography>
      )}
      <CardsGrid
        data={featured}
        category={true}
        onAdded={(card: CardModel) => {
          handleChange(card);
        }}
      />
    </Box>
  );
};

const Category = (_props: Props) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  });
  return (
    <Template>
      <Body />
    </Template>
  );
};

export default Category;
