import { FunctionComponent } from "react";
import Image from "next/image";
import { TopbarUserAvatar } from "./TopbarUserAvatar";

export const Topbar: FunctionComponent = () => {
  return (
    <nav className="flex h-20 w-full items-center justify-between border-b shadow-md dark:border-b-zinc-700/70 dark:bg-dark-secondary dark:shadow-zinc-950">
      <div className="flex h-full items-center gap-2 pl-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
          className="text-indigo-400"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M7 10c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4Z"
              opacity=".5"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.429 10L11 12h2l-1.429 2"
            ></path>
            <path d="M4 12c0-3.771 0-5.657 1.172-6.828C6.343 4 8.229 4 12 4c3.771 0 5.657 0 6.828 1.172C20 6.343 20 8.229 20 12c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12Z"></path>
            <path
              strokeLinecap="round"
              d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"
              opacity=".5"
            ></path>
          </g>
        </svg>
        <h1 className="text-2xl font-extrabold">SSMS</h1>
      </div>

      <TopbarUserAvatar />
    </nav>
  );
};
