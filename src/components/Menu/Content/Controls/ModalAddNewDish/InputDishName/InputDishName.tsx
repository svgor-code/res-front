import React from "react";

import TextField from "@mui/material/TextField";

import { ModalSpan } from "src/components/Menu/Content/Controls/ModalAddNewDish/ModalSelect/ModalSelect";

const InputDishName = () => {
  return (
    <>
      <ModalSpan>Enter Dish Name</ModalSpan>
      <TextField
        fullWidth
        label=""
        autoComplete={"off"}
        id="fullWidth"
        sx={{
          marginTop: "12px",
          marginBottom: "40px",
          "& .MuiOutlinedInput-root": {
            color: "#FFFFFF",
            borderColor: "#2C4359",
            "& fieldset": {
              borderColor: "#2C4359",
            },
            "&:hover fieldset": {
              borderColor: "#2C4359",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2C4359",
            },
          },
        }}
      />
    </>
  );
};

export default InputDishName;
