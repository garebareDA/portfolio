import { createContext, ReactElement } from "react";

type Value = {
  elements: ReactElement[];
  tags: string | null;
}

export default createContext<Value>({
  elements: [],
  tags: null
});