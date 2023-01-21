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
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1%",

  "@media (max-width:1700px)": {
    width: "100%",
    height: "90%",
  },
  "@media (max-width:700px)": {},
});

const DashboardUpBlock = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "1%",
});

const DashboardDownBlock = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
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
