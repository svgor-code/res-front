import React from "react";
import { styled } from "@mui/system";

const ContainerTotalDeliveryStaff = styled("div")({
  height: "856px",
  width: "48%",
  background: "#081A2C",
  border: "0.5px solid #153453",
  borderRadius: "10px",
  marginRight: "20px",
  "@media (max-width:1900px)": {
    height: "720px",
    width: "42%",
  },
});

const TotalDeliveryStaff = () => {
  return <ContainerTotalDeliveryStaff></ContainerTotalDeliveryStaff>;
};

export default TotalDeliveryStaff;
