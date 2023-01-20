import React, { useState } from "react";
import { styled } from "@mui/system";
import TotalDeliveryStaff from "src/components/Staff/Content/TotalDeliveryStaff/TotalDeliveryStaff";
import AbsentStaff from "src/components/Staff/Content/AbsentStaff/AbsentStaff";
import { ViewAll, ViewButton } from "../../components/UI/commonStyles";

const ContainerStaff = styled("div")({
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#030f1c",
});

const StaffBody = styled("div")({
  marginLeft: "220px",
  paddingTop: "27px",
});

const StaffHeader = styled("div")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#FFFFFF",
});

const StaffContent = styled("div")({
  display: "flex",
  marginTop: "30px",
});

const BlockDeliveredOrders = styled("div")({
  width: "15%",
  height: "285px",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
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

const Staff = () => {
  const [number, setNumber] = useState("07");
  return (
    <ContainerStaff>
      <StaffBody>
        <StaffHeader>Manage Staff</StaffHeader>

        <StaffContent>
          <TotalDeliveryStaff />
          <AbsentStaff />
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
        </StaffContent>
      </StaffBody>
    </ContainerStaff>
  );
};

export default Staff;
