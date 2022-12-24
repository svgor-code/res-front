import React from "react";
import { styled } from "@mui/system";

const NavigateList1 = styled("div")({
  width: "100%",
  height: "45%",
  background: "#01070E",
  "@media (max-width:1700px)": {
    display: "none",
  },
});
const BottomSidebar = () => {
  return <NavigateList1></NavigateList1>;
};

export default BottomSidebar;
