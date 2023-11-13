import { FunctionComponent, ReactNode } from "react";

type SidebarItemsGroupProps = {
  children: ReactNode | ReactNode[];
  header?: string;
};

export const SidebarItemsGroup: FunctionComponent<SidebarItemsGroupProps> = ({
  header,
  children,
}) => {
  return (
    <>
      <header className="px-4 pb-1">
        <label className="text-xs font-semibold tracking-widest text-zinc-300/50">{header}</label>
      </header>
      {children}
    </>
  );
};
