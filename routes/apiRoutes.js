const { Router } = require("express");

const { getNotes, writeNotes, deleteNotes } = require("../controllers/notes");

const router = Router();
// Router linked to functions to get, write and delete notes.
router.get("/notes", getNotes);

router.post("/notes", writeNotes);

router.delete("/notes/:id", deleteNotes);

module.exports = router;
