const express = require( 'express' ),
    router = express.Router(),
    uploadsuccessController = require( '../controllers/uploadsuccessController' );
 
router.get( '/', uploadsuccessController.displayPage );

module.exports = router;