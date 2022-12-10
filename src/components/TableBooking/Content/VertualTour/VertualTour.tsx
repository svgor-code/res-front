import React from "react";
import { styled } from "@mui/system";

const ContainerVertualTour = styled("div")({
  width: "31.5%",
  height: "841px",
  background: "#081A2C",
  border: "0.5px solid #153453",
  borderRadius: "15px",
  marginTop: "84px",
  "@media (max-width:1900px)": {
    width: "30%",
    height: "768px",
    marginTop: "77px",
  },
});

const VertualTour = () => {
  return <ContainerVertualTour>VertualTour</ContainerVertualTour>;
};

export default VertualTour;
