import React from "react";
import { styled } from "@mui/system";

const InProcessDetailsBlock = styled("div")({
  height: "80vh",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const InProcessDetails = () => {
  return <InProcessDetailsBlock></InProcessDetailsBlock>;
};

export default InProcessDetails;
