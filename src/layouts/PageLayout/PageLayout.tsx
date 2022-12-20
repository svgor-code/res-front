import { ReactElement } from "react";
import { styled } from "@mui/system";
import NormalHeader from "src/components/PageHeader/NormalHeader";
import PageSidebar from "src/components/PageSidebar/PageSidebar";

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

const PageLayout = ({ children }: Props) => {
  return (
    <Main>
      <PageSidebar />
      <MainRight>
        <NormalHeader />
        {children}
      </MainRight>
    </Main>
  );
};

export default PageLayout;
