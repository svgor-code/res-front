import { ReactElement } from "react";
import { styled } from "@mui/system";
import NormalHeader from "src/components/PageHeader/NormalHeader";
import PageSidebar from "src/components/PageSidebar/PageSidebar";

type Props = {
  children: ReactElement;
};

const Main = styled("div")({
  height: "100vh",
});

const Content = styled("div")({
  width: "100%",
  height: "93%",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width:1700px)": {
    flexDirection: "column",
    height: "93%",
  },
});

const PageLayout = ({ children }: Props) => {
  return (
    <Main>
      <NormalHeader />
      <Content>
        <PageSidebar />
        {children}
      </Content>
    </Main>
  );
};

export default PageLayout;
