import Image from "next/image";

import { fontCreepster } from "@/src/helpers/fontHelper";
import { cn } from "@/src/helpers/tailwindHelper";

interface IProps {
  title: string;
  src: string;
}

export const XCharacterItem: React.FC<IProps> = ({ title, src }) => {
  return (
    <div className="relative flex flex-col">
      <picture className="flex">
        <Image
          className="rounded-lg border-b-4 border-green-600"
          height={300}
          alt={title}
          width={300}
          unoptimized
          src={src}
        />
      </picture>
      <div className="absolute inset-x-0 bottom-10 bg-black/70 text-center">
        <p
          className={cn(
            "text-lg font-light text-slate-200 lg:text-3xl",
            fontCreepster.className
          )}>
          {title}
        </p>
      </div>
    </div>
  );
};
