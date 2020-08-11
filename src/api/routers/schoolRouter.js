const express = require("express"),
  router = express.Router(),
  schoolController = require("../controllers/schoolController");

router.route("/:school").get(schoolController.displayPage);

module.exports = router;
