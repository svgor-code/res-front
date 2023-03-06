import React from "react";
import { styled } from "@mui/system";

type Props = {
  number: number;
  width: number;
};
const CounterBlock = styled("div")<Props>(({ width }) => ({
  width: `${width}%`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#122642c2",
  borderRadius: "10px",
  padding: "3%",
}));

const CounterTotal = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "25px",
  lineHeight: "29px",
  background: "linear-gradient(152.1deg, #3353FA 0%, #FA33CE 109.04%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Counter = ({ number }: Props) => {
  return (
    <CounterBlock number={0} width={0}>
      <CounterTotal>{number}</CounterTotal>
    </CounterBlock>
  );
};

export default Counter;
