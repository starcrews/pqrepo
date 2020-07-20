require("./config/keys");
require("./db/mongoose");

const path = require("path");

const express = require("express"),
    bodyParser = require("body-parser"),
  
const app = express(),
    
const api = require('./api/api'),
    errorController = require('./api/controllers/error'),
    { check, validationResult } = require("express-validator");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/frontend", express.static(path.join(__dirname + "public")));
app.use(express.static("https://cloudinary.com/console/media_library/folders/all/pqrepo"));

app.get("/download?:id", (req, res) => {
  var file = req.params.id;
  res.download(file);
  res.redirect("/download");
});

app.use(function (err, req, res, next) {
  res.status(500).json(err.message);
  next();
});

module.exports = { app };
