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

const BlockTableDetails = styled("div")({
  width: "18%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
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
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
});

const BlockName = styled("span")({
  width: "147px",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#FFFFFF",
});

const BlockTotalSpan = styled("span")({
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#7E89A8",
});

const styles = {
  margin: "20px 0 0 0",
  color: "#7E89A8",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& .MuiButton-root": {
    color: "#7E89A8",
    padding: 0,
    textAlign: "center",
  },
};

const totalStyles = {
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
};
const earningStyle = {
  backgroundColor: "rgba(0, 242, 170, 0.16)",
  color: "#06CB55",
};
const refundStyle = {
  backgroundColor: "rgba(255, 91, 203, 0.27)",
  color: "#FA62CA",
};
const disclaimerStyles = {
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
  margin: 2,
  marginTop: 3,
  "& .MuiTypography-root": {
    fontSize: 9,
    margin: "5px",
  },
};
const EarningDetails = () => {
  return (
    <BlockTableDetails>
      <Box>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <BlockName>All Earning Details</BlockName>
              <Box sx={styles}>
                <Button size="small">
                  <DateModal />
                </Button>
                <Calendar />
              </Box>
              <Box sx={totalStyles}>
                <Container>
                  <Typography>
                    <BlockTotalSpan>Total Earnings this Month</BlockTotalSpan>

                    <Button size="small">view all details</Button>
                  </Typography>
                  <Box sx={earningStyle}>$478</Box>
                </Container>
                <Container>
                  <Typography>
                    <BlockTotalSpan>Total refund this Month</BlockTotalSpan>
                    <Button size="small">view all details</Button>
                  </Typography>
                  <Box sx={refundStyle}>$23</Box>
                </Container>
              </Box>
            </CardContent>
            <CardActions>
              <Box sx={disclaimerStyles}>
                <Typography>
                  <Icon />
                </Typography>
                <Typography>
                  Payment defaults. Completely predominate cross-unit ideas for
                  transparent customer service. Assertively iterate
                  enterprise-wide internal or "organic" sources.
                </Typography>
              </Box>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </BlockTableDetails>
  );
};

export default EarningDetails;
