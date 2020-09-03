const express = require("express"),
  router = express.Router(),
  uploadController = require("../controllers/uploadController"),
  { body } = require("express-validator");

router
  .route("/")
  .get(uploadController.displayUploadPage)
  .post(
    [
      body("department").trim(),
      body("course_code").trim().not().isEmpty(),
      body("course_name").trim().not().isEmpty(),
      body("session").trim(),
      body("level").trim(),
      body("image").trim().not().isEmpty().isURL(),
    ],
    uploadController.postQuestion
  );

module.exports = router;
