import { ComponentType, LazyExoticComponent } from "react";
import {
  DASHBOARD_PAGE,
  KITCHEN_PAGE,
  MENU_PAGE,
  ORDERS_PAGE,
  STAFF_PAGE,
  TABLE_BOOKING_PAGE,
} from "./pages";
import {
  DASHBOARD_PATH,
  KITCHEN_PATH,
  MENU_PATH,
  ORDERS_PATH,
  STAFF_PATH,
  TABLE_BOOKING_PATH,
} from "./paths";

interface IPrivateRoute {
  path: string;
  component: LazyExoticComponent<ComponentType<any>>;
}

export const PrivateRoutes: IPrivateRoute[] = [
  {
    path: DASHBOARD_PATH,
    component: DASHBOARD_PAGE,
  },
  {
    path: ORDERS_PATH,
    component: ORDERS_PAGE,
  },
  {
    path: MENU_PATH,
    component: MENU_PAGE,
  },
  {
    path: STAFF_PATH,
    component: STAFF_PAGE,
  },
  {
    path: KITCHEN_PATH,
    component: KITCHEN_PAGE,
  },
  {
    path: TABLE_BOOKING_PATH,
    component: TABLE_BOOKING_PAGE,
  },
];

export const privatePaths = PrivateRoutes.map((i) => i.path);
