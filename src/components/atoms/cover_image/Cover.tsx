import React from "react";

type Props = {
  link: string;
};

const Cover = (props: Props) => {
  return <img src={props.link} alt="BookCover" height="283" width="286" />;
};

export default Cover;
