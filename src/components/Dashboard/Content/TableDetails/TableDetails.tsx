import React from "react";
import { styled } from "@mui/system";
import IncomeCard from "src/components/Dashboard/IncomeCard/IncomeCard";

const BlockTableDetails = styled("div")({
  width: "18%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
  "& .MuiBox-root": {
    height: "100%",
    width: "100%",
  },
});

const TableDetails = () => {
  return (
    <BlockTableDetails>
      <IncomeCard />
    </BlockTableDetails>
  );
};

export default TableDetails;
