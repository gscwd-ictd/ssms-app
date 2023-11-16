import { FunctionComponent } from "react";
import Image from "next/image";

export const TopbarUserAvatar: FunctionComponent = () => {
  return (
    <>
      <div className="flex items-center gap-3 pr-8">
        <Image
          src="/mock/profile5.jpg"
          alt="profile"
          width={500}
          height={500}
          className="inline-block h-10 w-10 shrink-0 rounded-full border-2 object-cover"
        />

        <section className="w-44 leading-5">
          <h3 className="line-clamp-1 font-medium text-zinc-200">John S. Doe</h3>
          <p className="truncate text-sm text-zinc-400">john.doe@gscwd.com</p>
        </section>
      </div>
    </>
  );
};
