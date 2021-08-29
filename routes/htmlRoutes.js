const { Router } = require("express");

const { renderNotesPage, renderIndexPage } = require("../controllers/html");

const router = Router();

// Router getting the necessary functions for the app.
router.get("/notes", renderNotesPage);

router.get("*", renderIndexPage);

module.exports = router;
