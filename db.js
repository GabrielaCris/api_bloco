// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bloco-de-notas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
