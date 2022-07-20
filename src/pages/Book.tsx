import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Template from "../components/templates/Template";
import { CardModel } from "../model/CardModel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import ButtonBook from "../components/molecules/buttons/ButtonBook";
import Link from "@mui/material/Link";
import TabsBook from "../components/molecules/tabs/TabsBook";
import Cover from "../components/atoms/cover_image/Cover";
import { useStyles } from "../Themes/BookTheme";
import { BOOK } from "../model/Constants";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

const Body: FC = (_props: Props) => {
  const [bookData, setBookData] = useState<CardModel>();
  const [readNow, setReadNow] = useState<boolean>(true);
  const classes = useStyles();
  const navigate = useNavigate();

  let { id } = useParams();
  if (id === undefined) id = "11";

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/books/${id}`);
      const temp = response.data;
      setBookData(temp);
      if (temp.state === "added to lib") {
        setReadNow(false);
      } else {
        setReadNow(true);
      }
    })();
  }, [id]);

  const handleReadNowClick = async () => {
    if (bookData !== undefined) {
      await axios.put(`http://localhost:3000/books/${bookData.id}`, {
        ...bookData,
        state: "added to lib",
      });
      navigate("/");
    }
  };

  return bookData !== undefined ? (
    <Box className={classes.mainContainer}>
      <Typography className={classes.bookComment}>{BOOK.comment}</Typography>
      <Box className={classes.flexCoverContainer}>
        <Box className={classes.bodyLeftContainer}>
          <Typography variant="h2" className={classes.bookTitle}>
            {bookData.title} 2.0
          </Typography>
          <Typography className={classes.bookCaption}>
            {BOOK.caption}
          </Typography>
          <Typography className={classes.bookAuthor}>
            By {bookData.author}
          </Typography>
          <Box className={classes.bookTimeContainer}>
            <AccessTimeIcon
              sx={{
                width: "20px",
                height: "20px",
                display: "inline-block",
                position: "relative",
                top: "5px",
              }}
            />
            <Typography
              sx={{
                position: "relative",
                top: "0px",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "17.6px",
                color: "#6D787E",
                display: "inline-block",
              }}
            >
              {" "}
              {bookData.time}
            </Typography>
          </Box>
          <Box className={classes.flexLinksContainer}>
            <Button
              disabled={!readNow}
              variant="outlined"
              color={"inherit"}
              className={classes.readBtn}
              onClick={() => handleReadNowClick()}
            >
              Read now
            </Button>
            <ButtonBook bookData={bookData} disable={readNow} />
            <Box className={classes.linkContainer}>
              <Link className={classes.link}>Send to Kindle</Link>
              <ArrowForwardIcon className={classes.arrowIcon} />
            </Box>
          </Box>
        </Box>
        <Box>
          <Cover link={bookData.image} />
        </Box>
      </Box>
      <TabsBook />
      <span className={classes.span}></span>
    </Box>
  ) : (
    <Box></Box>
  );
};

const Book = (_props: Props) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  });
  return <Template children={<Body />} />;
};

export default Book;
