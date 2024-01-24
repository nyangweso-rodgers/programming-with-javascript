// Read file

import fs from "fs";

const readJsonFile = (path) => {
  fs.readFile(path, (err, jsonStringFile) => {
    if (err) {
      console.log("Failed to read a file: ", err);
      return;
    }
    const jsonObject = JSON.parse(jsonStringFile);
    console.log(jsonObject);
  });
};

// file path
const sampleFilePath = "./01-example-customer.json";

readJsonFile(sampleFilePath); // Output: Customer First Name: Rodgers