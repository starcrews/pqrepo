const { School } = require("../models/schoolModel");

exports.displayPage = (req, res) => {
  const school = req.params.school;
  console.log(school);

  School.findById(school)
    .then((school) => {
      res.render("../views/school.ejs", {
        School: school,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((err) => {});
};
