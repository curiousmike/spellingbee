import {
  Container,
  Title,
  RankAndFoundWordWrapper,
  RankContainer,
  FoundWordContainer,
  GameMapContainer,
  MainGameWrapper,
} from "./styles.js";
function App() {
  return (
    <Container>
      <Title>SpellingBee Coustier Edition</Title>
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
