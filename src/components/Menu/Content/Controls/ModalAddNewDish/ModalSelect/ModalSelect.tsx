import React, { useState } from "react";

import { styled } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectBody = styled("div")({});
export const ModalSpan = styled("span")({
  fontFamily: "Roboto",
  fontSize: "normal",
  fontWeight: "400",
  fontStyle: "16px",
  lineHeight: "19px",
  color: "#5A7DA0",
});

const ModalSelect = () => {
  const [age, setAge] = useState("");
  const select = [
    { id: 0, name: "Caper and chickpea pasta1", value: 0 },
    { id: 1, name: "Caper and chickpea pasta2", value: 10 },
    { id: 2, name: "Caper and chickpea pasta3", value: 20 },
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <SelectBody>
      <ModalSpan>Select from the privious list</ModalSpan>
      <FormControl
        sx={{
          minWidth: 276,
          marginTop: "15px",
          "& .MuiOutlinedInput-root": {
            color: "white",
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
          "& .MuiFormControl-root": {
            margin: "0px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            letterSpacing: "4px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#FFFFFF",
          },
          "& .MuiInputLabel-root": {
            color: "#FFFFFF",
          },
          "& .MuiInputBase-root": {
            color: "#FFFFFF",
          },
          "svg.MuiSvgIcon-root": {
            fill: "#5A7DA0",
          },
        }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {select.map((s) => (
            <MenuItem value={s.value}>{s.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectBody>
  );
};

export default ModalSelect;
