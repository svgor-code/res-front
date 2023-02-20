import React from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(() => ({
  width: "100%",
  height: "74px",
  background: "linear-gradient(94.19deg, #F26522 2.34%, #FF0661 108.74%)",
  fontSize: "18px",
  lineHeight: "26px",
  textTransform: "capitalize",
  color: "#FFFFFF",
}));

const NewDish = () => {
  return (
    <div>
      <ColorButton variant="contained">Add new dish</ColorButton>
    </div>
  );
};

export default NewDish;
