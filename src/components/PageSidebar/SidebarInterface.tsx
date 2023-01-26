import { ReactElement } from "react";

import { ReactComponent as News } from "src/images/svg/news.svg";
import { ReactComponent as AllOrders } from "src/images/svg/allOrders.svg";
import { ReactComponent as Booking } from "src/images/svg/booking.svg";
import { ReactComponent as Delivery } from "src/images/svg/delivery.svg";
import { ReactComponent as Food } from "src/images/svg/food.svg";
import { ReactComponent as Kitchen } from "src/images/svg/kitchen.svg";
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
  MenuList(<News />, "Dashboard", DASHBOARD_PATH),
  MenuList(<AllOrders />, "All Orders", ORDERS_PATH),
  MenuList(<Food />, "Food Menu", MENU_PATH),
  MenuList(<Kitchen />, "Live Kitchen", KITCHEN_PATH),
  MenuList(<Delivery />, "Deliveries/Staff", STAFF_PATH),
  MenuList(<Booking />, "Table Booking", TABLE_BOOKING_PATH),
];
