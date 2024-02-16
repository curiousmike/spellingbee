import { useContext, useEffect } from "react";
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
import { getFormattedTodaysDate } from "./utils/utils";
import { GameMap } from "./components/gameMap";
import { FoundWords } from "./components/foundWords";
import { Setup } from "./setup";
import GlobalProvider from "./providers/GlobalProvider";

export function Main() {
  const todaysDate = getFormattedTodaysDate();
  return (
    <GlobalProvider>
      <Setup />
      <Container>
        <Title>
          SpellingBee Coustier Edition<TodaysDate>{todaysDate}</TodaysDate>
          <ByLine>by Michael Coustier</ByLine>
        </Title>
        <MainGameWrapper>
          <RankAndFoundWordWrapper>
            <RankContainer>Rank - Beginner</RankContainer>
            <FoundWordContainer>
              <FoundWords />
            </FoundWordContainer>
          </RankAndFoundWordWrapper>
          <GameMap />
        </MainGameWrapper>
      </Container>
    </GlobalProvider>
  );
}
