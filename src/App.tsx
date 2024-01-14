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

import { getFormattedTodaysDate } from "./utils/utils";
function App() {
  const todaysDate = getFormattedTodaysDate();
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
