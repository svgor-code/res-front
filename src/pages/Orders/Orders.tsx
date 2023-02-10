import React from "react";
import { styled } from "@mui/system";

import NewActive from "src/components/Orders/Content/NewActive/NewActive";
import IncomingOrders from "src/components/Orders/Content/IncomingOrders/IncomingOrders";
import DeliveryProcess from "src/components/Orders/Content/DeliveryProcess/DeliveryProcess";
import InProcessDetails from "src/components/Orders/Content/InProcessDetails/InProcessDetails";
import InProcessInfo from "src/components/Orders/Content/InProcessInfo/InProcessInfo";
import DeliveryStatus from "src/components/Orders/Content/DeliveryStatus/DeliveryStatus";
import OrderStats from "src/components/Orders/Content/OrderStats/OrderStats";

const AllOrdersContainer = styled("div")({
  width: "90%",
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#030f1c",
});

const OrdersGrid = styled("div")({
  display: "flex",
});

const OrdersFirstColumn = styled("div")({
  width: "26.5%",
  marginRight: "13px",
  "@media (max-width:1900px)": {
    marginRight: "10px",
  },
});

const OrdersSecondColumn = styled("div")({
  width: "26.5%",
  marginRight: "13px",
  "@media (max-width:1900px)": {
    marginRight: "10px",
  },
});

const OrdersThreeColumn = styled("div")({
  width: "26.5%",
  marginRight: "13px",
  "@media (max-width:1900px)": {
    marginRight: "10px",
  },
});

const OrdersFourColumn = styled("div")({
  width: "26.5%",
  display: "grid",
  alignContent: "space-between",
  marginRight: "13px",
  "@media (max-width:1900px)": {
    marginRight: "10px",
  },
});

const Orders = () => {
  return (
    <AllOrdersContainer>
      <OrdersGrid>
        <OrdersFirstColumn>
          <NewActive />
          <IncomingOrders />
        </OrdersFirstColumn>

        <OrdersSecondColumn>
          <InProcessInfo />
        </OrdersSecondColumn>

        <OrdersThreeColumn>
          <DeliveryProcess />
          <InProcessDetails />
        </OrdersThreeColumn>

        <OrdersFourColumn>
          <DeliveryStatus />
          <OrderStats />
        </OrdersFourColumn>
      </OrdersGrid>
    </AllOrdersContainer>
  );
};

export default Orders;
