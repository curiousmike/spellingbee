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
  const [pointsTotal, setPointsTotal] = useState(0);
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        coreLetter,
        currentWordGuess,
        isError,
        inFocus,
        isInvalidWord,
        isLoading,
        letters,
        pointsTotal,
        wordsFound,
        wordPermutations,
        wordPoints,
        setCoreLetter,
        setCurrentWordGuess,
        setError,
        setInFocus,
        setIsInvalidWord,
        setIsLoading,
        setLetters,
        setPointsTotal,
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
