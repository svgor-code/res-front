import React from "react";
import { styled } from "@mui/system";

const ConfirmedBookingBody = styled("div")({
  marginTop: "35px",
  "@media (max-width:1900px)": {
    marginTop: "20px",
  },
});

const BlockName = styled("span")({
  width: "147px",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#FFFFFF",
});

const ConfirmedBookingColumns = styled("div")({
  display: "flex",
  marginTop: "37px",
  "@media (max-width:1900px)": {
    marginTop: "15px",
  },
});

const CloseSlots = styled("div")({
  width: "467px",
  marginRight: "50px",
  "@media (max-width:1900px)": {
    marginRight: "25px",
  },
});

const CloseSlotBlock = styled("div")({
  height: "89px",
  marginTop: "14px",
  background: "#0F2439",
  border: "0.5px solid #153453",
  borderRadius: "10px",
});

const EmptySlots = styled("div")({
  width: "467px",
});

const EmptySlotsBlock = styled("div")({
  height: "89px",
  marginTop: "14px",
  background: "#081A2C",
  border: "1px dashed #1A3053",
  borderRadius: "10px",
});

const ConfirmedBooking = () => {
  return (
    <ConfirmedBookingBody>
      <BlockName>Confirmed Booking</BlockName>
      <ConfirmedBookingColumns>
        <CloseSlots>
          <CloseSlotBlock />
          <CloseSlotBlock />
          <CloseSlotBlock />
          <CloseSlotBlock />
          <CloseSlotBlock />
          <CloseSlotBlock />
        </CloseSlots>

        <EmptySlots>
          <EmptySlotsBlock />
          <EmptySlotsBlock />
          <EmptySlotsBlock />
          <EmptySlotsBlock />
          <EmptySlotsBlock />
        </EmptySlots>
      </ConfirmedBookingColumns>
    </ConfirmedBookingBody>
  );
};

export default ConfirmedBooking;
