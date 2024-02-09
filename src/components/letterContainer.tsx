import { LetterContainerDiv, NormalLetter } from "./styles";
type GameMapProps = {
  letters: string[];
};

export function LetterContainer({ letters }: GameMapProps) {
  const hexagon = (isCenter: boolean) => (
    <polygon
      style={{
        cursor: "pointer",
        fill: isCenter ? "yellow" : "#e6e6e6",
        transition: "all 100ms",
        color: "blue",
      }}
      points="0,50 30,0 90,0 120,50 90,100 30,100"
      stroke="black"
      strokeWidth="1"
    ></polygon>
  );
  return (
    <LetterContainerDiv>
      <NormalLetter>
        <svg height="120" width="120" xmlns="http://www.w3.org/2000/svg">
          {hexagon(letters.length > 1 ? false : true)}
          <text x="50%" y="50%" textAnchor="middle">
            {letters[0]}
          </text>
        </svg>
      </NormalLetter>
      <NormalLetter>
        {letters[1] && (
          <svg
            style={{ margin: "0px 8px 0px 8px" }}
            height="120"
            width="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {hexagon(false)}
            <text x="50%" y="50%" textAnchor="middle">
              {letters[1]}
            </text>
          </svg>
        )}
      </NormalLetter>
      <NormalLetter>
        {letters[2] && (
          <svg height="120" width="120" xmlns="http://www.w3.org/2000/svg">
            {hexagon(false)}
            <text x="50%" y="50%" textAnchor="middle">
              {letters[2]}
            </text>
          </svg>
        )}
      </NormalLetter>
    </LetterContainerDiv>
  );
}
