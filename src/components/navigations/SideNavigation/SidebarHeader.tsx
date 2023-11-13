import Image from "next/image";
import { FunctionComponent } from "react";

export const SidebarHeader: FunctionComponent = () => {
  return (
    <div className="mb-10 flex items-center gap-3 px-1">
      <Image
        src="/mock/profile5.jpg"
        alt="profile"
        width={500}
        height={500}
        className="inline-block h-12 w-12 shrink-0 rounded-full border-4 object-cover"
      />

      <section className="w-44 leading-5">
        <h3 className="font-medium text-zinc-200">John S. Doe</h3>
        <p className="truncate text-sm text-zinc-400">john.doe@gscwd.com</p>
      </section>
    </div>
  );
};
