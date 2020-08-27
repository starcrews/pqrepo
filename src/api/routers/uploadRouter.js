const express = require("express"),
  router = express.Router(),
  uploadController = require("../controllers/uploadController");

router.route("/success").get(uploadController.displaySuccess);

router.route("/failed").get(uploadController.displayFailed);

router
  .route("/")
  .get(uploadController.displayPage)
  .post(uploadController.postQuestion);

module.exports = router;
