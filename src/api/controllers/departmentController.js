const { Question } = require("../models/questionModel");

exports.displayDepartment = (req, res) => {
  const department = req.params.department;

  Question.find({ department: department })
    .then((questions) => {
      let allLevels = questions.map((q) => q.level);

      let levels = [];
      levels[0] = allLevels[0];
      let check = 0;

      for (let a = 0; a < allLevels.length; a++) {
        for (let l = 0; l < levels.length; l++) {
          if (levels[l] == allLevels[a]) {
            check = 1;
          }
        }

        if (check == 0) {
          levels.push(allLevels[a]);
        }

        check = 0;
      }

      res.status(200).render("department.ejs", {
        Levels: levels,
        Department: department,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((err) => {});
};
