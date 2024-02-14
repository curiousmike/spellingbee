import { globalWordList } from "./globalWordList.js";

export function Solver(letters, coreLetter, minWordLength) {
  let fixedLetters = letters.toLowerCase().replace(/[^a-z]/g, ""); // only allow a-z
  return generateWordCombos(fixedLetters, coreLetter, minWordLength);
}
// words must include core letter ( center letter)
// words must contain at least 4 letters
// letters can be used more than once
// four letter words are worth 1 point each
// longer words earn 1 point per letter - 6-letter word = 6pts
// Pangram -each puzzle contains one pangram - uses every letter at least once. worth 7 addtl points
// Bingo - all 7 letters start at least one word
// Perfect Pangram - uses each letter only once
// GN4L - Genius with no 4 letter words
// GN4L OTN -
// QB - Queen Bee - max score in puzzle achieved
//
function generateWordCombos(letters, coreLetter, minWordLength) {
  let foundWords = [];
  const fullLetters = letters + coreLetter;
  for (let word of globalWordList) {
    let bValidWord = true;

    let coreLetterFound = false;
    // Verify the letters in our test word only use letters in our list
    for (let index = 0; index < word.length; index++) {
      const letter = word[index];
      if (!fullLetters.includes(letter)) {
        bValidWord = false;
        break;
      }
      if (coreLetter && letter === coreLetter) {
        coreLetterFound = true;
      }
    }
    if (coreLetter && !coreLetterFound) {
      bValidWord = false;
    }

    // If minimum length enforced, verify
    if (bValidWord) {
      if (minWordLength) {
        if (word.length >= minWordLength) {
          foundWords.push(word);
        }
      } else {
        console.log("no min word length");
        foundWords.push(word);
      }
    }
  }
  return foundWords;
}
