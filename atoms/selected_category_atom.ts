import { atom } from "@mongez/react-atom";

export const selectedCategoryAtom = atom<string>({
  key: "selectedCategory",
  default: "New",
});
