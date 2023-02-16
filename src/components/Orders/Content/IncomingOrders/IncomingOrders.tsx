import React from "react";
import { styled } from "@mui/system";

const IncomingOrdersBlock = styled("div")({
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const IncomingOrders = () => {
  return <IncomingOrdersBlock></IncomingOrdersBlock>;
};

export default IncomingOrders;
