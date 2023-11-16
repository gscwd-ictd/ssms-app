import { HTMLAttributes, forwardRef } from "react";

export const PageTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadElement>>(
  ({ children, ...props }, ref) => {
    return (
      <h1 ref={ref} {...props}>
        {children}
      </h1>
    );
  },
);

PageTitle.displayName = "PageTitle";
