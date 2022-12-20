import React from "react";
import { styled } from "@mui/system";
import TopSidebar from "./TopSidebar";
import BottomSidebar from "./BottomSidebar";

const NormalSidebar = styled("div")({
  width: "10%",
  height: "100%",
  borderRight: "2px solid #030f1c",
});
const Sidebar = () => {
  return (
    <NormalSidebar>
      <TopSidebar></TopSidebar>
      <BottomSidebar></BottomSidebar>
    </NormalSidebar>
  );
};

export default Sidebar;
