import styled from "styled-components";

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
`;
export const LetterContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
`;

export const NormalLetter = styled.div`
  font-size: 5vw;
  font-weight: 600;
`;
