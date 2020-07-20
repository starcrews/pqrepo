const express = require( 'express' ),
    imageUploadController = require( '../controllers/imageUploadController' )
    router = express.Router();

router.post( '/', imageUploadController.uploadImage );

module.exports = router;