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
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#030f1c",
});

const DashboardGrid = styled("div")({
  marginLeft: "184px",
});

const DashboardUpBlock = styled("div")({
  display: "flex",
  height: "300px",
});

const DashboardDownBlock = styled("div")({
  display: "flex",
  height: "600px",
  "@media (max-width:1900px)": {
    height: "525px",
  },
});

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <DashboardGrid>
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
      </DashboardGrid>
    </ContainerDashboard>
  );
};

export default Dashboard;
