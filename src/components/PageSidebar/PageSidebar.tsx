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

import { ReactComponent as Logo } from "src/images/svg/Logo.svg";

import { sidebarArray } from "./SidebarInterface";

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
                {sidebarArray.map((item) => (
                  <List>
                    <ListItem key={anchor} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText> {item.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                ))}
              </Box>
            </CustomBox>
          </CustomDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageSideBar;
