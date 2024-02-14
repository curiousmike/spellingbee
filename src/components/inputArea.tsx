import { useContext, useEffect, useState } from "react";
import { SingleInputCharacter, BlinkingCursor } from "./styles";
import { GlobalContext } from "../providers/GlobalProvider";

//
// This component needs to color the input letters based on
// YELLOW - the letter is the center letter
// BLACK - the letter is in the puzzle but not center
// GRAY - the letter is *not* in the puzzle
//
// Only allow up to 20 letter words
const maxLength = 20;
export function InputArea() {
  const { currentWordGuess, setCurrentWordGuess }: any =
    useContext(GlobalContext);
  const [theInput, updateInput] = useState<string>("word");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      setCurrentWordGuess(theInput);
      return;
    }
    if (e.key === "Backspace") {
      let updatedInput = theInput;
      updatedInput = updatedInput.slice(0, -1);
      updateInput(updatedInput);
    } else {
      var pattern = new RegExp(/^[a-zA-Z]/); //acceptable char

      if (!pattern.test(e.key)) return false;

      let updatedInput = theInput;
      updatedInput = updatedInput + e.key;
      if (updatedInput.length < maxLength) {
        updateInput(updatedInput);
      } else {
        updatedInput = "";
        updateInput(updatedInput);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const getCharacters = () => {
    const nodes: any = [];
    chars.forEach((c: any, i: number) => {
      nodes.push(<SingleInputCharacter key={i}>{c}</SingleInputCharacter>);
    });
    return <BlinkingCursor>{nodes}</BlinkingCursor>;
  };

  const chars = [...theInput];
  return getCharacters();
}
