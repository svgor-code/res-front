import { ReactElement } from "react";

import newsSvg from "src/images/svg/news.svg";
import allOrdersSvg from "src/images/svg/allOrders.svg";
import bookingSvg from "src/images/svg/booking.svg";
import deliverySvg from "src/images/svg/delivery.svg";
import foodSvg from "src/images/svg/food.svg";
import kitchenSvg from "src/images/svg/kitchen.svg";
import {
  DASHBOARD_PATH,
  KITCHEN_PATH,
  MENU_PATH,
  ORDERS_PATH,
  STAFF_PATH,
  TABLE_BOOKING_PATH,
} from "src/routing/config/paths";

interface SidebarInterface {
  icon: string;
  text: string;
  path: string;
}
const MenuList = (
  icon: string,
  text: string,
  path: string,
): SidebarInterface => {
  return {
    icon,
    text,
    path,
  };
};

export const sidebarArray: SidebarInterface[] = [
  MenuList(newsSvg, "Dashboard", DASHBOARD_PATH),
  MenuList(allOrdersSvg, "All Orders", ORDERS_PATH),
  MenuList(foodSvg, "Food Menu", MENU_PATH),
  MenuList(kitchenSvg, "Live Kitchen", KITCHEN_PATH),
  MenuList(deliverySvg, "Deliveries/Staff", STAFF_PATH),
  MenuList(bookingSvg, "Table Booking", TABLE_BOOKING_PATH),
];
