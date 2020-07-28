const { Question } = require("../models/questionModel"),
  { Details } = require("../models/detailsModel");

exports.displayPage = (req, res) => {
  /*var department = req.query.department;
  var course_code = req.query.course_code;
  var course_name = req.query.course_name;
  var year = req.query.year;
  var page_number = req.query.page_number;

  console.log("Request for upload page recieved");
  res.render("../views/upload.ejs", {
    department: department,
    course_code: course_code,
    course_name: course_name,
    year: year,
    page_number: page_number,
  });

  if (req.query.message != null) {
    var message = req.query.message;
  }*/

  /*
  Details.find()
  .then(details => {
    res.status(200.).render("upload.ejs", {
      courses: details[0].departments
      levels: details[0].levels
    })
  })
  .catch(err => {
    res.status(400).send({Error: "Courses not found"})
  })
  */

  res.status(200).render("upload.ejs", {
    courses: [
      { course: "ACCOUNTING" },
      { course: "AGRICULTURE" },
      { course: "ANATOMY" },
      { course: "BANKING AND FINANCE" },
      { course: "BIOCHEMISTRY" },
      { course: "BIOLOGY" },
      { course: "BUSINESS ADMINISTRATION" },
      { course: "CHEMISTRY" },
      { course: "COMPUTER SCIENCE" },
      { course: "ECONOMICS" },
      { course: "ENGLISH STUDIES AND FRENCH" },
      { course: "GEDS" },
      { course: "HISTORY AND INTERNATIONAL RELATIONS" },
      { course: "INFORMATION RESOURCE MANAGEMENT" },
      { course: "INFORMATION TECHNOLOGY" },
      { course: "INTERNATIONAL LAW AND DIPLOMACY" },
      { course: "LAW" },
      { course: "MARKETING" },
      { course: "MASS COMMUNICATION" },
      { course: "MATHEMATICS" },
      { course: "MEDICAL LABORATORY SCIENCE" },
      { course: "MICROBIOLOGY" },
      { course: "NURSING" },
      { course: "NUTRITION AND DIETICS" },
      { course: "PHYSICS AND ELECTRONICS" },
      { course: "PHYSIOLOGY" },
      { course: "POLITICAL SCIENCE" },
      { course: "PUBLIC ADMINISTRATION" },
      { course: "PUBLIC HEALTH" },
      { course: "SOCIAL WORK" },
      { course: "SOFTWARE ENGINEERING" },
      { course: "THEOLOGY" },
      { course: "OTHERS" },
    ],
    levels: [
      { level: "100" },
      { level: "200" },
      { level: "300" },
      { level: "400" },
      { level: "500" },
      { level: "600" },
      { level: "Pre-Degree" },
      { level: "A-Levels" },
    ],
    navigate: "download",
    nav_title: "View Questions",
  });
};

exports.postQuestion = (req, res) => {
  var newQuestion = new Question();

  newQuestion.department = req.body.department;
  newQuestion.course_code = req.body.course_code;
  newQuestion.course_name = req.body.course_name;
  newQuestion.session = req.body.session;
  newQuestion.level = req.body.level;
  newQuestion.image = req.body.image;

  newQuestion
    .save()
    .then((savedObject) => {
      res.status(200).send({ Message: "Upload Successful" });
    })
    .catch((err) => {
      res.status(400).send({ Error: "Failed" });
    });
};
