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
  margin-top: 8px;
`;
export const LetterContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SingleLetter = styled.div`
  font-size: 5vw;
  font-weight: 600;
  color: black;
`;
