import React from "react";
import { styled } from "@mui/system";
import Counter from "./Counter";

type Props = {
  image: string;
  name: string;
  amount: number;
};

const OrderBlock = styled("div")({
  borderRadius: "6px",
  //border: "0.5px solid #153453",
  border: "0.5px solid white",
  background: "#0F2439",
  boxSizing: "border-box",
  display: "flex",
});

const ImageOrder = styled("img")({
  width: "50px",
});

const NameOrder = styled("h2")({
  whiteSpace: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18px",
  color: "#7E89A8",
});

const NumberOrders = styled("h2")({
  whiteSpace: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#687490",
});

const Order = ({ image, name, amount }: Props) => {
  return (
    <OrderBlock>
      <ImageOrder src={image} alt={image} />
      <NameOrder>{name}</NameOrder>
      <NumberOrders>{amount}</NumberOrders>
      <Counter number={200} width={1} />
    </OrderBlock>
  );
};

export default Order;
