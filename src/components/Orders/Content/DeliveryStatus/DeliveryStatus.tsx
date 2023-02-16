import React from "react";
import { styled } from "@mui/system";

const DeliveryStatusBlock = styled("div")({
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const DeliveryStatusInfo = styled("div")({
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
});

const DeliveryStatus = () => {
  return (
    <DeliveryStatusBlock>
      <DeliveryStatusInfo></DeliveryStatusInfo>
    </DeliveryStatusBlock>
  );
};

export default DeliveryStatus;
