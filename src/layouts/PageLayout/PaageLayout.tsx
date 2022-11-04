import PageHeader from "../../components/PageHeader/PageHeader";
import PageSidebar from "../../components/PageSidebar/PageSidebar";

type PageLayoutProps = {
  children: any;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <PageHeader />
      {children}
      <PageSidebar />
    </>
  );
}
