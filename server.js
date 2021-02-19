const express = require("express");
const logger = require("morgan"); 
const Mongoose = require("mongoose");

const PORT = 3002;
const app = express(); 

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

Mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/htmlRoutes.js"))
app.use(require("./routes/apiRoutes.js"))

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
}) 
