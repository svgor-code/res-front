import React, { useState } from "react";

import { styled } from "@mui/system";

import { ModalSpan } from "../ModalSelect/ModalSelect";

export const InputCustom = styled("input")({
  borderRadius: "4%",
  border: "1px solid #2C4359",
  fontSize: " 25px",
  padding: "0px",
  width: "166px",
  height: "69px",
  textAlign: "center",
  background: "#030F1B",
  color: "#FFFFFF",
  outline: "none",
  marginTop: "12px",
});

const InputPrice = () => {
  const [value, setValue] = useState("");

  //Enter only numbers
  const valueNumber = ({ target: { value } }: any) =>
    setValue((prev) => (/\d+/.test(String(Number(value))) ? value : prev));

  return (
    <div>
      <ModalSpan>Price (In Rupees)</ModalSpan>
      <InputCustom value={value} onChange={valueNumber} maxLength={5} />
    </div>
  );
};

export default InputPrice;
