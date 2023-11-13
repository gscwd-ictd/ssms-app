import { Sidebar } from "@ssms/components/navigations/SideNavigation/Sidebar";
import { LayoutProps } from "../layout";
import PageContent from "@ssms/components/navigations/PageContent/PageContent";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <PageContent>{children}</PageContent>
    </div>
  );
}
