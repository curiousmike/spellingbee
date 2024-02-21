import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../providers/GlobalProvider";
import { WordResultContainer } from "./styles";
export function WordResult() {
  const { isInvalidWord, wordsFound, wordPoints }: any =
    useContext(GlobalContext);
  const [timeoutId, setTimeoutId]: any = useState(null);
  useEffect(() => {
    if (wordsFound.length && !isInvalidWord) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setTimeoutId(
        setTimeout(() => {
          setTimeoutId(null);
        }, 1000)
      );
    }
  }, [wordsFound]);

  return isInvalidWord ? (
    <WordResultContainer>Invalid word</WordResultContainer>
  ) : timeoutId ? (
    <WordResultContainer>Good ! {wordPoints}</WordResultContainer>
  ) : (
    <></>
  );
}
