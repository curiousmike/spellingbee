import { useContext, useEffect, useState } from "react";
import { SingleInputCharacter, BlinkingCursor } from "./styles";
import { GlobalContext } from "../providers/GlobalProvider";
import * as DESIGN from "../utils/styleConstants";
import { MinWordLength, MaxWordLength } from "../utils/constants";
//
// This component needs to color the input letters based on
// YELLOW - the letter is the center letter
// BLACK - the letter is in the puzzle but not center
// GRAY - the letter is *not* in the puzzle
//
export function InputArea() {
  const {
    isInvalidWord,
    letters,
    coreLetter,
    currentWordGuess,
    wordPermutations,
    setCurrentWordGuess,
    setIsInvalidWord,
  }: any = useContext(GlobalContext);
  const [theInput, updateInput] = useState<string>(currentWordGuess);

  const checkWordValidity = () => {
    const simpleChecks =
      !isInvalidWord &&
      theInput.length >= MinWordLength &&
      theInput.length < MaxWordLength;
    const wordExistsInList = wordPermutations.includes(theInput);
    return simpleChecks && wordExistsInList;
  };

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      setCurrentWordGuess(theInput);
      if (checkWordValidity()) {
        console.log("add word - ", theInput);
      } else console.log("Invalid word!");
      return;
    }
    if (e.key === "Backspace") {
      let updatedInput = theInput;
      updatedInput = updatedInput.slice(0, -1);
      updateInput(updatedInput);
      return;
    }
    var pattern = new RegExp(/^[a-zA-Z]/); //acceptable chars
    if (!pattern.test(e.key)) return false;

    const invalidCharExists = !letters.includes(e.key) && e.key !== coreLetter;
    setIsInvalidWord(invalidCharExists);

    let updatedInput = theInput || "";
    updatedInput = updatedInput + e.key;
    if (updatedInput.length < MaxWordLength) {
      updateInput(updatedInput);
    } else {
      updatedInput = "";
      updateInput(updatedInput);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const getCharacterNodes = () => {
    const nodes: any = [];
    const chars = theInput ? [...theInput] : [];

    chars.forEach((singleChar: string, i: number) => {
      const isNormal: boolean = letters.includes(singleChar);
      const isCore: boolean = singleChar === coreLetter;
      nodes.push(
        <SingleInputCharacter
          key={i}
          style={{
            color: isNormal
              ? DESIGN.COLOR_GRAY
              : isCore
              ? DESIGN.COLOR_YELLOW
              : DESIGN.COLOR_MIDGRAY,
          }}
        >
          {singleChar}
        </SingleInputCharacter>
      );
    });
    return <BlinkingCursor>{nodes}</BlinkingCursor>;
  };

  return getCharacterNodes();
}
