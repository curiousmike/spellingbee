import * as DESIGN from "../utils/styleConstants.js";
import { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

export function FoundWords() {
  const { wordsFound }: any = useContext(GlobalContext);
  const buildFoundWords = () => {
    const nodes: any = [];
    wordsFound.forEach((word: any, index: number) => {
      const node = <div key={index}>{word.word}</div>;
      nodes.push(node);
    });
    return nodes;
  };
  return <>{buildFoundWords()}</>;
}
