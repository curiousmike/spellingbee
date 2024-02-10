import styled from "styled-components";
import * as DESIGN from './utils/styleConstants.js'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  max-width: 1024px;
  background: ${DESIGN.COLOR_BLACK};
`;
export const Title = styled.div`
  background: ${DESIGN.COLOR_BLUE};
  color: ${DESIGN.COLOR_WHITE};
  height: 20%;
  width: 100%;
  font-family: "Alfa Slab One", serif;
  font-size: ${DESIGN.FONT_SIZE_LARGE};
  @media (min-width: 576px) {
    background: ${DESIGN.COLOR_RED};
  }
`;

export const MainGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  background: green;
  @media (min-width: 576px) {
    flex-direction: row-reverse;
  }
`;

export const RankAndFoundWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (min-width: 576px) {
    width: 50%;
  }
`;
export const RankContainer = styled.div`
  background: ${DESIGN.COLOR_YELLOW};
  color: ${DESIGN.COLOR_BLACK};
  height: 50%;
`;
export const FoundWordContainer = styled.div`
  background: ${DESIGN.COLOR_BLACK};
  color: ${DESIGN.COLOR_WHITE};
  height: 50%;
`;

export const TodaysDate = styled.div`
  padding-left: ${DESIGN.PADDING_SMALL};
  font-family: "Libre Franklin", sans-serif;
`;

export const ByLine = styled.div`
  padding-left: ${DESIGN.PADDING_SMALL};
  font-family: "Libre Franklin", sans-serif;
  font-size: ${DESIGN.FONT_SIZE_MEDIUM};
`;
