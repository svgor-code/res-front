import React from "react";
import { styled } from "@mui/system";

const CounterBlock = styled("div")({
  width: "13%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#122642c2",
  borderRadius: "10px",
  padding: "3%",
});

const CounterTotal = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "25px",
  lineHeight: "29px",
  background: "linear-gradient(152.1deg, #3353FA 0%, #FA33CE 109.04%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

type Props = {
  number: number;
};

const Counter = ({ number }: Props) => {
  return (
    <CounterBlock>
      <CounterTotal>{number}</CounterTotal>
    </CounterBlock>
  );
};

export default Counter;
