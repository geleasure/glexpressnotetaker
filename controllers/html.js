const staticFilePath = require("../utils/staticFile");

// Function to render the notes page..
const renderNotesPage = (req, res) => {
  const filePath = staticFilePath("notes");

  res.sendFile(filePath);
};
// Function to render the index page.
const renderIndexPage = (req, res) => {
  const filePath = staticFilePath("index");

  res.sendFile(filePath);
};

module.exports = { renderNotesPage, renderIndexPage };
