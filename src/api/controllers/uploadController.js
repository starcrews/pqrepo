const { Question } = require("../models/questionModel"),
  { Details } = require("../models/detailsModel"),
  mongoose = require("mongoose");

let send = (
  res,
  code,
  page,
  courses,
  levels,
  navigate,
  nav_title,
  error,
  success
) => {
  return res.status(code).render(page, {
    courses: courses,
    levels: levels,
    navigate: navigate,
    nav_title: nav_title,
    error: error,
    success: success,
  });
};

exports.displayPage = (req, res) => {
  Details.find()
    .then((details) => {
      send(
        res,
        200,
        "upload.ejs",
        details[0].departments,
        details[0].levels,
        "download",
        "View Questions",
        "",
        ""
      );
    })
    .catch((err) => {
      res.status(404).render("404.ejs", { Message: "Upload Page not found." });
    });
};

exports.postQuestion = (req, res) => {
  const newQuestion = new Question({
    _id: mongoose.Types.ObjectId(),
    department: req.body.department,
    course_code: req.body.course_code,
    course_name: req.body.course_name,
    session: req.body.session,
    level: req.body.level,
    url: req.body.image,
  });

  newQuestion
    .save()
    .then((savedObject) => {
      res.status(200).send({ Message: "Upload Successful" });
    })
    .catch((err) => {
      res.status(500).render("500.ejs", {
        Error:
          "An error occurred while trying to save the question, please try again",
      });
    });
};

exports.displaySuccess = (req, res) => {
  Details.find()
    .then((details) => {
      send(
        res,
        201,
        "upload.ejs",
        details[0].departments,
        details[0].levels,
        "download",
        "View Questions",
        "",
        "Upload Successful!"
      );
    })
    .catch((err) => {
      res.status(404).send("404.ejs", { Message: "Upload Page not found." });
    });
};

exports.displayFailed = (req, res) => {
  Details.find()
    .then((details) => {
      send(
        res,
        201,
        "upload.ejs",
        details[0].departments,
        details[0].levels,
        "download",
        "View Questions",
        "Upload Failed, Please Try Again.",
        ""
      );
    })
    .catch((err) => {
      res.status(404).send("404.ejs", { Message: "Upload Page not found." });
    });
};
