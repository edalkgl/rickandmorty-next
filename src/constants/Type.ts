export type StatusType = "unknown" | undefined | "alive" | "dead";
export type GenderType =
  | "genderless"
  | "unknown"
  | undefined
  | "female"
  | "male";

export interface ICharacter {
  results: Array<{
    status: string;
    gender: string;
    image: string;
    name: string;
    id: number;
  }>;
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number;
  };
}
