import React from "react";
import { styled } from "@mui/system";
import { BlockName } from "src/components/Dashboard/Content/TableRecipe/TableRecipe";

const BlockTodaysBooking = styled("div")({
  paddingTop: "27px",
});

const BlockTodaysBookingBody = styled("div")({
  display: "flex",
  marginTop: "37px",
  height: "83px",
  "@media (max-width:1900px)": {
    marginTop: "30px",
  },
});

const ReservedTableBlock = styled("div")({
  width: "467px",
  background: "#081A2C",
  border: "0.5px solid #153453",
  borderRadius: "6px",
  marginRight: "50px",
  "@media (max-width:1900px)": {
    marginRight: "25px",
  },
});

const FreeSlots = styled("div")({
  width: "467px",
  background: "#081A2C",
  border: "0.5px solid #153453",
  borderRadius: "6px",
});

const TodaysBooking = () => {
  return (
    <BlockTodaysBooking>
      <BlockName>Today’s Booking</BlockName>
      <BlockTodaysBookingBody>
        <ReservedTableBlock />
        <FreeSlots />
      </BlockTodaysBookingBody>
    </BlockTodaysBooking>
  );
};

export default TodaysBooking;
