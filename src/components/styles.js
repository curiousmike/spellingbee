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

export const NonFocusedInput = styled.span`
  display: flex;
  min-height: ${DESIGN.MIN_HEIGHT_MEDIUM};
  margin-top: ${DESIGN.MARGIN_MEDIUM};
`;

export const FocusedInputWithCursor = styled.span`
  display: flex;
  min-height: ${DESIGN.MIN_HEIGHT_MEDIUM};
  margin-top: ${DESIGN.MARGIN_MEDIUM};

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  &:after {
    animation: cursor-blink 0.5s steps(1) infinite;
    content: "";
    display: block;
    top: 0;
    width: 4px;
    height: ${DESIGN.FONT_SIZE_LARGE};
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

export const WordResultContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: ${DESIGN.MIN_HEIGHT_SMALL};
  border-radius: 25px;
  border: 2px solid black;
  padding: ${DESIGN.MARGIN_MEDIUM};
`;

export const WordResultContainerEmpty = styled.div`
  min-height: ${DESIGN.MIN_HEIGHT_SMALL};
  padding: ${DESIGN.MARGIN_MEDIUM};
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${DESIGN.COLOR_DARKGRAY};
  color: white;
  height: 100%;
  width: 100%;
  @media (min-width: 576px) {
    width: 50%;
  }
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
  `;
