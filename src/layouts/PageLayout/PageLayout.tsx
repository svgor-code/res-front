import PageHeader from "../../components/PageHeader/PageHeader";
import PageSidebar from "../../components/PageSidebar/PageSidebar";

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
