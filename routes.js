// routes.js
const express = require('express');
const noteController = require('./controllers/noteController');
const { verifyToken } = require('./auth');


const express = require('express');
const noteController = require('./controllers/noteController');
const { verifyToken } = require('./auth');

const router = express.Router();

// Rota para listar todas as notas
router.get('/notes', verifyToken, noteController.getAllNotes);

// Rota para obter uma nota específica por ID
router.get('/notes/:id', verifyToken, noteController.getNoteById);

// Rota para criar uma nova nota
router.post('/notes', verifyToken, noteController.createNote);

// Rota para atualizar uma nota existente por ID
router.put('/notes/:id', verifyToken, noteController.updateNote);

// Rota para excluir uma nota existente por ID
router.delete('/notes/:id', verifyToken, noteController.deleteNote);

module.exports = router;


router.get('/notes', verifyToken, noteController.getAllNotes);
router.get('/notes/:id', verifyToken, noteController.getNoteById);
router.post('/notes', verifyToken, noteController.createNote);
router.put('/notes/:id', verifyToken, noteController.updateNote);
router.delete('/notes/:id', verifyToken, noteController.deleteNote);

module.exports = router;

// routes/routes.js
const express = require('express');
const noteController = require('../controllers/noteController');
const authController = require('../controllers/authController');
const { verifyToken } = require('../auth');


// Rota de login
router.post('/login', authController.login);

// Rotas protegidas que requerem autenticação e autorização
router.get('/notes', verifyToken, noteController.getAllNotes);
router.get('/notes/:id', verifyToken, noteController.getNoteById);
router.post('/notes', verifyToken, noteController.createNote);
router.put('/notes/:id', verifyToken, noteController.updateNote);
router.delete('/notes/:id', verifyToken, noteController.deleteNote);

module.exports = router;
