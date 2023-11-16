"use client";

import { FunctionComponent, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarSelectedItemIndicator } from "./SidebarSelectedItemIndicator";

type SidebarItemProps = {
  icon: JSX.Element;
  targetPath: string;
  label: string;
  notifCounter?: number;
};

type SidebarItemContextState = {
  targetPath: string | null;
  currentPath: string | null;
};

export const SidebarItemContext = createContext<SidebarItemContextState>({
  targetPath: null,
  currentPath: null,
});

export const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  icon,
  targetPath,
  label,
  notifCounter,
}) => {
  const currentPath = usePathname();

  return (
    <SidebarItemContext.Provider value={{ targetPath, currentPath }}>
      <Link
        role="menuitem"
        href={targetPath}
        className={`${
          currentPath.includes(targetPath) && "bg-dark-tertiary"
        } flex items-center justify-between rounded-md pl-1 pr-4 hover:bg-dark-tertiary`}
      >
        <SidebarSelectedItemIndicator />

        <button className="flex w-full items-center gap-[0.9rem] py-2 pl-2">
          {icon}
          <span className="tracking-wide dark:text-zinc-300">{label}</span>
        </button>

        {notifCounter && (
          <span className="text-sm font-semibold dark:text-zinc-400">{notifCounter}</span>
        )}
      </Link>
    </SidebarItemContext.Provider>
  );
};
