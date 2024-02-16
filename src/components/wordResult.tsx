import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../providers/GlobalProvider";
export function WordResult() {
  const { isInvalidWord, wordsFound }: any = useContext(GlobalContext);
  const [newestWord, setNewestWord] = useState(null);
  useEffect(() => {
    //React strict mode (in index.tsx) has this render twice - it doesn't break my code.
    if (wordsFound.length && !isInvalidWord) {
      const index = wordsFound.length - 1;
      setNewestWord(wordsFound[index].word);
      setTimeout(() => setNewestWord(null), 1000);
    }
  }, [wordsFound]);
  return isInvalidWord ? (
    <div>Invalid word {isInvalidWord}</div>
  ) : newestWord ? (
    <div>Good word ! {newestWord}</div>
  ) : (
    <></>
  );
}
