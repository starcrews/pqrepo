const express = require( 'express' ),
    router = express.Router(),
    uploadDetailsController = require( '../controllers/uploadDetailsController' );
 
router.get( '/', uploadDetailsController.displayPage );

/*router.route( '/:id' )
    .post( authenticate, uploadController.putQuestion )
    .put( authenticate, uploadController.editQuestion );*/

module.exports = router;