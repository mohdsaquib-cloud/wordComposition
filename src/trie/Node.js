class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.isTerminal = false;
  }

  getWord() {
    const output = [];
    let node = this;
    while (node !== null) {
      output.push(node.key);
      node = node.parent;
    }
    output.reverse();
    return output.join("");
  }
}

export default Node;
