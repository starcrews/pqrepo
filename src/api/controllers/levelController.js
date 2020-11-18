const { Question } = require("../models/questionModel");

exports.displayLevelPage = (req, res) => {
  const department = req.query.department;
  const level = req.query.level;

  Question.where("department", { $regex: department })
    .where("level", level)
    .exec()
    .then((questions) => {
      let allSessions = questions.map((q) => q.session);

      let sessions = [];
      sessions[0] = allSessions[0];
      let check = 0;

      for (let a = 0; a < allSessions.length; a++) {
        for (let l = 0; l < sessions.length; l++) {
          if (sessions[l] == allSessions[a]) {
            check = 1;
          }
        }

        if (check == 0) {
          sessions.push(allSessions[a]);
        }

        check = 0;
      }

      res.status(200).render("level.ejs", {
        Sessions: sessions,
        Department: department,
        Level: level,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((err) => {
      res.status(404).render("404.ejs", { Message: "Level Page Not Found." });
    });
};
