import fs from "fs";

/*
const filePath = "./my-files/config.json";

function jsonReader(path, myCallback) {
  fs.readFile(path, (err, jsonStringFile) => {
    if (err) {
      return myCallback && myCallback(err);
    }
    try {
      const jsonObject = JSON.parse(jsonStringFile);
      return myCallback && myCallback(null, jsonObject);
    } catch (err) {
      return myCallback && myCallback(err);
    }
  });
}

jsonReader(filePath, (err, jsonData) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(jsonData);
});
*/

function readAndParseJsonFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, jsonStringFile) => {
    if (err) {
      // handle any errors that occur during file reading
      console.error("Error reading JSON file: ", err.message);
      return;
    }
    //
  });
}
