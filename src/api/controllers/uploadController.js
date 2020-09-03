const { Question } = require("../models/questionModel"),
  { Details } = require("../models/detailsModel"),
  mongoose = require("mongoose");

const { validationResult } = require("express-validator");

let send = (
  res,
  code,
  page,
  courses,
  levels,
  sessions,
  navigate,
  nav_title
) => {
  return res.status(code).render(page, {
    courses: courses,
    levels: levels,
    sessions: sessions,
    navigate: navigate,
    nav_title: nav_title,
  });
};

exports.displayUploadPage = (req, res) => {
  Details.find()
    .then((details) => {
      send(
        res,
        200,
        "upload.ejs",
        details[0].departments,
        details[0].levels,
        details[0].sessions,
        "download",
        "View Questions"
      );
    })
    .catch((err) => {
      res.status(404).render("404.ejs", { Message: "Upload Page not found." });
    });
};

exports.postQuestion = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ Message: "Invalid Values" });
  } else {
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
        res.status(400).send({ Message: "Upload Failed" });
      });
  }
};
