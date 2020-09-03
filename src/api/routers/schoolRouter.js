const express = require("express"),
  router = express.Router(),
  schoolController = require("../controllers/schoolController");

router.route("/:school").get(schoolController.displaySchoolPage);

module.exports = router;
