const { School } = require("../models/schoolModel");

exports.displaySchoolsPage = (req, res) => {
  School.find()
    .then((schools) => {
      res.render("../views/download.ejs", {
        Schools: schools,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((err) => {
      res.status(404).render("404.ejs", { Message: "School Page Not Found." });
    });
};
