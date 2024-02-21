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
    inFocus,
    isInvalidWord,
    letters,
    coreLetter,
    currentWordGuess,
    wordsFound,
    wordPermutations,
    setWordsFound,
    setCurrentWordGuess,
    setIsInvalidWord,
    setWordPoints,
  }: any = useContext(GlobalContext);
  const [theInput, updateInput] = useState<string>(currentWordGuess);

  const isPangram = () => {
    // did theInput use at least one of coreLetter and letters?
    const allLetters = [coreLetter, ...letters];
    let valid = true;
    allLetters.forEach((letter: any) => {
      if (!theInput.includes(letter)) {
        valid = false;
      }
    });
    return valid;
  };

  const checkWordValidity = () => {
    const simpleChecks =
      !isInvalidWord &&
      theInput.length >= MinWordLength &&
      theInput.length < MaxWordLength;
    const wordExistsInList = wordPermutations.includes(theInput);

    let wordExistsInFoundWords = false;
    wordsFound.forEach((word: any) => {
      if (word.word === theInput) {
        wordExistsInFoundWords = true;
      }
    });

    const valid = simpleChecks && wordExistsInList && !wordExistsInFoundWords;

    if (!valid) return 0;

    let points = 0;
    if (theInput.length === MinWordLength) {
      points = 1;
    } else if (isPangram()) {
      points = theInput.length + 7;
    } else {
      points = theInput.length;
    }

    return points;
  };

  function handleKeyDown(e: KeyboardEvent) {
    setIsInvalidWord(null);

    if (e.key === "Enter") {
      setCurrentWordGuess(theInput);
      const points = checkWordValidity();
      if (points) {
        const updatedWordsFound = [...wordsFound];
        const newWord = { word: theInput, points: points };
        updatedWordsFound.push(newWord);
        setWordsFound(updatedWordsFound);
        setWordPoints(points);
        updateInput("");
      } else {
        setIsInvalidWord(theInput);
        setTimeout(() => setIsInvalidWord(false), 1000);
      }
      return;
    }
    if (e.key === "Backspace") {
      let updatedInput = theInput;
      updatedInput = updatedInput.slice(0, -1);
      updateInput(updatedInput);
      return;
    }

    if (e.key.length > 1) return; // 'Shift' 'F12'

    var pattern = new RegExp(/^[a-zA-Z]/); //acceptable chars
    if (!pattern.test(e.key)) return false;

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
    return inFocus ? (
      <BlinkingCursor>{nodes}</BlinkingCursor>
    ) : (
      <div> {nodes}</div>
    );
  };
  return getCharacterNodes();
}
