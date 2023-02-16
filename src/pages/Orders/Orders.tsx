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
  padding: "1% 0.5% 0 1%",
  backgroundColor: "#030f1c",
});

const OrdersGrid = styled("div")({
  display: "flex",
  gap: "13px",
});

const OrdersFirstColumn = styled("div")({
  width: "26.5%",
});

const OrdersSecondColumn = styled("div")({
  width: "26.5%",
});

const OrdersThreeColumn = styled("div")({
  width: "26.5%",
});

const OrdersFourColumn = styled("div")({
  width: "26.5%",
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
