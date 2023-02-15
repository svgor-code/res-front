import React from "react";

import { styled } from "@mui/system";

import {
  NameDashboardItem,
  TextFoodMenu,
  TitleFoodMenu,
} from "src/components/UI/commonStyles";

import img from "src/images/svg/plug.svg";

const BlockFoodMenuBody = styled("div")({
  width: "33%",
});

const CoursesBlock = styled("div")({
  marginTop: "19px",
  overflowY: "scroll",
  height: "726px",
  paddingRight: "34px",
  "&::-webkit-scrollbar": {
    width: "4px",
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

const ItemCourseBlock = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "15px",
  height: "127px",
  background: "#0F2439",
  border: "0.5px solid #153453",
  borderRadius: "10px",
});

const ItemCourseImg = styled("img")({
  display: "block",
  width: "100px",
  height: "97px",
  borderRadius: "50%",
});

const ItemCourseInfo = styled("div")({
  marginLeft: "15px",
});

const ItemCourseTitle = styled("div")({
  width: "150px",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "105.5%",
  color: "#ADBCE9",
});

const ItemCourseCountry = styled("div")({
  marginTop: "13px",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(173, 188, 233, 0.41)",
});

const ItemCoursePrice = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "66px",
  height: "59px",
  background: "#122642c2",
  borderRadius: "10px",
});

const ItemCourseTotal = styled("span")({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "25px",
  lineHeight: "29px",
  background: "linear-gradient(152.1deg, #3353FA 0%, #FA33CE 109.04%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const ItemCourseDollar = styled("span")({
  marginBottom: "7px",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  background: "#234989",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
});

type CoursesType = {
  name: string;
  country: string;
  price: number;
  image: any;
};

const MainCourse = () => {
  const courses: CoursesType[] = [
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
    {
      name: "Cream Cheese Frosting",
      country: "Continental. Italian",
      price: 55,
      image: img,
    },
  ];
  return (
    <BlockFoodMenuBody>
      <NameDashboardItem>Today`s Menu</NameDashboardItem>
      <TitleFoodMenu>
        <TextFoodMenu>Main Course</TextFoodMenu>
      </TitleFoodMenu>
      <CoursesBlock>
        {courses.map((course, index) => (
          <ItemCourseBlock key={index}>
            <ItemCourseImg src={course.image} />
            <ItemCourseInfo>
              <ItemCourseTitle>{course.name}</ItemCourseTitle>
              <ItemCourseCountry>{course.country}</ItemCourseCountry>
            </ItemCourseInfo>
            <ItemCoursePrice>
              <ItemCourseDollar>$</ItemCourseDollar>
              <ItemCourseTotal>{course.price}</ItemCourseTotal>
            </ItemCoursePrice>
          </ItemCourseBlock>
        ))}
      </CoursesBlock>
    </BlockFoodMenuBody>
  );
};

export default MainCourse;
