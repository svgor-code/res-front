import React from "react";
import { styled } from "@mui/system";

const InProcessInfoBlock = styled("div")({
  height: "928px",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  "@media (max-width:1900px)": {
    height: "829px",
  },
});
const InProcessInfo = () => {
  return <InProcessInfoBlock></InProcessInfoBlock>;
};

export default InProcessInfo;
