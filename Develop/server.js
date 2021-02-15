const express = require("express");
const logger = require("morgan");

const PORT = 3002;
const app = express(); 

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"))


app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
}) 
