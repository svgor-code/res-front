import React from "react";
import { styled } from "@mui/system";
import { NameDashboardItem } from "src/components/styledComponents";

const BlockTableDishes = styled("div")({
  width: "21%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  padding: "10px  25px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
    width: "24%",
  },
});

const TableDishes = () => {
  return (
    <BlockTableDishes>
      <NameDashboardItem>Today’s Offered Dishes</NameDashboardItem>
    </BlockTableDishes>
  );
};

export default TableDishes;
