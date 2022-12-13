import React from "react";
import { styled } from "@mui/system";

const InProcessDetailsBlock = styled("div")({
  height: "829px",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  marginTop: "10px",
  "@media (max-width:1900px)": {
    height: "730px",
  },
});

const InProcessDetails = () => {
  return <InProcessDetailsBlock></InProcessDetailsBlock>;
};

export default InProcessDetails;
