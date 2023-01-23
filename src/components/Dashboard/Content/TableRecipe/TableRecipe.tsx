import React, { useState } from "react";
import { styled } from "@mui/system";
import ratingImg from "src/images/svg/rating.svg";
import {
  DashedLine,
  NameDashboardItem,
  ViewButton,
} from "src/components/UI/commonStyles";

const BlockTableRecipe = styled("div")({
  width: "21%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  padding: "1%  1.5%",

  "@media (max-width:1900px)": { width: "45.9%" },
  "@media (max-width: 1200px)": { width: "45.3%" },
  "@media (max-width:992px)": { width: "44.9%" },
  "@media (max-width:768px)": { width: "44.7%" },
  "@media (max-width:576px)": { width: "94.5%" },
});

const TableRecipeBlocks = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "18px",
  marginBottom: "18px",
});

const BlockDishes = styled("div")({
  textAlign: "center",
  width: "37%",
  height: "110px",
  background: "#061321",
  borderRadius: "10px",
  "@media (max-width:1900px)": {
    width: "44%",
    height: "100px",
  },
});

const BlockNumber = styled("div")({
  marginTop: "20px",
  marginBottom: "20px",
  "@media (max-width:1900px)": {
    marginTop: "10px",
    marginBottom: "11px",
  },
});

const BlockNumberSpan = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#FC224F",
});

const TableRecipeBlockVeg = styled("div")({
  marginTop: "20px",
  marginBottom: "20px",
});

const BlockVegSpan = styled("span")({
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#7E89A8",
});

const BlockNumberSpanNonVeg = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#14CC74",
});

const BlockPopulars = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#7E89A8",
});

const PopularsBody = styled("div")({
  marginTop: "18px",
  "@media (max-width:1900px)": {
    marginTop: "10px",
  },
});

const PopularsItems = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const PopularsItemLeft = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PopularsItem = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "28px",
  height: "28px",
  border: "1px solid #4B2C57",
  borderRadius: "6px",
});

const PopularsItemSpan = styled("span")({
  fontSize: "12px",
  lineHeight: "14px",
  color: "#FA59C7",
});

const PopularsItemName = styled("div")({
  marginLeft: "12px",
  width: "88px",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#7E89A8",
});

const PopularsItemRight = styled("div")({
  display: "flex",
  alignItems: "center",
});

const PopularsItemRightImg = styled("div")({
  display: "flex",
  alignItems: "center",
});

const PopularsItemRightRatingImg = styled("img")({});

const PopularsItemRightRating = styled("div")({
  marginLeft: "7px",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#7E89A8",
});

const TableRecipeLineView = styled("div")({
  display: "flex",
  justifyContent: "end",
  marginTop: "25px",
});

const TableRecipe = () => {
  const dishes = [
    { number: "01", name: "Caper and chickpea pasta", rating: "4.5" },
    { number: "02", name: "Fish and pasta casserole", rating: "4.5" },
    { number: "03", name: "Squash and coconut bread", rating: "4.5" },
    { number: "04", name: "Squash and coconut bread", rating: "4.5" },
  ];

  const [veg, setVeg] = useState<string>("35");
  const [nonVeg, setNonVeg] = useState<string>("29");

  return (
    <BlockTableRecipe>
      <NameDashboardItem>Todays Recipe/Dish</NameDashboardItem>

      <TableRecipeBlocks>
        <BlockDishes>
          <BlockNumber>
            <BlockNumberSpan>{veg}</BlockNumberSpan>
          </BlockNumber>

          <TableRecipeBlockVeg>
            <BlockVegSpan>Non-Veg Dishes</BlockVegSpan>
          </TableRecipeBlockVeg>
        </BlockDishes>

        <BlockDishes>
          <BlockNumber>
            <BlockNumberSpanNonVeg>{nonVeg}</BlockNumberSpanNonVeg>
          </BlockNumber>

          <TableRecipeBlockVeg>
            <BlockVegSpan>Veg Dishes</BlockVegSpan>
          </TableRecipeBlockVeg>
        </BlockDishes>
      </TableRecipeBlocks>

      <BlockPopulars>Popular Dishes</BlockPopulars>

      {dishes.map((dish, index) => (
        <PopularsBody key={index}>
          <PopularsItems>
            <PopularsItemLeft>
              <PopularsItem>
                <PopularsItemSpan>{dish.number}</PopularsItemSpan>
              </PopularsItem>
              <PopularsItemName>{dish.name}</PopularsItemName>
            </PopularsItemLeft>

            <PopularsItemRight>
              <PopularsItemRightImg>
                <PopularsItemRightRatingImg src={ratingImg} alt="rating" />
              </PopularsItemRightImg>

              <PopularsItemRightRating>{dish.rating}</PopularsItemRightRating>
            </PopularsItemRight>
          </PopularsItems>
          {dishes.length - 1 !== index && <DashedLine />}
        </PopularsBody>
      ))}

      <TableRecipeLineView>
        <ViewButton>View All</ViewButton>
      </TableRecipeLineView>
    </BlockTableRecipe>
  );
};

export default TableRecipe;
