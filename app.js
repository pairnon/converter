const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

const path = require('path');
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/big', express.static(path.join(__dirname, 'big')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
