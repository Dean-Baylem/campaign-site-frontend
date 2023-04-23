import { createContext } from "react";

export const WorldContext = createContext({
  currentWorld: null,
  changeWorld: () => {},
});
