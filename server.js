// # You can use the `-y` flag to skip the package questionnaire and leave default answers
// npm init -y
// # You can use `npm i` as a shortcut for `npm install`
// npm i express

const express = require('express');
const { animals } = require('./data/animals');

//instantiate the server
const app = express();





















//adding route
app.get('/api/animals', (req, res) => {
    res.send('Hello!');
  });

// run npm start
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
})