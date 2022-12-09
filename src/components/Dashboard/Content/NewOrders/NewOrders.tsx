import React, { useState } from "react";
import { styled } from "@mui/system";
import notifaction from "src/images/svg/notifaction.svg";

const BlockNewOrders = styled("div")({
  width: "15%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
});

const NewOrdersTable = styled("div")({
  width: "90%",
  textAlign: "center",
  height: "135px",
  background: "linear-gradient(131.87deg, #FFDB1E -16.55%, #FF007A 98.05%)",
  boxShadow: "8px 16px 20px rgba(255, 37, 107, 0.26)",
  border: "1px solid rgba(255, 231, 226, 0.37)",
  borderRadius: "8px",
  margin: "0 auto",
  marginTop: "10px",
  "@media (max-width:1900px)": {
    margin: "0 auto",
    marginTop: "10px",
  },
});

const NewOrdersInfo = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  width: "122%",
  marginLeft: "-18px",
  marginTop: "9px",
});

const NewOrdersInfoSpan = styled("div")({});

const NewOrdersSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#FFFFFF",
});

const NewOrdersInfoImg = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#FFFFFF",
});

const NewOrdersInfoPhoto = styled("img")({});

const NewOrdersNumber = styled("div")({
  marginBottom: "10.3px",
});

const NewOrdersNumberSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "80px",
  lineHeight: "94px",
  letterSpacing: "-0.05em",
  color: "#FFFFFF",
});

const NewOrdersDescr = styled("div")({
  margin: "0 auto",
  textAlign: "center",
  maxWidth: "131px",
  marginTop: "21px",
});

const NewOrdersDescrSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "11px",
  lineHeight: "13px",
  textAlign: "center",
  color: "#7E89A8",
});

export const ViewAll = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
});

export const ViewButton = styled("button")({
  width: "98px",
  height: "30px",
  borderRadius: "5px",
  background: "#073374",
  color: "#FFFFFF",
  cursor: "pointer",
  border: "none",
  "&:hover": {
    transition: "all .3s",
    backgroundColor: "#082350",
  },
});

const NewOrders = () => {
  const [number, setNumber] = useState<string>("25");

  return (
    <BlockNewOrders>
      <NewOrdersTable>
        <NewOrdersInfo>
          <NewOrdersInfoSpan>
            <NewOrdersSpan>New Orders</NewOrdersSpan>
          </NewOrdersInfoSpan>
          <NewOrdersInfoImg>
            <NewOrdersInfoPhoto src={notifaction} alt="notifaction" />
          </NewOrdersInfoImg>
        </NewOrdersInfo>
        <NewOrdersNumber>
          <NewOrdersNumberSpan>{number}</NewOrdersNumberSpan>
        </NewOrdersNumber>
      </NewOrdersTable>

      <NewOrdersDescr>
        <NewOrdersDescrSpan>
          All online incoming orders through app and website
        </NewOrdersDescrSpan>
      </NewOrdersDescr>

      <ViewAll>
        <ViewButton>View All</ViewButton>
      </ViewAll>
    </BlockNewOrders>
  );
};

export default NewOrders;
