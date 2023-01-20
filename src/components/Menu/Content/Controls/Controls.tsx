import React from "react";
import { styled } from "@mui/system";
import addIcon from "src/images/svg/addIcon.svg";
import phoneIcon from "src/images/svg/phoneIcon.svg";

const BlockControlsBody = styled("div")({
  marginTop: "133px",
  width: "21%",
});

const BlockControlsAdd = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "21px",
  height: "216px",
  background: "#0F2439",
  borderRadius: "12px",
});

const ControlsAddFromList = styled("div")({
  textAlign: "center",
});

const ControlsAddFromButton = styled("button")({
  background: "none",
  border: "none",
  cursor: "pointer",
});

const ControlsAddFromButtonIcon = styled("img")({
  width: "38px",
  transition: ".3s",
  "&:hover": {
    width: "43px",
    transition: ".3s",
  },
});

const ControlsTitle = styled("div")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "23px",
  color: "#C3EAE9",
});

const BlockCallKitchen = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "8px",
  height: "74px",
  background: "#05A4A0",
  // opacity: "0.2",
  borderRadius: "12px",
});

const CallKitchenBody = styled("div")({
  display: "flex",
});
const CallKitchenIcon = styled("img")({});
const CallKitchenTitle = styled("div")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "23px",
  marginLeft: "20px",
  // color: "#559EAD",
});

const Controls = () => {
  return (
    <BlockControlsBody>
      <BlockControlsAdd>
        <ControlsAddFromList>
          <ControlsAddFromButton>
            <ControlsAddFromButtonIcon src={addIcon} />
          </ControlsAddFromButton>
          <ControlsTitle>Add from the list</ControlsTitle>
        </ControlsAddFromList>
      </BlockControlsAdd>
      <BlockControlsAdd>
        <ControlsAddFromList>
          <ControlsAddFromButton>
            <ControlsAddFromButtonIcon src={addIcon} />
          </ControlsAddFromButton>
          <ControlsTitle>Add New Dish</ControlsTitle>
        </ControlsAddFromList>
      </BlockControlsAdd>
      <BlockCallKitchen>
        <CallKitchenBody>
          <CallKitchenIcon src={phoneIcon} />
          <CallKitchenTitle>Call Kitchen</CallKitchenTitle>
        </CallKitchenBody>
      </BlockCallKitchen>
    </BlockControlsBody>
  );
};

export default Controls;
