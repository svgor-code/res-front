import React, { useState } from "react";

import { ModalSpan } from "../ModalSelect/ModalSelect";
import { InputCustom } from "./InputPrice";

const InputPortion = () => {
  const [value, setValue] = useState("");

  //Enter only numbers
  const valueNumber = ({ target: { value } }: any) =>
    setValue((prev) => (/\d+/.test(String(Number(value))) ? value : prev));

  return (
    <div>
      <ModalSpan>Portion</ModalSpan>
      <InputCustom value={value} onChange={valueNumber} maxLength={5} />
    </div>
  );
};

export default InputPortion;
