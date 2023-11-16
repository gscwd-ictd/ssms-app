import { Sidebar } from "@ssms/components/features/navigations/SideNavigation/Sidebar";
import { PageContainer } from "@ssms/components/features/navigations/ContentNavigation/PageContainer";
import { LayoutProps } from "../layout";
import { Topbar } from "@ssms/components/features/navigations/TopNavigation/Topbar";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <Topbar />
      <div className="flex h-[calc(100%-5rem)] w-full">
        <Sidebar />
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
}
