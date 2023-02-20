import React, { FC } from "react";

import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/system";

import ModalSelect from "./ModalSelect/ModalSelect";
import ButtonNewDish from "./ButtonNewDish/ButtonNewDish";
import InputDishName from "./InputDishName/InputDishName";
import AddImages from "./AddImages/AddImages";
import InputInfo from "./InputInfo/InputInfo";
import SwitchFood from "./SwitchFood/SwitchFood";
import MadeFor from "./MadeFor/MadeFor";
import DescriptionForm from "./DescriptionForm/DescriptionForm";
import NewDish from "./NewDish/NewDish";

interface PropType {
  id: number;
  name: string;
  image: string;
  description: string;
  foodType: DishFoodTypeEnum;
  price: string;
  weight: string;
  madeFor: ForMade;
}

enum ForMade {
  BREAKFAST,
  LUNCH,
  DINNER,
}

enum DishFoodTypeEnum {
  VEGETARIAN,
  NON_VEGETARIAN,
}

const ModalContainer = styled("div")({
  height: "100%",
  backgroundColor: "#030F1B",
  boxShadow: "24px",
  padding: "60px 69px 94px 74px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "6px",
    borderRadius: "20px",
    background: "#091C30",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#2A4B6C",
    borderRadius: "20px",
  },
  "@media (max-height:1900px)": {
    height: "715px",
  },
});

const ModalLine = styled("div")({
  marginTop: "44px",
  marginBottom: "59px",
  width: "99%",
  border: "1px solid #273C51",
  opacity: "0.5",
});

type PropsType = {
  open: any;
  onClose: any;
};

const ModalAddNewDish: FC<PropsType> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <ModalContainer>
        <ModalSelect />
        <ModalLine />
        <ButtonNewDish />
        <InputDishName />
        <AddImages />
        <InputInfo />
        <SwitchFood />
        <MadeFor />
        <DescriptionForm />
        <NewDish />
      </ModalContainer>
    </Dialog>
  );
};

export default ModalAddNewDish;
