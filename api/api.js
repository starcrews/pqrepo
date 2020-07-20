const express = require("express"),
  multer = require("multer"),
  storage = require("../config/cloudinary"),
  cloudinary = require("cloudinary").v2,
  api = express.Router(),
  departmentRouter = require("./routers/departmentRouter"),
  downloadRouter = require("./routers/downloadRouter"),
  uploadRouter = require("./routers/uploadRouter"),
  indexRouter = require("./routers/indexRouter");

api.use("/download", downloadRouter);
api.use("/department", departmentRouter);
api.use("/upload", uploadRouter);
api.use("/", indexRouter);
//app.use( "/api/images", imageUploadRouter );

const parser = multer({ storage: storage });

api.post("/api/images", parser.single("image"), (req, res) => {
  try {
    var events = JSON.parse(JSON.stringify(req.file));

    const url = events.path;

    if (url) {
      res.status(200).send({ URL: url });
    } else {
      res.status(400).send({ Error: "Operation Failed" });
    }
  } catch {
    res.status(500).send({ Error: "Server Error" });
  }
});

module.exports = api;
