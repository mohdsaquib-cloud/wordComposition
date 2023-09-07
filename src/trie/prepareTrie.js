import Trie from "./Trie.js";
import fs from "fs";
function prepareTrie(words) {
  const trie = new Trie();
  words.forEach((item) => {
    trie.insert(item);
  });

  const dotSource = trie.toGraphviz(trie.root);

  fs.writeFileSync(`trie.dot`, dotSource, "utf8");

  return trie;
}

export default prepareTrie;
