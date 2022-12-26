import React from "react";
import { styled } from "@mui/system";
import avatar from "src/images/svg/avatar.svg";
import logo from "src/images/svg/Logo.svg";

const PageHeaderBlock = styled("div")({
  width: "100%",
  height: "7%",
  background: "#081A2C",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width:600px)": {
    display: "flex",
    justifyContent: "space-between",
  },
});

const LogoPosition = styled("div")({
  width: "10%",
  height: "100%",
  background: "#081A2C",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "1px solid #01070E",
  "@media (max-width:1700px)": {
    borderRight: "0",
  },
  "@media (max-width:992px)": {
    width: "20%",
  },
  "@media (max-width:700px)": {
    width: "35%",
  },
});

const LogoImage = styled("img")({});

const HeaderItems = styled("div")({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width:600px)": {
    justifyContent: "end",
  },
});

const HeaderItemsLeft = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 1%",
  "@media (max-width:600px)": {
    display: "none",
  },
});

const HeaderItemsRight = styled("div")({
  width: "18%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 3%",
  "@media (max-width:1420px)": {
    width: "22%",
  },
  "@media (max-width:1200px)": {
    width: "25%",
  },
  "@media (max-width:1100px)": {
    width: "28%",
  },
  "@media (max-width:1000px)": {
    width: "35%",
  },
  "@media (max-width:840px)": {
    width: "40%",
  },
  "@media (max-width:700px)": {
    width: "45%",
  },
  "@media (max-width:600px)": {
    width: "60%",
  },
  "@media (max-width:550px)": {
    width: "70%",
  },
  "@media (max-width:450px)": {
    width: "90%",
  },
});

const UserGreeting = styled("h2")({
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
  marginRight: "5%",
  "@media (max-width:992px)": {
    display: "none",
  },
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
  marginRight: "5%",
});

const Avatar = styled("img")({
  marginRight: "5%",
});

const NameUser = styled("h2")({
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
});

const PageHeader = () => {
  return (
    <PageHeaderBlock>
      <LogoPosition>
        <LogoImage src={logo} alt="camera" />
      </LogoPosition>

      <HeaderItems>
        <HeaderItemsLeft>
          <UserGreeting>Hello Magrot, Welcome to Spoons</UserGreeting>
          <BlackBlock>Restaurant Open</BlackBlock>
          <BlackBlock>24 September 2022</BlackBlock>
        </HeaderItemsLeft>

        <HeaderItemsRight>
          <SmallBlackBlock>Last login: 13:22</SmallBlackBlock>
          <Avatar src={avatar} />
          <NameUser>Margot Crouch</NameUser>
        </HeaderItemsRight>
      </HeaderItems>
    </PageHeaderBlock>
  );
};

export default PageHeader;
