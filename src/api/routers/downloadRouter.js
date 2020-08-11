const express = require( 'express' ),
    router = express.Router(),
    downloadController = require( '../controllers/downloadController' );

router.get( '/', downloadController.displayPage );

/*router.route( '/:id' )
    .get( authenticate, downloadController.fetchQuestion );*/

module.exports = router;