import checkPrefix from "./checkPrefix.js";
import getLongestString from "./getLongestString.js";
import prepareTrie from "../trie/prepareTrie.js";

function getCompoundWords(words, results) {
  const longestConcatWords = [];
  const trie = prepareTrie(words);

  const startTime = performance.now(); // Start measuring time

  while (results) {
    const longestString = getLongestString(words);
    words.splice(words.indexOf(longestString), 1);
    const validPrefix = checkPrefix(trie, longestString);
    if (words.length == 0) break;
    if (validPrefix) {
      longestConcatWords.push(longestString);
      results--;
    }
  }

  const endTime = performance.now(); // Stop measuring time
  const executionTimeMs = endTime - startTime;

  return { longestConcatWords, executionTimeMs };
}

export default getCompoundWords;
