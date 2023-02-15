import React from "react";
import { styled } from "@mui/system";

const DeliveryProcessBlock = styled("div")({
  height: "10%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const DeliveryProcess = () => {
  return <DeliveryProcessBlock></DeliveryProcessBlock>;
};

export default DeliveryProcess;
