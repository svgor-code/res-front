import React from "react";
import { styled } from "@mui/system";

type Props = {
  amount: number;
  type: string;
};

const NumberOfDishes = ({ amount, type }: Props) => {
  const Dishes = styled("div")({
    width: "160px",
    height: "70px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    background:
      type === "Non-Veg Dishes"
        ? "rgba(0, 242, 82, 0.16)"
        : "rgba(27, 90, 255, 0.16)",

    "@media (max-width:1900px)": {
      margin: "5px",
    },
  });

  const NumberOfDishes = styled("h2")({
    fontWeight: "500",
    fontSize: "32px",
    color: type === "Non-Veg Dishes" ? "#06CB55" : "#1B5AFF",
    marginRight: "3px",
  });

  const DishesTitle = styled("h2")({
    fontWeight: "400",
    fontSize: "14px",
    color: type === "Non-Veg Dishes" ? "#00AB78" : "#1B5AFF",
  });

  return (
    <Dishes>
      <NumberOfDishes>{amount}</NumberOfDishes>
      <DishesTitle>{type}</DishesTitle>
    </Dishes>
  );
};

export default NumberOfDishes;
