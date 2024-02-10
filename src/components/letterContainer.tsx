import { LetterContainerDiv, SingleLetter } from "./styles";

type GameMapProps = {
  letters: string[];
};

export function LetterContainer({ letters }: GameMapProps) {
  const hexagon = (letter: string, isCenter: boolean) => (
    <svg
      style={{ margin: "0px 8px 0px 8px" }}
      height="120"
      width="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        style={{
          cursor: "pointer",
          fill: isCenter ? "yellow" : "#e6e6e6",
          transition: "all 100ms",
          color: "blue",
        }}
        points="0,60 30,0 90,0 120,60 90,120 30,120"
        stroke="black"
        strokeWidth="1"
      ></polygon>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
        {letter}
      </text>
    </svg>
  );

  return (
    <LetterContainerDiv>
      <SingleLetter>
        {hexagon(letters[0], letters.length > 1 ? false : true)}
      </SingleLetter>
      <SingleLetter>
        {letters[1] && <>{hexagon(letters[1], false)}</>}
      </SingleLetter>
      <SingleLetter>
        {letters[2] && <>{hexagon(letters[2], false)}</>}
      </SingleLetter>
    </LetterContainerDiv>
  );
}
