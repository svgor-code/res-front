import React from "react";

import { styled } from "@mui/system";

import addIcon from "src/images/svg/addIcon.svg";

const AddImagesContainer = styled("div")({});
const AddImageBlock = styled("button")({
  width: "100px",
  height: "86px",
  background: "#081A2C",
  border: "1px dashed #1A3053",
  borderRadius: "10px",
  cursor: "pointer",
  padding: "0px",
});

const AddImgBlock = styled("img")({
  width: "26px",
});

const AddImages = () => {
  return (
    <AddImagesContainer>
      <AddImageBlock>
        <AddImgBlock src={addIcon} />
      </AddImageBlock>
    </AddImagesContainer>
  );
};

export default AddImages;
