import { FunctionComponent } from "react";
import {
  DailyLogsSidebarItemIcon,
  DashboardSidebarItemIcon,
  MessagesSidebarItemIcon,
  RequestsSidebarItemIcon,
  TicketsSidebarItemIcon,
} from "./SidebarItemIcons";
import { SidebarItem } from "./SidebarItem";
import { SidebarItemsGroup } from "./SidebarItemsGroup";
import { SidebarHeader } from "./SidebarHeader";

export const Sidebar: FunctionComponent = () => {
  return (
    <aside className="w-72 flex-shrink-0 border-r dark:border-r-zinc-700 dark:bg-dark-secondary">
      {/* <section className="mt-10 flex items-center justify-center">
        <SidebarHeader />
      </section> */}

      <ul role="menu" className="space-y-2 p-4">
        <SidebarItemsGroup>
          <SidebarItem
            icon={<DashboardSidebarItemIcon />}
            targetPath="/dashboard"
            label="Dashboard"
            notifCounter={undefined}
          />

          <SidebarItem
            icon={<RequestsSidebarItemIcon />}
            targetPath="/requests"
            label="Requests"
            notifCounter={25}
          />

          <SidebarItem
            icon={<TicketsSidebarItemIcon />}
            targetPath="/tickets"
            label="Tickets"
            notifCounter={10}
          />

          <SidebarItem
            icon={<DailyLogsSidebarItemIcon />}
            targetPath="/daily-logs"
            label="Daily Logs"
            notifCounter={undefined}
          />

          <SidebarItem
            icon={<MessagesSidebarItemIcon />}
            targetPath="/messages"
            label="Messages"
            notifCounter={4}
          />
        </SidebarItemsGroup>
      </ul>
    </aside>
  );
};
