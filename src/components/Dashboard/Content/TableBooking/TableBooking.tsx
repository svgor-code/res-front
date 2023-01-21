import React from "react";
import { styled } from "@mui/system";

const BlockTableBooking = styled("div")({
  width: "27%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  "@media (max-width:1900px)": {
    width: "60%",
  },
  "@media (max-width: 1166px)": {
    width: "58%",
  },
  "@media (max-width: 830px)": {
    width: "48%",
  },

  "@media (max-width:785px)": {
    width: "47%",
  },
  "@media (max-width:740px)": {
    width: "91%",
  },
});

const TableBooking = () => {
  return <BlockTableBooking></BlockTableBooking>;
};

export default TableBooking;
