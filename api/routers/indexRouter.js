const express = require( 'express' ),
    indexController = require( '../controllers/indexController' )
    router = express.Router();

router.get( '/', indexController.displayPage );

/*router.route( '/' )
    .get( indexController.displayPage ); */

/*router.get( '/', ( req, res ) => {
    console.log( 'Request for home page recieved' );
    res.render( 'index' );
} );*/ 
 
module.exports = router;
