import React from "react";
import { styled } from "@mui/system";

const BlockTableBooking = styled("div")({
  width: "25%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  "@media (max-width:1900px)": {},
});

const TableBooking = () => {
  return <BlockTableBooking></BlockTableBooking>;
};

export default TableBooking;
