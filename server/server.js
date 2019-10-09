const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/api/message", (req, res) => {
  res.send("Everything's going to be okay!");
});

app.listen(port, () => console.log("listening on port " + port));
