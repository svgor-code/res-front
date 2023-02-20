import React from "react";

import { styled } from "@mui/system";

import addIcon from "src/images/svg/addIcon.svg";

const NewDishBody = styled("div")({
  marginBottom: "37px",
});

const NewDishButton = styled("button")({
  display: "flex",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  background: "none",
  padding: "0px",
});

const NewDishButtonSpan = styled("span")({
  fontSize: "20px",
  lineHeight: "23px",
  textTransform: "capitalize",
  color: "#FFFFFF",
});

const AddImg = styled("img")({
  transform: "translateX(13px)",
  width: "38px",
});

const ButtonNewDish = () => {
  return (
    <NewDishBody>
      <NewDishButton>
        <NewDishButtonSpan> Or Add new dish</NewDishButtonSpan>
        <AddImg src={addIcon} />
      </NewDishButton>
    </NewDishBody>
  );
};

export default ButtonNewDish;
