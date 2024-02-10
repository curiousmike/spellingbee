import { OutsideLetterContainer, GameMapContainer } from "./styles";
import { LetterContainer } from "./letterContainer";
type GameMapProps = {
  letters: string;
};

export function GameMap({ letters }: GameMapProps) {
  const topLetters = [letters[0], letters[1], letters[2]];
  const middleLetter = [letters[3]];
  const bottomLetters = [letters[4], letters[5], letters[6]];
  return (
    <GameMapContainer>
      <input defaultValue={"Type or click"} />
      <OutsideLetterContainer>
        <LetterContainer letters={topLetters} />
        <LetterContainer letters={middleLetter} />
        <LetterContainer letters={bottomLetters} />
      </OutsideLetterContainer>
    </GameMapContainer>
  );
}
