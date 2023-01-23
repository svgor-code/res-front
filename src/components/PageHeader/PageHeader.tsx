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
});

const LogoPosition = styled("div")({
  width: "10%",
  height: "100%",
  background: "#081A2C",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "1px solid #01070E",

  "@media (max-width:1900px)": { borderRight: "0" },
  "@media (max-width:992px)": { width: "20%" },
  "@media (max-width:768px)": { width: "35%" },
});

const HeaderItems = styled("div")({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width:768px)": { justifyContent: "end" },
});

const HeaderItemsLeft = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 1%",

  "@media (max-width:768px)": { display: "none" },
});

const HeaderItemsRight = styled("div")({
  width: "17%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 3%",

  "@media (max-width:1200px)": { width: "25%" },
  "@media (max-width:992px)": { width: "35%" },
  "@media (max-width:768px)": { width: "60%" },
  "@media (max-width:576px)": { width: "85%" },
});

const UserGreeting = styled("h2")({
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
  marginRight: "5%",

  "@media (max-width:992px)": { display: "none" },
});

const BlackBlock = styled("div")({
  width: "40%",
  background: "black",
  fontWeight: "400",
  fontSize: "14px",
  color: "#748BA0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "5%",

  "@media (max-width:768px)": { display: "none" },
});

const SmallBlackBlock = styled("div")({
  width: "50%",
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
        <img src={logo} alt="camera" />
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
