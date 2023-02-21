import React from "react";
import { styled } from "@mui/system";

const OrderStatsBlock = styled("div")({
  height: "44vh",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  marginTop: "1.5vh",
});

const OrderStats = () => {
  return <OrderStatsBlock></OrderStatsBlock>;
};

export default OrderStats;
