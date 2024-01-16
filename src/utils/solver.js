import { globalWordList } from "./globalWordList.js";

export function Solver(letters, minWordLength) {
  let fixedLetters = letters.toLowerCase().replace(/[^a-z]/g, ""); // only allow a-z
  console.log("minWordLength = ", minWordLength);
  return generateWordCombos(fixedLetters, minWordLength);
}

function resetDictionaryArray(dict) {
  for (let letter of theAlphabet) {
    dict[letter] = 0;
  }
}

function buildWordLetterCounts(word, dict) {
  for (let letter of word) {
    dict[letter]++;
  }
}

const theAlphabet = "abcdefghijklmnopqrstuvwxyz";

function generateWordCombos(letters, minWordLength) {
  //set letter counts to 0
  let foundWords = [];
  var theWordLetterCounts = [];
  resetDictionaryArray(theWordLetterCounts); // assume there are 0 of each letter
  buildWordLetterCounts(letters, theWordLetterCounts); // how many of each letter are there

  var bValidWord = true;
  var currentLetterCounts = [];
  for (let word of globalWordList) {
    bValidWord = true;
    //reset current word counts
    resetDictionaryArray(currentLetterCounts);

    for (let character of word) {
      currentLetterCounts[character]++;
    }

    for (let letter of theAlphabet) {
      if (currentLetterCounts[letter] > 0) {
        if (theWordLetterCounts[letter] >= currentLetterCounts[letter]) {
          bValidWord = true;
        } else {
          bValidWord = false;
          break;
        }
      }
    }
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
