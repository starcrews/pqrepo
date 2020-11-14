const { Question } = require("../models/questionModel");

exports.displayQuestionPage = (req, res) => {
  const department = req.query.department;
  const level = req.query.level;
  const session = req.query.session;
  const course = req.query.course;

  Question.where("department", department)
    .where("level", level)
    .where("session", session)
    .where("course_name", course)
    .exec()
    .then((question) => {
      let format = "", count = "";

      if (question[0].url[0].split('/').reverse()[0].split('.')[1] != ('jpg' || 'png')) {
        format = "Document(s)";  
        count = "Document";
      } else {
        format = "Pages";
        count = "Page";
      }

      res.status(200).render("question.ejs", {
        Question: question,
        navigate: "upload",
        nav_title: "Upload Questions",
        format: format,
        count: count,
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(404)
        .render("404.ejs", { Message: "Question Page Not Found." });
    });
};
