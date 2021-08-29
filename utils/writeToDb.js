const fs = require("fs");
const path = require("path");
// function which writes new notes to the db file.
const writeToDb = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = writeToDb;
