
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', routes); // Todas as rotas começam com '/api'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


