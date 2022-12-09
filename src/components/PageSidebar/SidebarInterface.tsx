import { ReactElement } from "react";

import { ReactComponent as NewsSvg } from "src/images/svg/news.svg";
import { ReactComponent as AllOrdersSvg } from "src/images/svg/allOrders.svg";
import { ReactComponent as BookingSvg } from "src/images/svg/booking.svg";
import { ReactComponent as DeliverySvg } from "src/images/svg/delivery.svg";
import { ReactComponent as FoodSvg } from "src/images/svg/food.svg";
import { ReactComponent as KitchenSvg } from "src/images/svg/kitchen.svg";
import {
  DASHBOARD_PATH,
  KITCHEN_PATH,
  MENU_PATH,
  ORDERS_PATH,
  STAFF_PATH,
  TABLE_BOOKING_PATH,
} from "src/routing/config/paths";

interface SidebarInterface {
  icon: ReactElement;
  text: string;
  path: string;
}
const MenuList = (
  icon: ReactElement,
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
  MenuList(<NewsSvg />, "Dashboard", DASHBOARD_PATH),
  MenuList(<AllOrdersSvg />, "All Orders", ORDERS_PATH),
  MenuList(<FoodSvg />, "Food Menu", MENU_PATH),
  MenuList(<KitchenSvg />, "Live Kitchen", KITCHEN_PATH),
  MenuList(<DeliverySvg />, "Deliveries/Staff", STAFF_PATH),
  MenuList(<BookingSvg />, "Table Booking", TABLE_BOOKING_PATH),
];
