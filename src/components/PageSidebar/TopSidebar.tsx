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
  "@media (max-width:1700px)": {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  "@media (max-width:700px)": {},
});

const List = styled("div")({
  width: "100%",
  "@media (max-width:1700px)": {
    height: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  "@media (max-width:700px)": {},
});

const ListItem = styled("div")({
  width: "100%",
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
  "@media (max-width:1700px)": {
    height: "60px",
    width: "90px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0",
    padding: "0",
  },
  "@media (max-width:700px)": {
    height: "50px",
    width: "90px",
    alignItems: "center",
    paddingTop: "20%",
  },
  "@media (max-width:550px)": {
    height: "50px",
    width: "90px",
  },
  "@media (max-width:500px)": {
    height: "50px",
    width: "80px",
  },
  "@media (max-width:450px)": {
    height: "50px",
    width: "70px",
  },
  "@media (max-width:400px)": {
    height: "50px",
    width: "60px",
  },
});

const ItemIcon = styled("img")({
  width: "12%",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    fill: "#FFFFFF",
  },
  "@media (max-width:1700px)": {
    width: "35%",
  },
  "@media (max-width:700px)": {
    width: "30%",
  },
});

const ItemText = styled("span")({
  width: "60%",
  display: "flex",
  justifyContent: "center",
  "@media (max-width:1700px)": {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  "@media (max-width:700px)": {
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
