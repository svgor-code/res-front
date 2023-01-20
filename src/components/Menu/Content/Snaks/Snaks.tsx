import React from "react";
import { styled } from "@mui/system";
import img from "src/images/svg/plug.svg";
import { TextFoodMenu, TitleFoodMenu } from "src/components/UI/commonStyles";

const BlockSnaksBody = styled("div")({
  marginTop: "40px",
});

const BlocksSnaks = styled("div")({
  marginTop: "18px",
  overflowY: "scroll",
  height: "726px",
  "@media (max-height:1900px)": {
    height: "725px",
  },
});

const ItemSnaksBlock = styled("div")({
  width: "206px",
  height: "168px",
  padding: "21px 16px 38px 32px",
  marginBottom: "14px",
  background: "#0F2439",
  border: "0.5px solid #153453",
  borderRadius: "12px",
});

const SnaksEditButton = styled("button")({
  width: "43px",
  height: "20px",
  background: "rgba(46, 62, 90, 0.57)",
  borderRadius: "10%",
  border: "none",
  cursor: "pointer",
});

const EditText = styled("span")({
  fontSize: "12px",
  color: "#5C7394",
});

const InfoSnaks = styled("div")({
  marginTop: "25px",
  display: "flex",
  alignItems: "end",
});

const NameSnaksSpan = styled("span")({
  width: "146px",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "22px",
  lineHeight: "105.5%",
  color: "#ADBCE9",
});

const SnaksPhoto = styled("img")({
  width: "61px",
  height: "56px",
  borderRadius: "7px",
});

const InfoCountrySnaks = styled("div")({
  marginTop: "13px",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(173, 188, 233, 0.41)",
});

const AnotherInfoSnaks = styled("div")({
  display: "flex",
  marginTop: "20px",
});

const SnaksPortion = styled("span")({
  display: "flex",
  marginRight: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(173, 188, 233, 0.41)",
});

const PortionNumberSnaks = styled("span")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "#ADBCE9",
});

const SnaksPrice = styled("div")({
  display: "flex",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(173, 188, 233, 0.41)",
});

const SnaksPriceText = styled("div")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "100%",
  color: "#ADBCE9",
});

type SnaksType = {
  name: string;
  country: string;
  portion: number;
  price: number;
  image: any;
};

const Snaks = () => {
  const dataSnaks: SnaksType[] = [
    {
      name: "Full English breakfast",
      country: "Continental. Italian",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      country: "Continental. Italian",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      country: "Continental. Italian",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      country: "Continental. Italian",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      country: "Continental. Italian",
      portion: 20,
      price: 55,
      image: img,
    },
    {
      name: "Full English breakfast",
      country: "Continental. Italian",
      portion: 20,
      price: 55,
      image: img,
    },
  ];
  return (
    <BlockSnaksBody>
      <TitleFoodMenu>
        <TextFoodMenu>Snaks</TextFoodMenu>
      </TitleFoodMenu>
      <BlocksSnaks>
        {dataSnaks.map((snaks, index) => (
          <ItemSnaksBlock key={index}>
            <SnaksEditButton>
              <EditText>Edit</EditText>
            </SnaksEditButton>
            <InfoSnaks>
              <NameSnaksSpan>{snaks.name}</NameSnaksSpan>
              <SnaksPhoto src={snaks.image} />
            </InfoSnaks>
            <InfoCountrySnaks>{snaks.country}</InfoCountrySnaks>
            <AnotherInfoSnaks>
              <SnaksPortion>
                Portion:
                <PortionNumberSnaks>{snaks.portion}</PortionNumberSnaks>
              </SnaksPortion>
              <SnaksPrice>
                Price:
                <SnaksPriceText>${snaks.price}</SnaksPriceText>
              </SnaksPrice>
            </AnotherInfoSnaks>
          </ItemSnaksBlock>
        ))}
      </BlocksSnaks>
    </BlockSnaksBody>
  );
};

export default Snaks;
