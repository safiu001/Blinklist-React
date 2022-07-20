import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";

type Props = {
  time: string;
};

const BookCardTime = (props: Props) => {
  return (
    <div>
      <AccessTimeIcon
        sx={{
          width: "16.67px",
          height: "16.67px",
          display: "inline-block",
          position: "relative",
          top: "3.0px",
        }}
      />
      <Typography
        sx={{
          position: "relative",
          top: "0px",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6D787E",
          display: "inline-block",
        }}
      >
        {" "}
        {props.time}
      </Typography>
    </div>
  );
};

export default BookCardTime;
