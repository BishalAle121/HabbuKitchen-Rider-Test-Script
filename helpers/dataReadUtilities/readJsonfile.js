const path = require('path');
const fs = require('fs');
const JSON5 = require('json5');

function readJsonFile(fileLocation) {
   try {
      const All_Data = fs.readFileSync(fileLocation, 'utf-8');
      convertJsonData = JSON5.parse(All_Data);
      console.log(convertJsonData);
      return convertJsonData;
   }
   catch (error) {
      console.log("Error: ", error);
   }
}
module.exports = readJsonFile;