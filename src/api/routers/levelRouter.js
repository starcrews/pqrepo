const express = require("express"),
  router = express.Router(),
  levelController = require("../controllers/levelController");

router.get("/", levelController.displayLevelPage);

module.exports = router;
