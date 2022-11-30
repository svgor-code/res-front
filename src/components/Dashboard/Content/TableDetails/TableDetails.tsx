import React from "react";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ReactComponent as Calendar } from "src/images/svg/Vector.svg";
import { ReactComponent as Icon } from "src/images/svg/icon.svg";

import DateModal from "./DateModal";

const WrapperBox = styled("div")({
  border: "1px solid #153453",
  width: "18%",
  borderRadius: "6px",
  margin: "17px 0px 0px 18px",
  "& .MuiCardContent-root": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    backgroundColor: "#081A2C",
    padding: "25px",
  },
  "& .MuiButton-root": {
    textTransform: "none",
  },
  "& .MuiDivider-middle": {
    backgroundColor: "#2A527A",
    width: "90%",
    height: 5,
  },
});
const DateBox = styled("div")({
  margin: "20px 0 0 0",
  color: "#7E89A8",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& .MuiButton-root": {
    color: "#7E89A8",
    padding: 0,
    margin: "0 5px 0 0",
    textAlign: "center",
  },
});
const TotalBox = styled(Box)({
  "& .MuiBox-root": {
    margin: "10px 0 0 0",
    color: "#7E89A8",
    display: "flex",
    flexDirection: "column",
    "& .MuiContainer-root": {
      borderBottom: "0.5px dotted #2A527A",
      padding: "20px 0 0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    "& .MuiBox-root": {
      width: 100,
      height: 50,
      borderRadius: "6px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .MuiButton-root": {
      textAlign: "start",
      padding: "0 0 20px 0",
    },
  },
});
const DetailsBox = styled("div")({
  fontSize: 12,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});
const RefundContainer = styled(Container)({
  "& .MuiBox-root": {
    backgroundColor: "rgba(255, 91, 203, 0.27)",
    color: "#FA62CA",
  },
});
const EarnContainer = styled(Container)({
  "& .MuiBox-root": {
    backgroundColor: "rgba(0, 242, 170, 0.16)",
    color: "#06CB55",
  },
});
const WrapperCardActions = styled(CardActions)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiBox-root": {
    backgroundColor: "rgba(230, 165, 255, 0.08)",
    color: "rgba(219, 167, 192, 0.54)",
    width: 200,
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: "6px",
    padding: 1,
    marginTop: 30,
    "& .MuiTypography-root": {
      fontSize: 9,
      margin: "5px",
    },
  },
});

const EarningDetails = () => {
  return (
    <WrapperBox>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              All Earning Details
            </Typography>
            <DateBox>
              <Button size="small">
                <DateModal />
              </Button>
              <Calendar />
            </DateBox>
            <TotalBox>
              <Box>
                <EarnContainer>
                  <DetailsBox>
                    <Typography>Total Earnings this Month</Typography>
                    <Button size="small">view all details</Button>
                  </DetailsBox>
                  <Box>$478</Box>
                </EarnContainer>
                <RefundContainer>
                  <DetailsBox>
                    <Typography>Total refund this Month</Typography>
                    <Button size="small">view all details</Button>
                  </DetailsBox>
                  <Box>$23</Box>
                </RefundContainer>
              </Box>
            </TotalBox>
          </CardContent>
          <WrapperCardActions>
            <Box>
              <Typography>
                <Icon />
              </Typography>
              <Typography>
                Payment defaults. Completely predominate cross-unit ideas for
                transparent customer service. Assertively iterate
                enterprise-wide internal or "organic" sources.
              </Typography>
            </Box>
          </WrapperCardActions>
        </React.Fragment>
      </Card>
    </WrapperBox>
  );
};

export default EarningDetails;
