import { ReactElement } from "react";
import { styled } from "@mui/system";
import PageHeader from "src/components/PageHeader/PageHeader";
import PageSideBar from "src/components/PageSidebar/PageSidebar";
import NormalHeader from "src/components/PageHeader/NormalHeader";

type Props = {
  children: ReactElement;
};

const Main = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: "100vh",
});

const MainRight = styled("div")({
  width: "100%",
});

const Content = styled("div")({
  width: "100%",
  height: "90%",
  background: "yellow",
});

const NormalSidebar = styled("div")({
  width: "15%",
  height: "100%",
  background: "#081A2C",
  borderRight: "1px solid #030f1c",
  // boxShadow: "5px -2px 5px -5px red",
});

const PageLayout = ({ children }: Props) => {
  console.log(children);
  return (
    <Main>
      <NormalSidebar></NormalSidebar>
      <MainRight>
        <NormalHeader />
        {children}
      </MainRight>
    </Main>
  );
};

export default PageLayout;
