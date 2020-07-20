exports.displayPage = function( req, res ) {
    console.log( 'Request for home page recieved' );
    res.render( '../views/index.ejs' );
};