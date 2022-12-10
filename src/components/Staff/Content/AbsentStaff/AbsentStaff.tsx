import React from "react";
import { styled } from "@mui/system";

const ContainerAbsentStaff = styled("div")({
  height: "856px",
  width: "28%",
  background: "#081A2C",
  border: "0.5px solid #153453",
  borderRadius: "10px",
  marginRight: "20px",
  "@media (max-width:1900px)": {
    height: "720px",
    width: "24%",
  },
});

const AbsentStaff = () => {
  return <ContainerAbsentStaff></ContainerAbsentStaff>;
};

export default AbsentStaff;
