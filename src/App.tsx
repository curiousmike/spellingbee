import { useState } from "react";
import {
  Container,
  Title,
  RankAndFoundWordWrapper,
  RankContainer,
  FoundWordContainer,
  GameMapContainer,
  MainGameWrapper,
  TodaysDate,
  ByLine,
} from "./styles.js";
import { Solver } from "./utils/solver";
import { getFormattedTodaysDate } from "./utils/utils";

const MinWordLength = 4;

function App() {
  const [wordPermutations, setWordPermutations] = useState<string[]>([]);
  const rootWord = "animals"; // 7 letter words

  const todaysDate = getFormattedTodaysDate();
  if (!wordPermutations.length) {
    const possibleWords = Solver(rootWord, MinWordLength);

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
        <GameMapContainer>GameMapContainer</GameMapContainer>
      </MainGameWrapper>
    </Container>
  );
}

export default App;
