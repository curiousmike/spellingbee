import { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

export function FoundWords() {
  const { pointsTotal, wordsFound }: any = useContext(GlobalContext);
  const buildFoundWords = () => {
    const nodes: any = [];
    nodes.push(<div key="pointtotal">Points total - {pointsTotal}</div>);
    wordsFound.forEach((word: any, index: number) => {
      const node = <div key={index}>{word.word}</div>;
      nodes.push(node);
    });
    return nodes;
  };
  return <>{buildFoundWords()}</>;
}
