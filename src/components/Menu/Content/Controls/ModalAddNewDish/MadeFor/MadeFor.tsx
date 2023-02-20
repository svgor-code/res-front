import React from "react";

import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { ModalSpan } from "../ModalSelect/ModalSelect";

const BpIcon = styled("span")(() => ({
  borderRadius: 8,
  width: 59,
  height: 55,
  background: "#030F1B",
  padding: "0px",
  border: "2px solid #2C4359",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#05A4A0",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 36,
    height: 36,
    marginRight: 2,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#05A4A0",
  },
});

const MadeForBlocks = styled("div")({
  display: "flex",
  marginTop: "15px",
});

const MadeForCheckBox = styled("div")({
  textAlign: "center",
});

// Inspired by blueprintjs
function BpCheckbox() {
  return (
    <Checkbox
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
    />
  );
}

const MadeFor = () => {
  return (
    <div>
      <div>
        <ModalSpan style={{ color: "#FFFFFF", fontStyle: "16px" }}>
          Made for
        </ModalSpan>
      </div>
      <MadeForBlocks>
        <MadeForCheckBox>
          <div>
            <ModalSpan style={{ fontSize: "16px", color: "#5A7DA0" }}>
              Breakfast
            </ModalSpan>
          </div>
          <BpCheckbox />
        </MadeForCheckBox>
        <MadeForCheckBox>
          <div>
            <ModalSpan style={{ fontSize: "16px", color: "#5A7DA0" }}>
              Lunch
            </ModalSpan>
          </div>
          <BpCheckbox />
        </MadeForCheckBox>
        <MadeForCheckBox>
          <div>
            <ModalSpan style={{ fontSize: "16px", color: "#5A7DA0" }}>
              Dinner
            </ModalSpan>
          </div>
          <BpCheckbox />
        </MadeForCheckBox>
      </MadeForBlocks>
    </div>
  );
};

export default MadeFor;
