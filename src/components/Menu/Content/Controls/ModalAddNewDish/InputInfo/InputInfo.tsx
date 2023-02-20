import React from "react";

import InputPrice from "./InputPrice";
import InputPortion from "./InputPortion";

import { styled } from "@mui/system";

const InputContainer = styled("div")({
  display: "flex",
  width: "350px",
  marginBottom: "36px",
  marginTop: "43px",
});

const InputInfo = () => {
  return (
    <InputContainer>
      <InputPrice />
      <InputPortion />
    </InputContainer>
  );
};

export default InputInfo;
