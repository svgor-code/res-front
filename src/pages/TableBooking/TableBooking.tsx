import React from "react";
import { styled } from "@mui/system";
import ConfirmedBooking from "src/components/TableBooking/Content/ConfirmedBooking/ConfirmedBooking";
import TodaysBooking from "src/components/TableBooking/Content/TodaysBooking/TodaysBooking";
import VertualTour from "src/components/TableBooking/Content/VertualTour/VertualTour";

const ContainerTableBooking = styled("div")({
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#030f1c",
});

const TableBookingBody = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
});

const TableBookingLeft = styled("div")({
  marginLeft: "230px",
  "@media (max-width:1900px)": {
    marginLeft: "180px",
  },
});

const TableBooking = () => {
  return (
    <ContainerTableBooking>
      <TableBookingBody>
        <TableBookingLeft>
          <TodaysBooking />
          <ConfirmedBooking />
        </TableBookingLeft>

        <VertualTour />
      </TableBookingBody>
    </ContainerTableBooking>
  );
};

export default TableBooking;
