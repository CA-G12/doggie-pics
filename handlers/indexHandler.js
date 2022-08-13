/* eslint-disable linebreak-style */
const path = require('path');
const fs = require('fs');

const homeHandler = (res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('SERVER ERROR');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};
module.exports = homeHandler;
