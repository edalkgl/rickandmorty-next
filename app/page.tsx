import Image from "next/image";
import Link from "next/link";

import { GenderType, ICharacter, StatusType } from "@/src/constants/Type";
import { HomeCharacterView } from "@/src/views/home-character";
import { fontCreepster } from "@/src/helpers/fontHelper";
import { cn } from "@/src/helpers/tailwindHelper";

async function getData({
  status,
  gender,
}: {
  status: StatusType;
  gender: GenderType;
}) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?status=${status}&gender=${gender}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  return response.json();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) {
  const status = searchParams?.status || "alive";
  const gender = searchParams?.gender || "male";

  const character: ICharacter = await getData({
    status: status as StatusType,
    gender: gender as GenderType,
  });

  return (
    <div>
      <header className="flex items-center justify-center bg-base-black">
        <div className="px-4 py-3">
          <Link href={"/"}>
            <Image
              src={"https://cdn-w1.netlify.app/other/2024/logo.png"}
              className="flex h-24 w-auto"
              alt={"logo"}
              width={1280}
              height={544}
              unoptimized
              priority
            />
          </Link>
        </div>
      </header>

      <main>
        <section className="relative py-12 lg:py-24">
          <span className="absolute inset-0 z-10 bg-black/50" />
          <picture className="absolute inset-0 bg-black/70">
            <Image
              src={"https://cdn-w1.netlify.app/other/2024/background.jpg"}
              className="size-full object-cover"
              alt={"background"}
              height={500}
              width={2048}
              priority
            />
          </picture>

          <div className="container px-4 lg:px-0">
            <h1
              className={cn(
                "relative z-20 text-center text-5xl font-semibold text-base-white lg:text-left",
                fontCreepster.className
              )}>
              The Rick and Morty UI
            </h1>
          </div>
        </section>

        <HomeCharacterView character={character} />
      </main>
    </div>
  );
}
