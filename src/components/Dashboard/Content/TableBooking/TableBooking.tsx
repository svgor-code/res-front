import React from "react";
import { styled } from "@mui/system";

import { Box, Typography } from "@mui/material";

type Props = {
  totalBooking: number;
  people: number;
  specialRequest: number;
};

const BlockTableBooking = styled("div")({
  width: "25%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
});
const TitleTypography = styled("div")({
  color: "#FFFFFF",
  width: "90%",
  textAlign: "start",
  padding: "30px 0 0 20px",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: 18,
});
const ContentBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  margin: "7% 0 0 0",
  fontSize: 21,
});
const WrapperBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 10px 0 10px",
  "& .MuiBox-root": {
    color: "#FFFFFF",
    backgroundColor: "#0F2439",
    borderRadius: "10px",
    width: 113,
    height: 125,
    fontSize: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  "& .MuiTypography-root": {
    color: "#7E89A8",
    margin: "15px 0 0 0",
    fontSize: 15,
  },
});

const TableBooking = ({ totalBooking, people, specialRequest }: Props) => {
  return (
    <BlockTableBooking>
      <TitleTypography>Online Table Booking</TitleTypography>
      <ContentBox>
        <WrapperBox>
          <Box>{totalBooking}</Box>
          <Typography>Total Booking</Typography>
        </WrapperBox>
        <WrapperBox>
          <Box>{people}</Box>
          <Typography>People</Typography>
        </WrapperBox>
        <WrapperBox>
          <Box>{specialRequest}</Box>
          <Typography>Special Request</Typography>
        </WrapperBox>
      </ContentBox>
    </BlockTableBooking>
  );
};

export default TableBooking;
