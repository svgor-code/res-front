import { ReactElement } from "react";
import PageHeader from "src/components/PageHeader/PageHeader";
import PageSidebar from "src/components/PageSidebar/PageSidebar";

type Props = {
  children: ReactElement;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader name="Margot Crouch" />
      {children}
      <PageSidebar />
    </>
  );
};

export default PageLayout;
