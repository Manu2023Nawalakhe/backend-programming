require("dotenv").config();

const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/facebook", (req, res) => {
  res.send("Hello Dhanu ❤");
});
app.get("/login", (req, res) => {
  res.send("Just Logine with React😍");
});
app.get("/youtub", (req, res) => {
  res.send("<h2>start backend with youtub</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
