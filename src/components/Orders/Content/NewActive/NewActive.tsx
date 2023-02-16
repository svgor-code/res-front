import React from "react";
import { styled } from "@mui/system";
import Counter from "src/components/UI/Counter";

const NewActiveBlock = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  padding: "20px",
});

const NewActiveTitle = styled("h2")({
  fontSize: " 16px",
  lineHeight: "21px",
  color: "#FFFFFF",
});

const NewActive = () => {
  return (
    <NewActiveBlock>
      <NewActiveTitle>New Active Orders</NewActiveTitle>
      <Counter number={29} />
    </NewActiveBlock>
  );
};

export default NewActive;
