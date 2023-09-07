import Node from "./Node.js";
import graphviz from "graphviz";

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node(char);
        node.children[char].parent = node;
      }
      node = node.children[char];
    }
    node.isTerminal = true;
  }

  search(prefix) {
    let node = this.root;
    const result = new Set();

    for (const char of prefix) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return Array.from(result);
      }
    }

    this._findAllWords(node, prefix, result);
    return Array.from(result);
  }

  _findAllWords(node, currentWord, result) {
    if (node.isTerminal) {
      result.add(currentWord);
    }
    for (const char in node.children) {
      this._findAllWords(node.children[char], currentWord + char, result);
    }
  }

  _addNodesToGraphviz(graph, node) {
    if (!node) return;
    for (const char in node.children) {
      const childNode = node.children[char];
      const label = childNode.isTerminal ? `${char}*` : char;
      graph.addNode(childNode.key, { label });
      graph.addEdge(node.key, childNode.key);
      this._addNodesToGraphviz(graph, childNode);
    }
  }

  toGraphviz() {
    const graph = graphviz.digraph("Trie");
    this._addNodesToGraphviz(graph, this.root);
    return graph.to_dot();
  }
}

export default Trie;
