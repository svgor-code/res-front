import PageHeader from "src/components/PageHeader/PageHeader";
import PageSidebar from "src/components/PageSidebar/PageSidebar";

type Props = {
  children: any;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader />
      {children}
      <PageSidebar />
    </>
  );
};

export default PageLayout;
