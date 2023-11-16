import { FunctionComponent, useContext } from "react";
import { SidebarItemContext } from "./SidebarItem";

export const SidebarSelectedItemIndicator: FunctionComponent = () => {
  const { targetPath, currentPath } = useContext(SidebarItemContext);

  return (
    <div
      className={`${
        currentPath?.includes(targetPath as string) ? "bg-indigo-600" : "bg-transparent"
      } h-4 w-[0.35rem] rounded bg-indigo-600`}
    />
  );
};
