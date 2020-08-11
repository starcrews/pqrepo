const express = require("express"),
  router = express.Router(),
  uploadController = require("../controllers/uploadController");

router
  .route("/")
  .get(uploadController.displayPage)
  .post(uploadController.postQuestion);

/*router.route( '/:id' )
    .post( authenticate, uploadController.putQuestion )
    .put( authenticate, uploadController.editQuestion );*/

module.exports = router;
