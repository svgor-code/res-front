import React from "react";

import { styled } from "@mui/system";

import MainCourse from "src/components/Menu/Content/MainCourse/MainCourse";
import Snacks from "src/components/Menu/Content/Snacks/Snacks";
import Drinks from "src/components/Menu/Content/Drinks/Drinks";
import Controls from "src/components/Menu/Content/Controls/Controls";

const ContainerFoodMenu = styled("div")({
  width: "90%",
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#030f1c",
});

const FoodMenuBody = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});

const Menu = () => {
  return (
    <ContainerFoodMenu>
      <FoodMenuBody>
        <MainCourse />
        <Snacks />
        <Drinks />
        <Controls />
      </FoodMenuBody>
    </ContainerFoodMenu>
  );
};

export default Menu;
