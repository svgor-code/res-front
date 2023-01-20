import React from "react";
import { styled } from "@mui/system";

const BlockTableDetails = styled("div")({
  width: "17.15%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  "@media (max-width:1900px)": {},
});

const TableDetails = () => {
  return <BlockTableDetails></BlockTableDetails>;
};

export default TableDetails;
