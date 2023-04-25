import { createContext } from "react";

export const ItemGenContext = createContext({
  itemList: null,
  updateItem: () => {},
});
