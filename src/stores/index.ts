import { atom } from "jotai";

import { GenderType, StatusType } from "@/src/constants/Type";

/**
 * global
 */
export const xAtom = atom("X");

/**
 * filter
 */
export const searchFilterAtom = atom<{
  status: StatusType;
  gender: GenderType;
}>({
  status: undefined,
  gender: undefined,
});
