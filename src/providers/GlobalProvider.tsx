import { createContext, useState } from "react";

export const GlobalContext = createContext({});

type FoundWord = {
  word: string;
  points: number;
};
const GlobalProvider = ({ children }: any) => {
  const [wordPermutations, setWordPermutations] = useState([]);
  const [currentWordGuess, setCurrentWordGuess] = useState(null);
  const [letters, setLetters] = useState(null);
  const [coreLetter, setCoreLetter] = useState(null);
  const [isInvalidWord, setIsInvalidWord] = useState(null);
  const [inFocus, setInFocus] = useState(true);
  const [wordsFound, setWordsFound] = useState<FoundWord[]>([]);
  const [wordPoints, setWordPoints] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        coreLetter,
        currentWordGuess,
        inFocus,
        isInvalidWord,
        letters,
        wordsFound,
        wordPermutations,
        wordPoints,
        setCoreLetter,
        setInFocus,
        setIsInvalidWord,
        setLetters,
        setCurrentWordGuess,
        setWordsFound,
        setWordPermutations,
        setWordPoints,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
