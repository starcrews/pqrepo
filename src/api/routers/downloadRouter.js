const express = require("express"),
  router = express.Router(),
  downloadController = require("../controllers/downloadController");

router.get("/", downloadController.displaySchoolsPage);

module.exports = router;
