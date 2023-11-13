"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { FunctionComponent, ReactNode, useState } from "react";
import { useReactQueryDevTool } from "../hooks/useReactQueryDevTool";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";

type MyQueryProviderProps = {
  children: ReactNode;
};

const ProductionModeReactQueryDevTools = dynamic(
  () =>
    import("@tanstack/react-query-devtools/production").then((tool) => ({
      default: tool.ReactQueryDevtools,
    })),
  { ssr: false },
);

export const MyQueryProvider: FunctionComponent<MyQueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(new QueryClient());
  const show = useReactQueryDevTool((state) => state.show);

  return (
    <QueryClientProvider client={queryClient}>
      {/**
       * The child component that will be the recipient of the query state
       */}
      <>{children}</>

      {/**
       * Initialize React Query Dev Tools even on production mode
       */}
      <>
        <ReactQueryDevtools initialIsOpen={false} />
        {show && (
          <React.Suspense fallback={null}>
            <ProductionModeReactQueryDevTools />
          </React.Suspense>
        )}
      </>
    </QueryClientProvider>
  );
};
