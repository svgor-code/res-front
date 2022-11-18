import { ReactElement } from "react";
import PageHeader from "src/components/PageHeader/PageHeader";

type Props = {
  children: ReactElement;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader name="Margot Crouch" />
      {children}
    </>
  );
};

export default PageLayout;
