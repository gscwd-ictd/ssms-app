import { FunctionComponent } from "react";

type PageContentProps = {
  children: React.ReactNode;
};

export const PageContainer: FunctionComponent<PageContentProps> = ({ children }) => {
  return <main className="h-full w-full overflow-x-auto p-4 dark:bg-dark-primary">{children}</main>;
};
