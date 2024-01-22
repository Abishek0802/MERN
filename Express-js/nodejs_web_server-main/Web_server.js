const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;
//importing LogEvents

const LogEvents = require("./MiddleWare/logEvents");
// Custom MiddleWare

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

//BuildIn MiddleWare

//1 . Form Submition data
app.use(express.urlencoded({ extended: false }));
//2 . json data
app.use(express.json());
//3 . displaying all static files
app.use(express.static(path.join(__dirname, "./public")));

app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});

//chain

const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res) => {
  console.log("three");
  res.send("finished");
};
app.get("/chain(.html)?", [one, two, three]);
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
