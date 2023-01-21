import React, { useState } from "react";
import { styled } from "@mui/system";
import { ViewAll, ViewButton } from "src/components/UI/commonStyles";

const BlockDeliveredOrders = styled("div")({
  width: "15%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  paddingBottom: "2%",

  "@media (max-width:1900px)": {
    width: "31.8%",
  },

  "@media (max-width:800px)": {
    width: "30%",
  },
  "@media (max-width:650px)": {
    width: "91%",
  },
});

const DeliveredOrdersInfo = styled("div")({
  margin: "0 auto",
  marginTop: "24px",
  width: "25%",
  "@media (max-width:1900px)": {
    marginTop: "25px",
  },
});

const DeliveredOrdersNumber = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "60px",
  lineHeight: "70px",
  letterSpacing: "-0.05em",
  background: "linear-gradient(94.19deg, #F26522 2.34%, #FF0661 108.74%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const DeliveredOrdersBody = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "66%",
  height: "35px",
  margin: "0 auto",
  marginTop: "17px",
  background: "rgba(20, 204, 116, 0.2)",
  borderRadius: "6px",
});

const DeliveredOrdersSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#20A867",
});

const DeliveredOrdersDescr = styled("div")({
  textAlign: "center",
  width: "128px",
  margin: "0 auto",
  marginTop: "21px",
});

const DeliveredOrdersDescrSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "11px",
  lineHeight: "13px",
  textAlign: "center",
  color: "#7E89A8",
});

const DeliveredOrders = () => {
  const [number, setNumber] = useState("07");
  return (
    <BlockDeliveredOrders>
      <DeliveredOrdersInfo>
        <DeliveredOrdersNumber>{number}</DeliveredOrdersNumber>
      </DeliveredOrdersInfo>

      <DeliveredOrdersBody>
        <DeliveredOrdersSpan>Order Delivered</DeliveredOrdersSpan>
      </DeliveredOrdersBody>

      <DeliveredOrdersDescr>
        <DeliveredOrdersDescrSpan>
          All online incoming orders through app and website
        </DeliveredOrdersDescrSpan>
      </DeliveredOrdersDescr>

      <ViewAll>
        <ViewButton>View All</ViewButton>
      </ViewAll>
    </BlockDeliveredOrders>
  );
};

export default DeliveredOrders;
