import React from "react";
import { styled } from "@mui/system";

const OrderStatsBlock = styled("div")({
  height: "495px",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  "@media (max-width:1900px)": {
    height: "400px",
  },
});

const OrderStats = () => {
  return <OrderStatsBlock></OrderStatsBlock>;
};

export default OrderStats;
