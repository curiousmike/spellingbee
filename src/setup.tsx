import { useContext, useEffect } from "react";
import { GlobalContext } from "./providers/GlobalProvider";
import { Solver } from "./utils/solver";
import { MinWordLength } from "./utils/constants.js";

export function Setup() {
  const { letters, setCoreLetter, setWordPermutations, setLetters }: any =
    useContext(GlobalContext);
  const lettersToUse = "nictey";
  const core = "a";
  useEffect(() => {
    if (!letters) {
      setLetters(lettersToUse);
      setCoreLetter(core);
      const possibleWords = Solver(lettersToUse, core, MinWordLength);
      setWordPermutations(possibleWords);
      console.log("posible = ", possibleWords);
    }
  });
  return <> </>;
}
