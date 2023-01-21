import React from "react";
import { styled } from "@mui/system";

const BlockTableDetails = styled("div")({
  width: "18%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  "@media (max-width:1900px)": {
    width: "36.5%",
  },

  "@media (max-width: 1166px)": {
    width: "38.8%",
  },
  "@media (max-width:740px)": {
    width: "97%",
  },
});

const TableDetails = () => {
  return <BlockTableDetails></BlockTableDetails>;
};

export default TableDetails;
