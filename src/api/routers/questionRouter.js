const express = require("express"),
  router = express.Router(),
  questionController = require("../controllers/questionController");

router.get("/", questionController.displayQuestion);

module.exports = router;
