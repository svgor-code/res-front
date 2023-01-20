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
  flexWrap: "wrap",

  "@media (max-width:1700px)": {
    width: "100%",
    height: "90%",
  },
  "@media (max-width:700px)": {},
});

/* const DashboardUpBlock = styled("div")({
  display: "flex",
  flex: "wrap",
  height: "290px",
});

const DashboardDownBlock = styled("div")({
  display: "flex",
  height: "560px",
  "@media (max-width:1900px)": {
    height: "525px",
  },
}); */

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <NewOrders />
      <ProcessOrders />
      <DeliveredOrders />
      <TableBooking />
      <LiveKitchen />

      <SalesGraph />
      <TableDetails />
      <TableRecipe />
      <TableDishes />
    </ContainerDashboard>
  );
};

export default Dashboard;
