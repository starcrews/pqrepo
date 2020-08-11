const { Question } = require("../models/questionModel"),
  { Details } = require("../models/detailsModel");

exports.displayPage = (req, res) => {
  Details.find()
    .then((details) => {
      res.status(200).render("upload.ejs", {
        courses: details[0].departments,
        levels: details[0].levels,
        navigate: "download",
        nav_title: "View Questions",
      });
    })
    .catch((err) => {
      res.status(400).send({ Error: "Courses not found" });
    });
};

exports.postQuestion = (req, res) => {
  var newQuestion = new Question();

  newQuestion.department = req.body.department;
  newQuestion.course_code = req.body.course_code;
  newQuestion.course_name = req.body.course_name;
  newQuestion.session = req.body.session;
  newQuestion.level = req.body.level;
  newQuestion.url = req.body.image;

  console.log(newQuestion);

  newQuestion
    .save()
    .then((savedObject) => {
      res.status(200).send({ Message: "Upload Successful" });
    })
    .catch((err) => {
      res.status(400).send({ Error: "Failed" });
    });
};
