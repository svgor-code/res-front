import React from "react";
import { styled } from "@mui/system";

const BlockTableDetails = styled("div")({
  width: "18%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  "@media (max-width:1900px)": { width: "37.5%" },
  "@media (max-width: 1200px)": { width: "38.4%" },
  "@media (max-width: 992px)": {},
  "@media (max-width:768px)": { width: "40.4%" },
  "@media (max-width:576px)": { width: "97.5%" },
});

const TableDetails = () => {
  return <BlockTableDetails></BlockTableDetails>;
};

export default TableDetails;
