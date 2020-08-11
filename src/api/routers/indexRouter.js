const express = require("express"),
  router = express.Router(),
  indexController = require("../controllers/indexController");

router.route("/").get(indexController.displayPage);

module.exports = router;
