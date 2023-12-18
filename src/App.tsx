import {
  Container,
  Title,
  RankContainer,
  FoundWordContainer,
  GameMapContainer,
} from "./styles.js";
function App() {
  return (
    <Container>
      <Title>SpellingBee</Title>
      <RankContainer>Rank - Beginner</RankContainer>
      <FoundWordContainer>Found Words List</FoundWordContainer>
      <GameMapContainer>GameMapContainer</GameMapContainer>
    </Container>
  );
}

export default App;
