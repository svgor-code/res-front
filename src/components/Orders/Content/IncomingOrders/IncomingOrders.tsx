import React from "react";
import { styled } from "@mui/system";

const IncomingOrdersBlock = styled("div")({
  height: "90%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  marginTop: "10px",
});

const IncomingOrders = () => {
  return <IncomingOrdersBlock></IncomingOrdersBlock>;
};

export default IncomingOrders;
