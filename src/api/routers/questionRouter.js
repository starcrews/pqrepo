const express = require("express"),
  router = express.Router(),
  questionController = require("../controllers/questionController");

router.get("/", questionController.displayQuestionPage);

module.exports = router;
