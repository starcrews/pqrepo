const express = require("express"),
  router = express.Router(),
  levelController = require("../controllers/levelController");

router.get("/", levelController.displayLevel);

module.exports = router;
