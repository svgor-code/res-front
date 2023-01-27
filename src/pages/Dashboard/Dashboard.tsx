import React from "react";
import { styled } from "@mui/system";

import NewOrders from "src/components/Dashboard/Content/NewOrders/NewOrders";
import ProcessOrders from "src/components/Dashboard/Content/ProcessOrders/ProcessOrders";
import DeliveredOrders from "src/components/Dashboard/Content/DeliveredOrders/DeliveredOrders";
import TableBooking from "src/components/Dashboard/Content/TableBooking/TableBooking";
import LiveKitchen from "src/components/Dashboard/Content/LiveKitchen/LiveKitchen";
import SalesGraph from "src/components/Dashboard/Content/SalesGraph/SalesGraph";
import TableDetails from "src/components/Dashboard/Content/TableDetails/TableDetails";
import TableRecipe from "src/components/Dashboard/Content/TableRecipe/TableRecipe";
import TableDishes from "src/components/Dashboard/Content/TableDishes/TableDishes";

const ContainerDashboard = styled("div")({
  width: "90%",
  display: "flex",
  flexDirection: "column",
  padding: "1% 0.5% 0 1%",
  boxSizing: "border-box",

  "@media (max-width:1900px)": {
    width: "100%",
    height: "90%",
    padding: "1% 0 0 1%",
  },
});

const DashboardUpBlock = styled("div")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "0.5%",
  "@media (max-width:1900px)": {
    paddingBottom: "1%",
  },
});

const DashboardDownBlock = styled("div")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  "@media (max-width:1900px)": {
    paddingBottom: "1%",
  },
});

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <DashboardUpBlock>
        <NewOrders />
        <ProcessOrders />
        <DeliveredOrders />
        <TableBooking />
        <LiveKitchen />
      </DashboardUpBlock>

      <DashboardDownBlock>
        <SalesGraph />
        <TableDetails />
        <TableRecipe />
        <TableDishes />
      </DashboardDownBlock>
    </ContainerDashboard>
  );
};

export default Dashboard;
