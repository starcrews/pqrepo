exports.displayPage = function (req, res) {
  /*var department = req.query.department;
  var course_code = req.query.course_code;
  var course_name = req.query.course_name;
  var year = req.query.year;
  var page_number = req.query.page_number;

  console.log("Request for upload page recieved");
  res.render("../views/upload.ejs", {
    department: department,
    course_code: course_code,
    course_name: course_name,
    year: year,
    page_number: page_number,
  });

  if (req.query.message != null) {
    var message = req.query.message;
  }*/

  res.render("upload.ejs", {
    courses: [
      { course: "" },
      { course: "ACCOUNTING" },
      { course: "AGRICULTURE" },
      { course: "ANATOMY" },
      { course: "BANKING AND FINANCE" },
      { course: "BIOCHEMISTRY" },
      { course: "BIOLOGY" },
      { course: "BUSINESS ADMINISTRATION" },
      { course: "CHEMISTRY" },
      { course: "COMPUTER SCIENCE" },
      { course: "ECONOMICS" },
      { course: "ENGLISH STUDIES AND FRENCH" },
      { course: "GEDS" },
      { course: "HISTORY AND INTERNATIONAL RELATIONS" },
      { course: "INFORMATION RESOURCE MANAGEMENT" },
      { course: "INFORMATION TECHNOLOGY" },
      { course: "INTERNATIONAL LAW AND DIPLOMACY" },
      { course: "LAW" },
      { course: "MARKETING" },
      { course: "MASS COMMUNICATION" },
      { course: "MATHEMATICS" },
      { course: "MEDICAL LABORATORY SCIENCE" },
      { course: "MICROBIOLOGY" },
      { course: "NURSING" },
      { course: "NUTRITION AND DIETICS" },
      { course: "PHYSICS AND ELECTRONICS" },
      { course: "PHYSIOLOGY" },
      { course: "POLITICAL SCIENCE" },
      { course: "PUBLIC ADMINISTRATION" },
      { course: "PUBLIC HEALTH" },
      { course: "SOCIAL WORK" },
      { course: "SOFTWARE ENGINEERING" },
      { course: "THEOLOGY" },
      { course: "OTHERS" },
    ],
    navigate: "download",
    nav_title: "View Questions",
  });
};

/*var page_number = "Page " + req.query.page_number;

var newUpload = new Upload();
var dept = req.query.department;

newUpload.url = events.secure_url;
newUpload.id = events.public_id;
newUpload.upload_date = events.created_at;
newUpload.department = req.query.department;
newUpload.course_code = req.query.course_code;
newUpload.course_name = req.query.course_name;
newUpload.year = req.query.year;
newUpload.page_number = page_number;

newUpload.save(function (err, savedObject) {
    if (err) {
        res.json(err);
    } else {
        var message = "success";
        res.redirect("/uploadDetails?message=" + message);
    }
});

Course.find({ department: dept }, function (err, course) {
    console.log(course);
    if (course.length === 0) {
        var newCourse = new Course();
        newCourse.department = req.query.department;
        //console.log(newCourse.department);

        newCourse.save(function (err, savedObject) {
            if (err) {
                res.json(err);
            }
        });
    }
});*/

/*app.post(
    "/imageDetails",
    [
        check("department", "department is required").not().isEmpty(),
        check("course_code", "course code is required").not().isEmpty(),
        check("course_name", "course name is required").not().isEmpty(),
        check("year", "year is required").not().isEmpty(),
        check("page_number", "page number is required").not().isEmpty(),
    ],
    (req, res, next) => {
        const result = validationResult(req);
        var errors = result.errors;
        var message = "";

        for (var key in errors) {
            console.log(errors[key].value);
        }

        if (!result.isEmpty()) {
            res.render("uploadDetails.ejs", {
                errors: errors,
                courses: [
                    { course: "" },
                    { course: "ACCOUNTING" },
                    { course: "AGRICULTURE" },
                    { course: "ANATOMY" },
                    { course: "BANKING AND FINANCE" },
                    { course: "BIOCHEMISTRY" },
                    { course: "BIOLOGY" },
                    { course: "BUSINESS ADMINISTRATION" },
                    { course: "CHEMISTRY" },
                    { course: "COMPUTER SCIENCE" },
                    { course: "ECONOMICS" },
                    { course: "ENGLISH STUDIES AND FRENCH" },
                    { course: "GEDS" },
                    { course: "HISTORY AND INTERNATIONAL RELATIONS" },
                    { course: "INFORMATION RESOURCE MANAGEMENT" },
                    { course: "INFORMATION TECHNOLOGY" },
                    { course: "INTERNATIONAL LAW AND DIPLOMACY" },
                    { course: "LAW" },
                    { course: "MARKETING" },
                    { course: "MASS COMMUNICATION" },
                    { course: "MATHEMATICS" },
                    { course: "MEDICAL LABORATORY SCIENCE" },
                    { course: "MICROBIOLOGY" },
                    { course: "NURSING" },
                    { course: "NUTRITION AND DIET" },
                    { course: "PHYSICS AND ELECTRONICS" },
                    { course: "PHYSIOLOGY" },
                    { course: "POLITICAL SCIENCE" },
                    { course: "PUBLIC ADMINISTRATION" },
                    { course: "PUBLIC HEALTH" },
                    { course: "SOCIAL WORK" },
                    { course: "SOFTWARE ENGINEERING" },
                    { course: "THEOLOGY" },
                    { course: "OTHERS" },
                ],
                message: message,
            });
        } else {
            dept = req.session;
            dept = req.body.department;
            var department = req.body.department;
            var course_code = req.body.course_code;
            var course_name = req.body.course_name;
            var year = req.body.year;
            var page_number = req.body.page_number;

            res.redirect(
                "/upload?department=" +
                department +
                "&course_code=" +
                course_code +
                "&course_name=" +
                course_name +
                "&year=" +
                year +
                "&page_number=" +
                page_number
            );
        }
    }
);*/

exports.putQuestion = function (req, res) {};

exports.editQuestion = function (req, res) {};

/*var message = req.query.message;

    if( message === "success" )
    {
        
    }
    else 
    {
        res.render( '../views/uploadDetails.ejs' );
    } */
/*var url = req.query.url;
    var id = req.query.id;
    var upload_date = req.query.upload_date;

    console.log( url );
    console.log( id );
    console.log( upload_date );

    console.log( 'Request for upload details page recieved' );
    res.render( '../views/uploadDetails.ejs', { url : url, id : id, upload_date : upload_date } );

    //res.redirect( '/imageDetails?url=' + url + '&id=' + id + '&upload_date=' + date )*/
