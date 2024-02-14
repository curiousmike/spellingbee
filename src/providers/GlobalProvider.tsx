import { createContext, useState } from "react";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [wordPermutations, setWordPermutations] = useState([]);
  const [currentWordGuess, setCurrentWordGuess] = useState(null);
  const [letters, setLetters] = useState(null);
  const [coreLetter, setCoreLetter] = useState(null);
  const [isInvalidWord, setIsInvalidWord] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        coreLetter,
        currentWordGuess,
        isInvalidWord,
        letters,
        wordPermutations,
        setCoreLetter,
        setIsInvalidWord,
        setLetters,
        setCurrentWordGuess,
        setWordPermutations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
