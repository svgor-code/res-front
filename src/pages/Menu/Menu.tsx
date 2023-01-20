import React from "react";
import { styled } from "@mui/system";
import MainCourse from "src/components/Menu/Content/MainCourse/MainCourse";
import Snaks from "src/components/Menu/Content/Snaks/Snaks";
import Drinks from "src/components/Menu/Content/Drinks/Drinks";
import Controls from "../../components/Menu/Content/Controls/Controls";

const ContainerFoodMenu = styled("div")({
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#030f1c",
});

const FoodMenuBody = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  marginLeft: "190px",
  "@media (max-width:1900px)": {
    // marginLeft: "180px",
  },
});

const Menu = () => {
  return (
    <ContainerFoodMenu>
      <FoodMenuBody>
        <MainCourse />
        <Snaks />
        <Drinks />
        <Controls />
      </FoodMenuBody>
    </ContainerFoodMenu>
  );
};

export default Menu;
