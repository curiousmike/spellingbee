import { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";
import {
  FoundWordHeader,
  FoundWordHeaderSeparater,
  FoundWordContainer,
} from "./styles";
export function FoundWords() {
  const { pointsTotal, wordsFound }: any = useContext(GlobalContext);
  const buildFoundWords = () => {
    const nodes: any = [];
    nodes.push(
      <FoundWordHeader key="pointtotal">
        Points total - {pointsTotal}
      </FoundWordHeader>
    );
    nodes.push(<FoundWordHeaderSeparater key="foundwordsseparater" />);
    wordsFound.forEach((word: any, index: number) => {
      const node = (
        <FoundWordContainer key={index}>{word.word}</FoundWordContainer>
      );
      nodes.push(node);
    });
    return nodes;
  };
  return <>{buildFoundWords()}</>;
}
