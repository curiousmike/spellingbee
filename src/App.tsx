import { useState } from "react";
import {
  Container,
  Title,
  RankAndFoundWordWrapper,
  RankContainer,
  FoundWordContainer,
  MainGameWrapper,
  TodaysDate,
  ByLine,
} from "./styles.js";
import { Solver } from "./utils/solver";
import { getFormattedTodaysDate } from "./utils/utils";
import { GameMap } from "./components/gameMap";
const MinWordLength = 4;

function App() {
  const [wordPermutations, setWordPermutations] = useState<string[]>([]);
  const rootWord = "nicatey"; // tenacity, acacia, accent
  const coreLetter = "a";

  const todaysDate = getFormattedTodaysDate();
  if (!wordPermutations.length) {
    const possibleWords = Solver(rootWord, coreLetter, MinWordLength);

    setWordPermutations(possibleWords);
    console.log("result = ", possibleWords);
  }
  return (
    <Container>
      <Title>
        SpellingBee Coustier Edition<TodaysDate>{todaysDate}</TodaysDate>
        <ByLine>by Michael Coustier</ByLine>
      </Title>

      <MainGameWrapper>
        <RankAndFoundWordWrapper>
          <RankContainer>Rank - Beginner</RankContainer>
          <FoundWordContainer>Found Words List</FoundWordContainer>
        </RankAndFoundWordWrapper>
        <GameMap letters={rootWord} coreLetter={coreLetter} />
      </MainGameWrapper>
    </Container>
  );
}

export default App;
