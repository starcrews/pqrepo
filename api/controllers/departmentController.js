const { Upload } = require( '../models/uploadModel' ),
    { Course } = require( '../models/courseModel' );
    mongoose = require( 'mongoose' ),
    keys = require( '../config/keys' );

mongoose.connect( keys.mongoURI, { useNewUrlParser:true } );

exports.displayDepartment = function( req, res ) {
    console.log( "Request for department page recieved" );

    var course_name = "";

    for( var count = 1; count < ( req.query.course ).length - 1; count++ ) {
        course_name += req.query.course[ count ];    
    }
    //console.log( course_name ); 

    Upload.find( { department: course_name }, function( err, image ) {
        res.render( '../views/departments.ejs', { papers: image,
        course: course_name } );

        //console.log( image );
    } );
};