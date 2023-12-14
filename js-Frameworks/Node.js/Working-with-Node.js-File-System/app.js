import fs from "fs";
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
