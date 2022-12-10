import React from "react";
import { styled } from "@mui/system";
import TotalDeliveryStaff from "src/components/Staff/Content/TotalDeliveryStaff/TotalDeliveryStaff";
import AbsentStaff from "../../components/Staff/Content/AbsentStaff/AbsentStaff";
import DeliveredOrders from "../../components/Dashboard/Content/DeliveredOrders/DeliveredOrders";

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

const Staff = () => {
  return (
    <ContainerStaff>
      <StaffBody>
        <StaffHeader>Manage Staff</StaffHeader>

        <StaffContent>
          <TotalDeliveryStaff />
          <AbsentStaff />
          <DeliveredOrders />
        </StaffContent>
      </StaffBody>
    </ContainerStaff>
  );
};

export default Staff;
