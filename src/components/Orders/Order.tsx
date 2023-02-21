import React from "react";
import { styled } from "@mui/system";

const OrderBlock = styled("div")({
  borderRadius: "6px",
  //border: "0.5px solid #153453",
  border: "0.5px solid white",
  background: "#0F2439",
  boxSizing: "border-box",
});

const Order = () => {
  return <OrderBlock></OrderBlock>;
};

export default Order;
