const { Question } = require("../models/questionModel");

exports.displayQuestionPage = (req, res) => {
  const department = req.query.department;
  const level = req.query.level;
  const session = req.query.session;
  const course = req.query.course;

  Question.where("department", department)
    .where("level", level)
    .where("session", session)
    .where("course_code", course)
    .exec()
    .then((question) => {
      res.status(200).render("question.ejs", {
        Question: question,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((err) => {
      res
        .status(404)
        .render("404.ejs", { Message: "Question Page Not Found." });
    });
};
