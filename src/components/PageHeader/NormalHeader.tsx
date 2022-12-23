import React from "react";
import { styled } from "@mui/system";
import avatar from "src/images/svg/avatar.svg";
import logo from "src/images/svg/Logo.svg";

const NormalHeaderBlock = styled("div")({
  width: "100%",
  height: "7%",
  background: "#081A2C",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LogoPosition = styled("div")({
  width: "10%",
  height: "100%",
  background: "#081A2C",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "1px solid #01070E",
});

const LogoImage = styled("img")({});

const HeaderItems = styled("div")({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const HeaderLeft = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 1%",
});

const HeaderRight = styled("div")({
  width: "17%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 3%",
});

const UserGreeting = styled("h2")({
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
  marginRight: "5%",
});

const BlackBlock = styled("div")({
  width: "170px",
  height: "40px",
  background: "black",
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "5%",
});

const SmallBlackBlock = styled("div")({
  width: "114px",
  height: "28px",
  background: "black",
  fontWeight: "400",
  fontSize: "12px",
  color: "#215FFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Avatar = styled("img")({});

const NameUser = styled("h2")({
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
});

const NormalHeader = () => {
  return (
    <NormalHeaderBlock>
      <LogoPosition>
        <LogoImage src={logo} alt="camera" />
      </LogoPosition>

      <HeaderItems>
        <HeaderLeft>
          <UserGreeting>Hello Magrot, Welcome to Spoons</UserGreeting>
          <BlackBlock>Restaurant Open</BlackBlock>
          <BlackBlock>24 September 2022</BlackBlock>
        </HeaderLeft>

        <HeaderRight>
          <SmallBlackBlock>Last login: 13:22</SmallBlackBlock>
          <Avatar src={avatar} />
          <NameUser>Margot Crouch</NameUser>
        </HeaderRight>
      </HeaderItems>
    </NormalHeaderBlock>
  );
};

export default NormalHeader;
