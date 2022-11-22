import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ReactComponent as Logo } from "src/images/svg/Logo.svg";

import { sidebarArray } from "./SidebarInterface";

const CustomDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    backgroundColor: "#01070E",
    overflowX: "hidden",
    position: "fixed",
    zIndex: 1,
  },
  "& .MuiBox-root": {
    backgroundColor: "#051424",
    color: "#869AAF",
    overflowX: "hidden",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
});
const CustomBox = styled(Box)({
  "& .MuiListItemText-root": {
    padding: 0,
    color: "#869AAF",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  "& .MuiListItemIcon-root": {
    padding: 0,
    margin: 4,
    minWidth: 25,
  },
  "& .MuiListItem-root": {
    width: "100%",
    "&:hover": {
      backgroundColor: "#0247FF",
      color: "#FFFFFF",
    },
  },
});

const styles = {
  color: "#FFFFFF",
  textDecoration: "none",
};

const PageSideBar = () => {
  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <CustomDrawer variant="persistent" anchor={anchor} open={true}>
            <CustomBox sx={{ width: 170, paddingTop: 2 }} role="presentation">
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
                  <List key={item.text}>
                    <ListItem key={anchor} disablePadding>
                      <Link style={styles} to={item.path}>
                        <ListItemButton>
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText> {item.text}</ListItemText>
                        </ListItemButton>
                      </Link>
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
