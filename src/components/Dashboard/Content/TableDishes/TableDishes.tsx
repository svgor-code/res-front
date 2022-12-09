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

const NonVegDishes = styled("div")({
  width: "150px",
  borderRadius: "10px",
  background: "#061321",
});

const NumberOfDishes = styled("h2")({
  fontWeight: "500",
  fontSize: "32px",
  color: "#06CB55",
});

const DishesTitle = styled("h2")({
  fontWeight: "500",
  fontSize: "32px",
  color: "#06CB55",
});

const TableDishes = () => {
  return (
    <BlockTableDishes>
      <NameDashboardItem>Today’s Offered Dishes</NameDashboardItem>
      <NonVegDishes>
        <NumberOfDishes>12</NumberOfDishes>
      </NonVegDishes>
    </BlockTableDishes>
  );
};

export default TableDishes;
