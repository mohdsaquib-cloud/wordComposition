# Trie Data Structure for Finding Compounded Words

This project implements a Trie data structure in JavaScript to efficiently find compounded words from a list of words.

## Table of Contents

- [Introduction](#introduction)
- [Trie Data Structure](#trie-data-structure)
- [Algorithm for Finding Compounded Words](#algorithm-for-finding-compounded-words)
- [Usage](#usage)

---

## Introduction

A Trie (pronounced "try") is a tree-like data structure used for efficiently storing a dynamic set of strings. It is particularly useful for tasks that involve prefix searching and checking if a word can be composed by combining other words.

In this project, we discuss how to implement a Trie data structure in JavaScript and utilize it to find compounded words. Compounded words are words that can be formed by combining other words from the given list.

## Trie Data Structure

The Trie data structure consists of nodes connected by edges, with each node representing a character in a word. Key components of the Trie:

- **Node**: Each node in the Trie contains a character, a parent node reference, and references to its child nodes. It may also have a flag indicating whether it marks the end of a word.

- **Insertion**: Words are inserted into the Trie by traversing the tree, starting from the root node. Each character of the word corresponds to a child node, and a flag is set at the last character to indicate the end of a word.

- **Search**: To search for a word or prefix, you traverse the Trie, following edges corresponding to the characters in the word. If you reach a node with a word-ending flag, it indicates the word exists in the Trie.

## Algorithm for Finding Compounded Words

We use a custom algorithm to find compounded words from the list of words. Here is an overview of the algorithm:

1. Build a Trie data structure from the given list of words.

2. Iterate through the list of words and check each word using a custom `checkPrefix` function. This function determines if a word can be formed by combining other words stored in the Trie.

3. If a word is identified as compounded, add it to the list of compounded words.

4. Continue this process until the desired number of compounded words is found or there are no more valid compounded words.

## Usage

To use this Trie-based compounded word finder, follow these steps:

# npm install

1. **Install Dependencies**: First, make sure you have the necessary dependencies installed. Run the following command in your project directory using `npm install`

# npm start

2. **Running the Project**: To run your project, use the command `npm start`:

This will execute the compounded word finding algorithm and display the results.

# npm run test

3. **Testing**: You can run tests using the command `npm run test`:
