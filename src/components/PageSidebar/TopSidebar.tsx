import React from "react";
import { styled } from "@mui/system";
import { sidebarArray } from "./SidebarInterface";

import { Link } from "react-router-dom";

const NavigateList = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "55%",
  background: "#081A2C",
  "@media (max-width:1700px)": {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },

  // boxShadow: "5px -2px 5px -5px red",
});

const List = styled("div")({
  width: "100%",
  "@media (max-width:1700px)": {
    height: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const ListItem = styled("div")({
  width: "100%",
  height: "1%",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 10px",
  alignItems: "center",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "15px",
  color: "#869AAF",
  "&:hover": {
    backgroundColor: "#073374",
    color: "#FFFFFF",
    fill: "#FFFFFF",
  },
  marginTop: "10%",

  "@media (max-width:1700px)": {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
  },
});

const ItemIcon = styled("span")({
  width: "30%",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    fill: "#FFFFFF",
  },
  "@media (max-width:1700px)": {
    alignItems: "center",
    textAlign: "center",
  },
});

const ItemText = styled("span")({
  width: "70%",
  display: "flex",
  justifyContent: "start",
  "@media (max-width:1700px)": {
    alignItems: "center",
    textAlign: "center",

    width: "100%",
  },
});

const TopSidebar = () => {
  return (
    <NavigateList>
      <List>
        {sidebarArray.map((item) => (
          <Link
            key={item.text}
            style={{ textDecoration: "none" }}
            to={item.path}
          >
            <ListItem>
              <ItemIcon>{item.icon}</ItemIcon>
              <ItemText> {item.text}</ItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </NavigateList>
  );
};

export default TopSidebar;
