import { lazy } from "react";

const LazyPage = (path: string) => {
  const Component = lazy(() => import(`src/pages/${path}`));
  return Component;
};

export const DASHBOARD_PAGE = LazyPage("Dashboard/Dashboard");
export const ORDERS_PAGE = LazyPage("Orders/Orders");
export const MENU_PAGE = LazyPage("Menu/Menu");
export const STAFF_PAGE = LazyPage("Staff/Staff");
export const KITCHEN_PAGE = LazyPage("Kitchen/Kitchen");
export const TABLE_BOOKING_PAGE = LazyPage("TableBooking/TableBooking");
