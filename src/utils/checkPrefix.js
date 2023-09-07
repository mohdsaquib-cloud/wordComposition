const checkPrefix = (trie, word) => {
  let index = 1;
  while (index <= word.length) {
    const prefix = word.substring(0, index);
    const length = trie.search(prefix).length;
    const validPrefix = checkPrefix(trie, word.substring(index));
    if (length > 1 && (index === word.length || validPrefix)) {
      // If we find a valid prefix and the remaining part is either empty or also a compounded word,
      // return true
      return true;
    }
    index++;
  }

  return false;
};

export default checkPrefix;
