import React from "react";
import { styled } from "@mui/system";
import TopSidebar from "./TopSidebar";
import BottomSidebar from "./BottomSidebar";

const NormalSidebar = styled("div")({
  width: "10%",
  height: "100%",
  "@media (max-width:1700px)": {
    display: "flex",
    width: "100%",
    height: "10%",
  },
});
const PageSidebar = () => {
  return (
    <NormalSidebar>
      <TopSidebar></TopSidebar>
      <BottomSidebar></BottomSidebar>
    </NormalSidebar>
  );
};

export default PageSidebar;
