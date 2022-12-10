import React, { useState } from "react";
import { styled } from "@mui/system";
import { ViewAll, ViewButton } from "../NewOrders/NewOrders";

const BlockProcessOrders = styled("div")({
  width: "15%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
});

const ProcessOrdersInfo = styled("div")({
  margin: "0 auto",
  marginTop: "24px",
  width: "25%",
  "@media (max-width:1900px)": {
    marginTop: "25px",
  },
});

const ProcessOrdersNumber = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "60px",
  lineHeight: "70px",
  letterSpacing: "-0.05em",
  background: "linear-gradient(94.19deg, #F26522 2.34%, #FF0661 108.74%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const ProcessOrdersBody = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "66%",
  height: "35px",
  margin: "0 auto",
  marginTop: "17px",
  background: "#0F2439",
  borderRadius: "6px",
});

const ProcessOrdersSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#FFFFFF",
});

const ProcessOrdersDescr = styled("div")({
  textAlign: "center",
  width: "128px",
  margin: "0 auto",
  marginTop: "21px",
});

const ProcessOrdersDescrSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "11px",
  lineHeight: "13px",
  textAlign: "center",
  color: "#7E89A8",
});

const ProcessOrders = () => {
  const [number, setNumber] = useState<number>(12);

  return (
    <BlockProcessOrders>
      <ProcessOrdersInfo>
        <ProcessOrdersNumber>{number}</ProcessOrdersNumber>
      </ProcessOrdersInfo>

      <ProcessOrdersBody>
        <ProcessOrdersSpan>On Process Orders</ProcessOrdersSpan>
      </ProcessOrdersBody>

      <ProcessOrdersDescr>
        <ProcessOrdersDescrSpan>
          All online incoming orders through app and website
        </ProcessOrdersDescrSpan>
      </ProcessOrdersDescr>

      <ViewAll>
        <ViewButton>View All</ViewButton>
      </ViewAll>
    </BlockProcessOrders>
  );
};

export default ProcessOrders;
