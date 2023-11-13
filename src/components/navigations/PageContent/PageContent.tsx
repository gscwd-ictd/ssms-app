type PageContentProps = {
  children: React.ReactNode;
};

export default function PageContent({ children }: PageContentProps) {
  return <main className="w-full dark:bg-dark-primary">{children}</main>;
}
