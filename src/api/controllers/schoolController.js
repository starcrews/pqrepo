const { School } = require("../models/schoolModel");

exports.displaySchoolPage = (req, res) => {
  const school = req.params.school;

  School.findById(school)
    .then((school) => {
      res.render("../views/school.ejs", {
        School: school,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((err) => {
      res.status(404).render("404.ejs", { Message: "Home Page Not Found." });
    });
};
