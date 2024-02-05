import { GameMapContainer } from "./styles";
type GameMapProps = {
  letters: string;
  coreLetter: string;
};

export function GameMap({ letters, coreLetter }: GameMapProps) {
  return (
    <GameMapContainer>
      <div>{letters}</div> <div> {coreLetter}</div>
    </GameMapContainer>
  );
}
