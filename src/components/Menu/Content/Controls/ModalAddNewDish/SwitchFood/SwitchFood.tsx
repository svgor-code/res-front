import React from "react";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

import { ModalSpan } from "../ModalSelect/ModalSelect";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 91,
  height: 38,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    marginLeft: 10,
    marginTop: 3.5,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(42px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 29,
    height: 29,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "dark" ? "#01B7B2" : "#05A4A0",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const ControlBlock = styled("div")({
  marginTop: "25px",
  marginBottom: "20px",
});

const SwitchFood = () => {
  return (
    <div>
      <ModalSpan style={{ color: "#FFFFFF", fontStyle: "16px" }}>
        Food Type
      </ModalSpan>
      <ControlBlock>
        <ModalSpan style={{ fontSize: "16px", color: "#5A7DA0" }}>
          Veg
        </ModalSpan>
        <FormControlLabel
          control={<IOSSwitch defaultChecked />}
          label=""
          style={{
            marginRight: "15px",
            marginLeft: "15px",
          }}
        />
        <ModalSpan style={{ fontSize: "16px", color: "#5A7DA0" }}>
          Non-Veg
        </ModalSpan>
      </ControlBlock>
    </div>
  );
};

export default SwitchFood;
