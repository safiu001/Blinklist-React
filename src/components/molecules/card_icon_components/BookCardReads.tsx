import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Typography from "@mui/material/Typography";

type Props = {
  reads: string;
};

const BookCardReads = (props: Props) => {
  return (
    <div>
      <PersonOutlineOutlinedIcon
        sx={{
          display: "inline-block",
          width: "16px",
          height: "18px",
          position: "relative",
          top: "3.5px",
        }}
      />
      <Typography
        sx={{
          position: "relative",
          top: "0px",
          display: "inline-block",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6D787E",
        }}
      >
        {props.reads}{" "}
      </Typography>
    </div>
  );
};

export default BookCardReads;
