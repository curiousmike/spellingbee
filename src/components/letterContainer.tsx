import { LetterContainerDiv, NormalLetter } from "./styles";
type GameMapProps = {
  letters: string[];
};

export function LetterContainer({ letters }: GameMapProps) {
  console.log("letters[0] = ", letters);
  return (
    <LetterContainerDiv>
      <NormalLetter>{letters[0]}</NormalLetter>
      <NormalLetter>{letters[1] && letters[1]}</NormalLetter>
      <NormalLetter>{letters[2] && letters[2]}</NormalLetter>
    </LetterContainerDiv>
  );
}
