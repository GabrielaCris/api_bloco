// controllers/authController.js
const { generateToken } = require('../auth');

exports.login = (req, res) => {
  // Lógica de autenticação - verificar as credenciais do usuário

  // Se as credenciais são válidas, gera um token
  const user = { id: 123, username: 'example' }; // Exemplo, substitua com informações reais do usuário
  const token = generateToken(user);

  res.json({ token });
};

// controllers/authController.js
const { generateToken } = require('../auth');

exports.login = (req, res) => {

    // controllers/authController.js
const { generateToken } = require('../auth');

// Simulação de usuários armazenados (em um ambiente real, use um banco de dados)
const users = [
  { id: 1, username: 'example', password: 'password123' },
  // Adicione mais usuários conforme necessário
];

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Verificar as credenciais
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Credenciais válidas - gerar token
    const token = generateToken({ id: user.id, username: user.username });

    res.json({ token });
  } else {
    // Credenciais inválidas
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
};


  // Se as credenciais são válidas, gera um token
  const user = { id: 123, username: 'example' }; // Exemplo, substitua com informações reais do usuário
  const token = generateToken(user);

  res.json({ token });
};
