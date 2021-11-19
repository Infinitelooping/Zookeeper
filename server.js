// # You can use the `-y` flag to skip the package questionnaire and leave default answers
// npm init -y
// # You can use `npm i` as a shortcut for `npm install`
// npm i express
const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//instantiate the server
const app = express();

// paths to the public folder and instructs the server to make thse files static resources. This means all of the front-end code can now be accessed without havinga specific server endpoint.
app.use(express.static('public'));
// parse incoming string or array data.. use this for req.body to write
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);






// run npm start
app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
})