import { ReactElement } from "react";

import { ReactComponent as News } from "src/images/svg/news.svg";
import { ReactComponent as AllOrders } from "src/images/svg/allOrders.svg";
import { ReactComponent as Booking } from "src/images/svg/booking.svg";
import { ReactComponent as Delivery } from "src/images/svg/delivery.svg";
import { ReactComponent as Food } from "src/images/svg/food.svg";
import { ReactComponent as Kitchen } from "src/images/svg/kitchen.svg";

interface SidebarInterface {
  icon: ReactElement;
  text: string;
}
const MenuList = (icon: ReactElement, text: string): SidebarInterface => {
  return {
    icon,
    text,
  };
};

export const sidebarArray: SidebarInterface[] = [
  MenuList(<News />, "Dashboard"),
  MenuList(<AllOrders />, "All Orders"),
  MenuList(<Booking />, "Food Menu"),
  MenuList(<Delivery />, "Live Kitchen"),
  MenuList(<Food />, "Deliveries/Staff"),
  MenuList(<Kitchen />, "Table Booking"),
];
