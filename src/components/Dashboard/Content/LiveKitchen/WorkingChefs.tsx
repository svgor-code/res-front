import React from "react";
import { styled } from "@mui/material";
import toque from "src/images/svg/toque.svg";
import shirt from "src/images/svg/shirt.svg";

const BlockWorkingСhefs = styled("div")({
  width: "173px",
  height: "56px",
  background: "#0F2439",
  borderRadius: "7px",
  margin: "20px 0 0 0",
  boxSizing: "border-box",
  padding: "10px 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width:1900px)": {
    width: "133px",
    justifyContent: "space-evenly",
  },
});

const ChefImage = styled("div")({});

const Toque = styled("img")({
  marginLeft: "2px",
  display: "block",
  "@media (max-width:1900px)": {
    marginLeft: "2px",
    display: "block",
    width: "12px",
  },
});

const Shirt = styled("img")({
  display: "block",
  "@media (max-width:1900px)": {
    width: "16px",
  },
});

const NumberOfChefs = styled("div")({
  width: "36px",
  height: "16px",
  background: "#4B2C57",
  borderRadius: "3px",
  fontWeight: "700",
  fontSize: "10px",
  color: "#FA59C7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width:1900px)": {
    width: "24px",
    height: "12px",
  },
});

const WorkingChefsTitle = styled("h2")({
  fontFamily: "Roboto",
  fontWeight: "400",
  fontSize: "13px",
  color: "#7E89A8",
  "@media (max-width:1900px)": {
    fontSize: "10px",
  },
});

const WorkingСhefs = () => {
  return (
    <BlockWorkingСhefs>
      <ChefImage>
        <Toque src={toque} alt="toque" />
        <Shirt src={shirt} alt="shirt" />
      </ChefImage>
      <NumberOfChefs>05</NumberOfChefs>
      <WorkingChefsTitle>Chef Working</WorkingChefsTitle>
    </BlockWorkingСhefs>
  );
};

export default WorkingСhefs;
