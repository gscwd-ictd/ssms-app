"use client";

import { ThemeProvider } from "next-themes";
import { FunctionComponent } from "react";

type MyThemeProviderProps = {
  children: React.ReactNode;
};

export const MyThemeProvider: FunctionComponent<MyThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
