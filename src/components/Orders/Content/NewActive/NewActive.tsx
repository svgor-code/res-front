import React from "react";
import { styled } from "@mui/system";
import Counter from "src/components/Orders/Counter";

const NewActiveBlock = styled("div")({
  height: "8vh",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  marginBottom: "1.5vh",
  padding: "2% 4% 2% 6%",
  boxSizing: "border-box",
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
      <Counter number={29} width={13} />
    </NewActiveBlock>
  );
};

export default NewActive;
