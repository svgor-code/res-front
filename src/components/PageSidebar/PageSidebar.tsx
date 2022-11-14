import React, { useState } from "react";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ReactComponent as News } from "src/images/svg/news.svg";
import { ReactComponent as AllOrders } from "src/images/svg/allOrders.svg";
import { ReactComponent as Booking } from "src/images/svg/booking.svg";
import { ReactComponent as Delivery } from "src/images/svg/delivery.svg";
import { ReactComponent as Food } from "src/images/svg/food.svg";
import { ReactComponent as Kitchen } from "src/images/svg/kitchen.svg";
import { ReactComponent as Logo } from "src/images/svg/Logo.svg";

type Anchor = "left";

const CustomDrawer = styled(Drawer)({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
  "& .MuiBox-root": {
    backgroundColor: "#051424",
    color: "#869AAF",
  },
  "& .MuiPaper-root": {
    backgroundColor: "#01070E",
  },
  "& .Mui-active": {
    backgroundColor: "#0247FF",
  },
});
const CustomBox = styled(Box)({
  "& .MuiListItemText-root": {
    padding: 0,
  },
  "& .MuiListItemIcon-root": {
    padding: 0,
    margin: 4,
    minWidth: 25,
  },
});

const PageSideBar = () => {
  const [state, setState] = useState({ left: true });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <CustomBox
      sx={{ width: 170, paddingTop: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItemIcon
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 150,
        }}
      >
        <Logo />
      </ListItemIcon>
      <Box sx={{ marginTop: 4 }}>
        <List>
          <ListItem key={anchor} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <News />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem key={anchor} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AllOrders />
              </ListItemIcon>
              <ListItemText>All Orders</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem key={anchor} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Food />
              </ListItemIcon>
              <ListItemText>Food Menu</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem key={anchor} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Kitchen />
              </ListItemIcon>
              <ListItemText>Live Kitchen</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem key={anchor} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Delivery />
              </ListItemIcon>
              <ListItemText>Deliveries/Staff</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem key={anchor} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Booking />
              </ListItemIcon>
              <ListItemText>Table Booking</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </CustomBox>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>open</Button>
          <CustomDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </CustomDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageSideBar;
