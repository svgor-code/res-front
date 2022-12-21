import React from "react";
import { styled } from "@mui/system";
import { sidebarArray } from "./SidebarInterface";
import logo from "src/images/svg/Logo.svg";
import { Link } from "react-router-dom";

const NavigateList = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "55%",
  background: "#081A2C",
  // boxShadow: "5px -2px 5px -5px red",
});

const LogoImage = styled("img")({
  margin: "10% 0 30%",
});

const List = styled("div")({
  width: "100%",
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
});

const ItemIcon = styled("span")({
  width: "30%",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    fill: "#FFFFFF",
  },
  "@media (max-width:1700px)": {},
});

const ItemText = styled("span")({
  width: "70%",
  display: "flex",
  justifyContent: "start",
  "@media (max-width:1700px)": {
    display: "none",
  },
});

const TopSidebar = () => {
  return (
    <NavigateList>
      <LogoImage src={logo} alt="camera" />
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
