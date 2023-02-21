import React from "react";
import { styled } from "@mui/system";
import Order from "../../Order";

const IncomingOrdersBlock = styled("div")({
  height: "80vh",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  padding: "6% 5%",
  boxSizing: "border-box",
});

const IncomingOrdersTitle = styled("h2")({
  fontSize: " 16px",
  lineHeight: "21px",
  color: "#FFFFFF",
  marginBottom: "3vh",
});

const IncomingOrdersList = styled("div")({
  border: "1px solid red",
  height: "67vh",
});

const IncomingOrders = () => {
  return (
    <IncomingOrdersBlock>
      <IncomingOrdersTitle>Incoming Orders</IncomingOrdersTitle>
      <IncomingOrdersList>
        <Order />
      </IncomingOrdersList>
    </IncomingOrdersBlock>
  );
};

export default IncomingOrders;
