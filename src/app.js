require("./db/mongoose");
require("dotenv").config();

const path = require("path");

const express = require("express"),
  bodyParser = require("body-parser");

const app = express();

const api = require("./api/api"),
  errorController = require("./api/controllers/error"),
  { check, validationResult } = require("express-validator");

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + "/public")));
app.use(
  express.static(
    "https://cloudinary.com/console/media_library/folders/all/pqrepo"
  )
);

app.use(api);

app.use(errorController.get404);

module.exports = { app };
