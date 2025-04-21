const path = require("path");
const fs = require("fs");
const JSON5 = require("json5");

function readListJsonData()
{
    const jsonData = fs.readFileSync('data.json', 'utf8');
    const data = JSON.parse(jsonData);
}