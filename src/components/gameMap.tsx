import { useContext } from "react";
import { OutsideLetterContainer, GameMapContainer } from "./styles";
import { LetterContainer } from "./letterContainer";
import { InputArea } from "./inputArea";
import { WordResult } from "./wordResult";
import { GlobalContext } from "../providers/GlobalProvider";

export function GameMap() {
  const { letters, coreLetter, setInFocus }: any = useContext(GlobalContext);

  function checkDocumentFocus() {
    setInFocus(document.hasFocus());
  }
  setInterval(checkDocumentFocus, 300);

  if (!letters) return <></>;

  const topLetters = [letters[0], letters[1], letters[2]];
  const middleLetter = coreLetter;
  const bottomLetters = [letters[3], letters[4], letters[5]];
  return (
    <GameMapContainer>
      <WordResult />
      <InputArea />
      <OutsideLetterContainer>
        <LetterContainer letters={topLetters} />
        <LetterContainer letters={middleLetter} />
        <LetterContainer letters={bottomLetters} />
      </OutsideLetterContainer>
    </GameMapContainer>
  );
}
