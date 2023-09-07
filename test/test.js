import chai from "chai";
import Trie from "../src/trie/Trie.js";
import Node from "../src/trie/Node.js";
import checkPrefix from "../src/utils/checkPrefix.js";
import getLongestString from "../src/utils/getLongestString.js";

const expect = chai.expect;

describe("Trie", function () {
  it("should insert and search words correctly", function () {
    const trie = new Trie();
    trie.insert("apple");
    trie.insert("app");
    trie.insert("banana");

    expect(trie.search("app")).to.deep.equal(["app", "apple"]);
    expect(trie.search("ban")).to.deep.equal(["banana"]);
    expect(trie.search("cherry")).to.deep.equal([]);
  });
});

describe("Node", function () {
  it("should correctly return the word", function () {
    const nodeA = new Node("a");
    const nodeP = new Node("p");
    const nodeP2 = new Node("p");

    nodeA.children["p"] = nodeP;
    nodeP.parent = nodeA;
    nodeP.children["p"] = nodeP2;
    nodeP2.parent = nodeP;
    nodeP2.isTerminal = true;

    expect(nodeP2.getWord()).to.equal("app");
  });
});

describe("getLongestString", function () {
  it("should return the longest string in an array of strings", function () {
    const inputArray = ["apple", "banana", "date"];
    const result = getLongestString(inputArray);
    expect(result).to.equal("banana");
  });

  it("should return an empty string for an empty array", function () {
    const inputArray = [];
    const result = getLongestString(inputArray);
    expect(result).to.equal("");
  });

  it("should return the longest string when there are multiple strings with the same length", function () {
    const inputArray = ["apple", "banana", "cherry", "date", "elderberry"];
    const result = getLongestString(inputArray);
    expect(result).to.equal("elderberry");
  });

  it("should return the first longest string when there are multiple equally long strings", function () {
    const inputArray = [
      "apple",
      "banana",
      "cherry",
      "date",
      "elderberry",
      "fig",
    ];
    const result = getLongestString(inputArray);
    expect(result).to.equal("elderberry");
  });
});

describe("checkPrefix", function () {
  let trie;

  beforeEach(function () {
    // Create a new Trie instance before each test
    trie = new Trie();
    // Add words to the Trie that the function will search for
    trie.insert("cats");
    trie.insert("catsdogcats");
    trie.insert("catxdogcatsrat");
    trie.insert("dog");
    trie.insert("dogcatsdog");
    trie.insert("hippopotamuses");
    trie.insert("rat");
    trie.insert("ratcatdogcat");
  });

  it("should return true for a valid compounded word", function () {
    const word = "ratcatdogcat";
    expect(checkPrefix(trie, word)).to.be.true;
  });

  it("should return false for an empty word", function () {
    const word = "";
    expect(checkPrefix(trie, word)).to.be.false;
  });

  it("should return false for a no word found", function () {
    const word = "helloworld";
    expect(checkPrefix(trie, word)).to.be.false;
  });
});
