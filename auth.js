// auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'seuSegredo'; // Deve ser mantido em segredo na produção

function generateToken(user) {
  return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token não fornecido');
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).send('Token inválido');
    }

    req.user = user;
    next();
  });
}

module.exports = { generateToken, verifyToken };
