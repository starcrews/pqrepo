const { School } = require("../models/schoolModel");

//var Downloads = new Upload();
let departments = [];
let questions = [];

exports.displayPage = (req, res) => {
  School.find()
    .then((schools) => {
      res.render("../views/download.ejs", {
        Schools: schools,
        navigate: "upload",
        nav_title: "Upload Questions",
      });
    })
    .catch((errr) => {
      res.status(400).send({ Error: "Schools not found" });
    });
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
