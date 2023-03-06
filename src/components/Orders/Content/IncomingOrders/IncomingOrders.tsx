import React from "react";
import { styled } from "@mui/system";
import Order from "../../Order";

import twoSpecialBiryani from "../../../../images/svg/2 Special Biryani.svg";
import raspberryLemonMeringuePie from "../../../../images/svg/Raspberry Lemon Meringue Pie.svg";
import oystersRockefeller from "../../../../images/svg/Oysters Rockefeller.svg";
import stickyToffeePudding from "../../../../images/svg/Sticky Toffee Pudding.svg";
import mapleBaconDoughnut from "../../../../images/svg/Maple Bacon Doughnut.svg";
import blackForestCake from "../../../../images/svg/Black Forest Cake.svg";
import creamCheeseFrosting from "../../../../images/svg/Cream Cheese Frosting.svg";
import arugulaBlackberrySalad from "../../../../images/svg/Arugula Blackberry Salad.svg";

const orders = [
  { id: 1, image: twoSpecialBiryani, name: "2 Special Biryani", amount: 50 },
  {
    id: 2,
    image: raspberryLemonMeringuePie,
    name: "Raspberry Lemon Meringue Pie",
    amount: 40,
  },
  {
    id: 3,
    image: oystersRockefeller,
    name: "Oysters Rockefeller",
    amount: 30,
  },
  {
    id: 4,
    image: stickyToffeePudding,
    name: "Sticky Toffee Pudding",
    amount: 30,
  },
  {
    id: 5,
    image: mapleBaconDoughnut,
    name: "Maple Bacon Doughnut",
    amount: 30,
  },
  {
    id: 6,
    image: blackForestCake,
    name: "Black Forest Cake",
    amount: 30,
  },
  {
    id: 7,
    image: creamCheeseFrosting,
    name: "Cream Cheese Frosting",
    amount: 30,
  },

  {
    id: 8,
    image: arugulaBlackberrySalad,
    name: "Arugula Blackberry Salad",
    amount: 30,
  },
];

const IncomingOrdersBlock = styled("div")({
  height: "80vh",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  padding: "6% 5%",
  boxSizing: "border-box",
});

const IncomingOrdersTitle = styled("h2")({
  fontSize: " 16px",
  lineHeight: "21px",
  color: "#FFFFFF",
  marginBottom: "3vh",
});

const IncomingOrdersList = styled("div")({
  border: "1px solid red",
  height: "67vh",
});

const IncomingOrders = () => {
  return (
    <IncomingOrdersBlock>
      <IncomingOrdersTitle>Incoming Orders</IncomingOrdersTitle>
      <IncomingOrdersList>
        {orders.map((order) => (
          <Order image={order.image} name={order.name} amount={order.amount} />
        ))}
      </IncomingOrdersList>
    </IncomingOrdersBlock>
  );
};

export default IncomingOrders;
