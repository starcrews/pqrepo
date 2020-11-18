const { Question } = require("../models/questionModel");

let send = (
  res,
  code,
  page,
  levels,
  department,
  navigate,
  nav_title,
  error
) => {
  return res.status(code).render(page, {
    Levels: levels,
    Department: department,
    navigate: navigate,
    nav_title: nav_title,
    error: error,
  });
};

exports.displayDepartmentPage = (req, res) => {
  const department = req.params.department;

  Question.find({ department: { $regex: department }})
    .then((questions) => {
      if (questions.length == 0) {
        send(
          res,
          400,
          "department.ejs",
          "",
          department,
          "upload",
          "Upload Questions",
          "No Questions Available Yet."
        );
      } else {
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

        send(
          res,
          200,
          "department.ejs",
          levels,
          department,
          "upload",
          "Upload Questions",
          ""
        );
      }
    })
    .catch((err) => {
      res
        .status(404)
        .render("404.ejs", { Message: "Department Page not found." });
    });
};
