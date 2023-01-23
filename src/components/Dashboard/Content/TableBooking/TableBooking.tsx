import React from "react";
import { styled } from "@mui/system";

const BlockTableBooking = styled("div")({
  width: "27%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  "@media (max-width:1900px)": { width: "60%" },
  "@media (max-width: 1200px)": { width: "58%" },
  "@media (max-width: 992px)": { width: "54.6%" },
  "@media (max-width:768px)": { width: "50.8%" },
  "@media (max-width:576px)": { width: "97.5%" },
});

const TableBooking = () => {
  return <BlockTableBooking></BlockTableBooking>;
};

export default TableBooking;
