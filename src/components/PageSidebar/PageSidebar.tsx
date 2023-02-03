import React from "react";
import { styled } from "@mui/system";
import TopSidebar from "./TopSidebar";
import BottomSidebar from "./BottomSidebar";

const PageSidebarBlock = styled("div")({
  width: "10.1%",
  height: "100%",
  borderRight: "1px solid #01070E",

  "@media (max-width:1200px)": {
    display: "flex",
    width: "100%",
    height: "8%",
    borderTop: "1px solid black",
    position: "sticky",
    top: 0,
  },
  "@media (max-width:768px)": { height: "6%" },
  "@media (max-width:576px)": { height: "5%" },
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
