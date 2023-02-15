import React from "react";
import { styled } from "@mui/system";

const InProcessInfoBlock = styled("div")({
  height: "100%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const InProcessInfo = () => {
  return <InProcessInfoBlock></InProcessInfoBlock>;
};

export default InProcessInfo;
