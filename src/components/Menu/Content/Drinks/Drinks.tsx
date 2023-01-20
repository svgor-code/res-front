import React from "react";
import img from "src/images/svg/plug.svg";
import { styled } from "@mui/system";
import { TextFoodMenu, TitleFoodMenu } from "src/components/UI/commonStyles";

const BlockSnaksBody = styled("div")({
  marginTop: "40px",
});

const BlocksDrinks = styled("div")({
  marginTop: "18px",
  overflowY: "scroll",
  height: "726px",
  "@media (max-height:1900px)": {
    height: "725px",
  },
});

const ItemDrinksBlock = styled("div")({
  width: "244px",
  height: "70px",
  padding: "14px 11px 14px 16px",
  marginBottom: "14px",
  background: "#0F2439",
  border: "0.5px solid #153453",
  borderRadius: "12px",
});

const ItemDescrDrinks = styled("div")({
  display: "flex",
});

const DrinksPhoto = styled("img")({
  width: "73px",
  height: "72px",
  borderRadius: "7px",
});

const DrinksInfo = styled("div")({
  marginLeft: "13px",
});
const DrinksNameSpan = styled("div")({
  width: "90px",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  color: "#ADBCE9",
});
const AnotherInfoSnaks = styled("div")({
  display: "flex",
  marginTop: "18px",
});

const DrinksPortion = styled("span")({
  display: "flex",
  marginRight: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(173, 188, 233, 0.41)",
});

const PortionNumberDrinks = styled("span")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "#ADBCE9",
});

const DrinksPrice = styled("div")({
  display: "flex",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(173, 188, 233, 0.41)",
});

const DrinksPriceText = styled("div")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "#ADBCE9",
});

const DrinksEditButton = styled("button")({
  height: "0px",
  marginTop: "-7px",
  background: "none",
  border: "none",
  cursor: "pointer",
});

const EditText = styled("span")({
  fontSize: "9px",
  color: "rgba(173, 188, 233, 0.41)",
});

type DrinksType = {
  name: string;
  portion: number;
  price: number;
  image: any;
};

const Drinks = () => {
  const dataDrinks: DrinksType[] = [
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      portion: 20,
      price: 55,
      image: img,
    },
  ];
  return (
    <BlockSnaksBody>
      <TitleFoodMenu>
        <TextFoodMenu>Drinks</TextFoodMenu>
      </TitleFoodMenu>
      <BlocksDrinks>
        {dataDrinks.map((drinks, index) => (
          <ItemDrinksBlock key={index}>
            <ItemDescrDrinks>
              <DrinksPhoto src={drinks.image} />
              <DrinksInfo>
                <DrinksNameSpan>{drinks.name}</DrinksNameSpan>
                <AnotherInfoSnaks>
                  <DrinksPortion>
                    Portion:
                    <PortionNumberDrinks>{drinks.portion}</PortionNumberDrinks>
                  </DrinksPortion>
                  <DrinksPrice>
                    Price:
                    <DrinksPriceText>${drinks.price}</DrinksPriceText>
                  </DrinksPrice>
                </AnotherInfoSnaks>
              </DrinksInfo>
              <DrinksEditButton>
                <EditText>Edit</EditText>
              </DrinksEditButton>
            </ItemDescrDrinks>
          </ItemDrinksBlock>
        ))}
      </BlocksDrinks>
    </BlockSnaksBody>
  );
};

export default Drinks;
