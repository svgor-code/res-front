import React, { lazy, ReactElement } from "react";

const Allorders = lazy(() => import("src/pages/Allorders"));
const Dashboard = lazy(() => import("src/pages/Dashboard/Dashboard"));
const Foodmenu = lazy(() => import("src/pages/Foodmenu"));
const Staff = lazy(() => import("src/pages/Staff"));
const Kitchen = lazy(() => import("src/pages/Kitchen"));
const Tablebooking = lazy(() => import("src/pages/Tablebooking"));

interface RouteInterface {
  path: string;
  component: ReactElement;
}
const RouteList = (path: string, component: ReactElement): RouteInterface => {
  return {
    path,
    component,
  };
};
export const routeArray: RouteInterface[] = [
  RouteList("/", <Dashboard />),
  RouteList("/allOrders", <Allorders />),
  RouteList("/foodMenu", <Foodmenu />),
  RouteList("/staff", <Staff />),
  RouteList("/kitchen", <Kitchen />),
  RouteList("/tableBooking", <Tablebooking />),
];
