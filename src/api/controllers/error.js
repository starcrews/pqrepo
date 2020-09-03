exports.get500 = (req, res, next) => {
  res
    .status(500)
    .render("500.ejs", { Message: "Server Error, Please Try Again." });
  next();
};
