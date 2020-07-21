require("../../db/mongoose");

const { Upload } = require("../models/uploadModel"),
  { Course } = require("../models/courseModel"),
  mongoose = require("mongoose"),
  keys = require("../../config/keys");

//var Downloads = new Upload();
let departments = [];
let questions = [];

exports.displayPage = function (req, res) {
  console.log("Request for download page recieved");

  /*Upload.find( {}, function( err, image ) {
        //console.log( image );
        //questions = image;
        res.render( '../views/download.ejs', { upload: image } );
    } ); */

  Course.find({}, function (err, course) {
    //console.log( course );
    //departments = course;
    res.render("../views/download.ejs", { courses: course });
  });

  /*res.render( '../views/download.ejs', { upload: questions,
    courses: departments }*/
};

/*exports.getAllQuestions = function( req, res ) {
    Downloads.find( {}, function( err, downloads ) {
        console.log( downloads );
    } );
};

/*exports.getAllQuestions = function( req, res ) {
    Downloads.find({})
    .then( questions => {
        if( !questions ) {
            res.status( 404 ).send( "No questions found" );
        }
          
        exports.displayPage = function( req, res ) {
            console.log( 'Request for download page recieved' );
            res.render( '../views/download.ejs', questions );
        };

        //res.status( 200 ).send( questions );
    } ).catch( e => {
        res.status( 400 ).send( e )
    } );
};*/

/*app.get("/download?:id", (req, res) => {
    var file = req.params.id;
    res.download(file);
    res.redirect("/download");
});*/
