import { ReactElement } from "react";
import { styled } from "@mui/system";
import PageHeader from "src/components/PageHeader/PageHeader";
import PageSidebar from "src/components/PageSidebar/PageSidebar";

type Props = {
  children: ReactElement;
};

const Main = styled("div")({
  height: "100%",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#030f1c",
});

const Content = styled("div")({
  width: "100%",
  height: "93%",
  display: "flex",
  justifyContent: "space-between",

  "@media (max-width:1900px)": { flexDirection: "column" },
});

const PageLayout = ({ children }: Props) => {
  return (
    <Main>
      <PageHeader />
      <Content>
        <PageSidebar />
        {children}
      </Content>
    </Main>
  );
};

export default PageLayout;
