import { ReactElement } from "react";

import { ReactComponent as NewsSvg } from "src/images/svg/news.svg";
import { ReactComponent as AllOrdersSvg } from "src/images/svg/allOrders.svg";
import { ReactComponent as BookingSvg } from "src/images/svg/booking.svg";
import { ReactComponent as DeliverySvg } from "src/images/svg/delivery.svg";
import { ReactComponent as FoodSvg } from "src/images/svg/food.svg";
import { ReactComponent as KitchenSvg } from "src/images/svg/kitchen.svg";

interface SidebarInterface {
  icon: ReactElement;
  text: string;
  path: string;
}
const MenuList = (
  icon: ReactElement,
  text: string,
  path: string
): SidebarInterface => {
  return {
    icon,
    text,
    path,
  };
};

export const sidebarArray: SidebarInterface[] = [
  MenuList(<NewsSvg />, "Dashboard", "/"),
  MenuList(<AllOrdersSvg />, "All Orders", "/allOrders"),
  MenuList(<FoodSvg />, "Food Menu", "/foodMenu"),
  MenuList(<KitchenSvg />, "Live Kitchen", "/kitchen"),
  MenuList(<DeliverySvg />, "Deliveries/Staff", "/staff"),
  MenuList(<BookingSvg />, "Table Booking", "/tableBooking"),
];
