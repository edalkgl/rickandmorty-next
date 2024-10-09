"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { GenderType, ICharacter, StatusType } from "@/src/constants/Type";
import { XCharacterItem } from "@/src/components/XCharacterItem";
import { XCheckbox } from "@/src/components/XCheckbox";
import { searchFilterAtom } from "@/src/stores";
import { XStore } from "@/src/provider";

interface IProps {
  character: ICharacter | undefined;
}

export const HomeCharacterView: React.FC<IProps> = ({ character }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const status = searchParams.get("status") || "";
  const gender = searchParams.get("gender") || "";

  const handleStatusChange = (newStatus: StatusType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", newStatus as string);
    router.push(`?${params.toString()}`);
    XStore.set(searchFilterAtom, (arg) => ({
      ...arg,
      status: newStatus,
    }));
  };

  const handleGenderChange = (newGender: GenderType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("gender", newGender as string);
    router.push(`?${params.toString()}`);
    XStore.set(searchFilterAtom, (arg) => ({
      ...arg,
      gender: newGender,
    }));
  };

  return (
    <section className="bg-black px-4 py-12 lg:px-0">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[14rem_1fr]">
          <div className="grid gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-white">Status</p>
              <XCheckbox
                onChange={() => handleStatusChange("alive")}
                checked={status === "alive"}
                text={"Alive"}
              />
              <XCheckbox
                onChange={() => handleStatusChange("dead")}
                checked={status === "dead"}
                text={"Dead"}
              />
              <XCheckbox
                onChange={() => handleStatusChange("unknown")}
                checked={status === "unknown"}
                text={"Unknown"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-white">Gender</p>
              <XCheckbox
                onChange={() => handleGenderChange("female")}
                checked={gender === "female"}
                text={"Female"}
              />
              <XCheckbox
                onChange={() => handleGenderChange("male")}
                checked={gender === "male"}
                text={"Male"}
              />
              <XCheckbox
                onChange={() => handleGenderChange("genderless")}
                checked={gender === "genderless"}
                text={"Genderless"}
              />
              <XCheckbox
                onChange={() => handleGenderChange("unknown")}
                checked={gender === "unknown"}
                text={"Unknown"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
            {character?.results?.map((item) => (
              <XCharacterItem
                title={item?.name}
                src={item?.image}
                key={item?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
