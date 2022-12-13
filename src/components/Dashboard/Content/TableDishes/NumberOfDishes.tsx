import React from "react";
import { styled } from "@mui/system";

type Props = {
  amount: number;
  type: string;
};

const Dishes = styled("div")<Props>(({ type }) => ({
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
}));

const AmountDishes = styled("h2")<Props>(({ type }) => ({
  fontWeight: "500",
  fontSize: "32px",
  color: type === "Non-Veg Dishes" ? "#06CB55" : "#1B5AFF",
  marginRight: "3px",
}));

const DishesTitle = styled("h2")<Props>(({ type }) => ({
  fontWeight: "400",
  fontSize: "14px",
  color: type === "Non-Veg Dishes" ? "#00AB78" : "#1B5AFF",
}));

const NumberOfDishes = ({ amount, type }: Props) => {
  return (
    <Dishes amount={0} type={type}>
      <AmountDishes amount={0} type={type}>
        {amount}
      </AmountDishes>
      <DishesTitle type={type} amount={0}>
        {type}
      </DishesTitle>
    </Dishes>
  );
};

export default NumberOfDishes;
