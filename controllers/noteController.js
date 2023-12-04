// controllers/noteController.js
const Note = require('../models/note');

// Lista todas as notas
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtém uma nota específica por ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cria uma nova nota
exports.createNote = async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    userId: req.user.id,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualiza uma nota existente por ID
exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      { new: true }
    );
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Exclui uma nota existente por ID
exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.json({ message: 'Nota excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
