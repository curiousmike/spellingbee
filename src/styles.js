import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  max-width: 1024px;
  background: black;
`;
export const Title = styled.div`
  background: blue;
  color: white;
  height: 20%;
  width: 100%;
  font-family: "Alfa Slab One", serif;
  font-size: 32px;
  @media (min-width: 576px) {
    background: red;
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
  background: yellow;
  color: black;
  height: 50%;
`;
export const FoundWordContainer = styled.div`
  background: black;
  color: white;
  height: 50%;
`;

export const TodaysDate = styled.div`
  padding-left: 8px;
  font-family: "Libre Franklin", sans-serif;
`;

export const ByLine = styled.div`
  padding-left: 8px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 16px;
`;
