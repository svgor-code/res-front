import React from "react";
import { styled } from "@mui/system";

const OrderStatsBlock = styled("div")({
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const OrderStats = () => {
  return <OrderStatsBlock></OrderStatsBlock>;
};

export default OrderStats;
