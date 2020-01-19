const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  const p = path.join(__dirname, 'public/index.html');
  console.log(__dirname);
  res.sendFile('/home/radek/Dev/rep-calc/public/index.html');
});

app.listen(3001);