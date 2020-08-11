const express = require("express"),
  router = express.Router(),
  sessionController = require("../controllers/sessionController");

router.get("/", sessionController.displaySession);

module.exports = router;
