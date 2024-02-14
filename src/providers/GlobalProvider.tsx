import { createContext, useState } from "react";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [wordPermutations, setWordPermutations] = useState([]);
  const [currentWordGuess, setCurrentWordGuess] = useState(null);
  const letters = "nicatey";
  const coreLetter = "a";
  return (
    <GlobalContext.Provider
      value={{
        coreLetter,
        currentWordGuess,
        letters,
        wordPermutations,
        setCurrentWordGuess,
        setWordPermutations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
