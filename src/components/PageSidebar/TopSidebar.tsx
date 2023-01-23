import React from "react";
import { styled } from "@mui/system";
import { sidebarArray } from "./SidebarInterface";

import { Link } from "react-router-dom";

const TopSidebarBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "55%",
  background: "#081A2C",

  "@media (max-width:1900px)": {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    padding: "1%",
  },
});

const List = styled("div")({
  width: "100%",
  "@media (max-width:1900px)": {
    height: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const ListItem = styled("div")({
  width: "100%",
  boxSizing: "border-box",
  height: "1%",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "20px 10px",
  alignItems: "center",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "15px",
  color: "#869AAF",
  "&:hover": {
    backgroundColor: "#073374",
    color: "#FFFFFF",
  },
  marginTop: "10%",

  "@media (max-width:1900px)": {
    height: "60px",
    width: "90px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
  },
  "@media (max-width:768px)": {
    height: "40px",
    width: "90px",
  },
  "@media (max-width:586px)": {
    height: "20px",
    width: "50px",
  },
});

const ItemIcon = styled("img")({
  width: "12%",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    fill: "#FFFFFF",
  },

  "@media (max-width:1900px)": {
    width: "35%",
  },
  "@media (max-width:768px)": {
    // width: "25%",
  },
});

const ItemText = styled("span")({
  width: "60%",
  display: "flex",
  justifyContent: "center",

  "@media (max-width:1900px)": {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  "@media (max-width:768px)": {
    display: "none",
  },
});

const TopSidebar = () => {
  return (
    <TopSidebarBlock>
      <List>
        {sidebarArray.map((item) => (
          <Link
            key={item.text}
            style={{ textDecoration: "none" }}
            to={item.path}
          >
            <ListItem>
              <ItemIcon src={item.icon} alt={item.text} />
              <ItemText> {item.text}</ItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </TopSidebarBlock>
  );
};

export default TopSidebar;
