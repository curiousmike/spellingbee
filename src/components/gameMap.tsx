import { useContext } from "react";
import {
  OutsideLetterContainer,
  GameMapContainer,
  Spinner,
  InformationContainer,
} from "./styles";
import { LetterContainer } from "./letterContainer";
import { InputArea } from "./inputArea";
import { WordResult } from "./wordResult";
import { GlobalContext } from "../providers/GlobalProvider";

export function GameMap() {
  const { isError, isLoading, letters, coreLetter }: any =
    useContext(GlobalContext);

  if (!letters || isLoading || isError)
    return (
      <InformationContainer>{isError || <Spinner />}</InformationContainer>
    );

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
