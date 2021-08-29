// App Requirements
const express = require("express");
const cors = require("cors");

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Port
const PORT = process.env.PORT || 3000;

const app = express();

// App Usage
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.info(`Example app listening at http://localhost:${PORT}`);
});
