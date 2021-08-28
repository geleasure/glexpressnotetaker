const { v4: uuidv4 } = require("uuid");

const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");
// Function to read previous notes.
const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
  return notes;
};
// Function to write new notes.
const writeNotes = (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };

  const notes = getFromDb();
  const data = [...notes, newNote];

  writeToDb(data);

  res.json(data);
};
// Function to delete notes.
const deleteNotes = (req, res) => {
  const noteData = getNotes(req, res);
  const id = req.params.id;
  const newNoteData = noteData.filter((each) => {
    return each.id !== id;
  });
  writeToDb(newNoteData);
  res.json(newNoteData);
};

module.exports = { getNotes, writeNotes, deleteNotes };
