import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./providers/GlobalProvider";
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
import { getTodaysLetters } from "./services/todaysLetters";
import { GameMap } from "./components/gameMap";
import { FoundWords } from "./components/foundWords";
import { Solver } from "./utils/solver";
import { MinWordLength } from "./utils/constants.js";

export function Main() {
  const [todaysDate, setTodaysDate] = useState<string | null>(null);
  const {
    setLetters,
    setCoreLetter,
    setWordPermutations,
    setInFocus,
    setIsLoading,
    setError,
  }: any = useContext(GlobalContext);

  useEffect(() => {
    setIsLoading(true);
    setTodaysDate(getFormattedTodaysDate());
    function checkDocumentFocus() {
      setInFocus(document.hasFocus());
    }
    setInterval(checkDocumentFocus, 300);

    getTodaysLetters()
      .then((result: any) => {
        setLetters(result.letters);
        setCoreLetter(result.coreLetter);
        setWordPermutations(
          Solver(result.letters, result.coreLetter, MinWordLength)
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
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
  );
}
