import styled from "styled-components";
import * as DESIGN from "../utils/styleConstants.js";

export const GameMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${DESIGN.COLOR_DARKGRAY};
  color: white;
  height: 100%;
  width: 100%;
  @media (min-width: 576px) {
    width: 50%;
  }
`;

export const BlinkingCursor = styled.span`
  display: flex;
  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  &:after {
    animation: cursor-blink 1s steps(1) infinite;
    content: "";
    display: block;
    top: 0;
    width: 4px;
    height: 30px;
    margin-top: 6px;
    margin-left: 4px;
    background: ${DESIGN.COLOR_YELLOW};
  }
`;

export const SingleInputCharacter = styled.span`
  font-size: ${DESIGN.FONT_SIZE_LARGE};
  font-weight: ${DESIGN.FONT_WEIGHT_HEAVY};
  text-transform: uppercase;
`;

export const OutsideLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${DESIGN.MARGIN_MEDIUM};
`;
export const LetterContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SingleLetter = styled.div`
  font-size: ${DESIGN.FONT_SIZE_LARGE};
  font-weight: ${DESIGN.FONT_WEIGHT_HEAVY};
`;
