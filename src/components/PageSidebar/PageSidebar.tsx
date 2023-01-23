import React from "react";
import { styled } from "@mui/system";
import TopSidebar from "./TopSidebar";
import BottomSidebar from "./BottomSidebar";

const PageSidebarBlock = styled("div")({
  width: "10%",
  height: "100%",
  "@media (max-width:1900px)": {
    display: "flex",
    width: "100%",
    height: "10%",
  },
});
const PageSidebar = () => {
  return (
    <PageSidebarBlock>
      <TopSidebar />
      <BottomSidebar />
    </PageSidebarBlock>
  );
};

export default PageSidebar;
