import styled from "styled-components";
import * as DESIGN from '../utils/styleConstants.js'

export const GameMapContainer = styled.div`
  background: gray;
  color: white;
  height: 100%;
  width: 100%;
  @media (min-width: 576px) {
    width: 50%;
  }
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
