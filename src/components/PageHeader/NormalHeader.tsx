import React from "react";
import { styled } from "@mui/system";

const NormalHeaderBlock = styled("div")({
  width: "100%",
  height: "7%",
  background: "#081A2C",
});

const NormalHeader = () => {
  return <NormalHeaderBlock></NormalHeaderBlock>;
};

export default NormalHeader;
