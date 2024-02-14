import { useContext, useEffect } from "react";
import { GlobalContext } from "./providers/GlobalProvider";
import { Solver } from "./utils/solver";
import { MinWordLength } from "./utils/constants.js";

export function Setup() {
  const { letters, coreLetter, wordPermutations, setWordPermutations }: any =
    useContext(GlobalContext);
  useEffect(() => {
    if (letters && wordPermutations.length === 0) {
      const possibleWords = Solver(letters, coreLetter, MinWordLength);
      setWordPermutations(possibleWords);
    }
  });
  return <> </>;
}
