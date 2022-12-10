import React from "react";
import { styled } from "@mui/system";
import {
  DashedLine,
  NameDashboardItem,
  ViewButton,
} from "src/components/UI/commonStyles";
import NumberOfDishes from "./NumberOfDishes";
import lentilSoup from "src/images/svg/lentilSoup.svg";
import caperAndChickpeaPasta from "src/images/svg/caperAndChickpeaPasta.svg";
import lambShishKebab from "src/images/svg/lambShishKebab.svg";

const dishes = [
  { id: 1, image: lentilSoup, name: "Lentil soup", amount: 50 },
  {
    id: 2,
    image: caperAndChickpeaPasta,
    name: "Caper and chickpea pasta",
    amount: 40,
  },
  {
    id: 3,
    image: lambShishKebab,
    name: "Lamb shish kebab",
    amount: 30,
  },
];

const BlockTableDishes = styled("div")({
  width: "20%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  padding: "10px  25px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
    width: "24%",
  },
});

const DisplayingTheNumberOfDishes = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ListOfDishes = styled("div")({
  marginTop: "35px",
});

const ItemFromListDishes = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const ImageDish = styled("img")({
  width: "65px",
  marginRight: "10px",
});

const NameDish = styled("h2")({
  whiteSpace: "normal",
  maxWidth: "160px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "15px",
  color: "#7E89A8",
});

const AmountDish = styled("div")({
  width: "78px",
  height: "28px",
  background: "#4B2C57",
  borderRadius: "6px",
  fontWeight: "700",
  fontSize: "10px",
  color: "#FA59C7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ButtonPositionViewAll = styled("div")({
  display: "flex",
  justifyContent: "end",
  marginTop: "25px",
});

const ListItemsLeft = styled("div")({
  display: "flex",
  alignItems: "center",
});

const TableDishes = () => {
  return (
    <BlockTableDishes>
      <NameDashboardItem>Today’s Offered Dishes</NameDashboardItem>
      <DisplayingTheNumberOfDishes>
        <NumberOfDishes amount={12} type="Non-Veg Dishes" />
        <NumberOfDishes amount={43} type="Veg Dishes" />
      </DisplayingTheNumberOfDishes>
      <ListOfDishes>
        {dishes.map((dish) => (
          <div key={dish.id}>
            <ItemFromListDishes>
              <ListItemsLeft>
                <ImageDish src={dish.image} alt={dish.name} />
                <NameDish>{dish.name}</NameDish>
              </ListItemsLeft>

              <AmountDish>{dish.amount} Portion</AmountDish>
            </ItemFromListDishes>
            <DashedLine />
          </div>
        ))}
      </ListOfDishes>
      <ButtonPositionViewAll>
        <ViewButton>View All</ViewButton>
      </ButtonPositionViewAll>
    </BlockTableDishes>
  );
};

export default TableDishes;
