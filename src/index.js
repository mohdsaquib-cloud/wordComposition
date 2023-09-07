import fs from "fs";
import path from "path";
import getCompoundWords from "./utils/getCompoundWords.js";

// Directory of input files
const directoryPath = "./data";

fs.readdir(directoryPath, (err, files) => {
  if (err) return console.error("Error reading directory:", err);

  // filter .txt files only
  const txtFiles = files.filter((file) => path.extname(file) === ".txt");

  txtFiles.forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8").split("\r\n");
    try {
      const result = getCompoundWords(fileContent, 2);
      console.log(`File: ${fileName}`);
      console.log("Longest Compound Word:", result.longestConcatWords[0]);
      console.log(
        "Second Longest Compound Word:",
        result.longestConcatWords[1]
      );
      console.log("Execution Time:", result.executionTimeMs, "milliseconds\n");
    } catch (error) {
      console.error(error.message);
    }
  });
});
