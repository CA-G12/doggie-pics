/* eslint-disable linebreak-style */
const path = require('path');
const fs = require('fs');

const jsonHandler = (res) => {
  const filePath = path.join(__dirname, '..','src', 'breeds.json');
  console.log(filePath);
  fs.readFile(filePath, { encoding: 'utf-8' }, (err, file) => {
    if (err) { console.log(err); } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(file);
    }
  });
};
module.exports = jsonHandler;
