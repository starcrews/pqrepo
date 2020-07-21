exports.get404 = (req, res, next) => {
  res
    .status(404)
    .render("pageNotFound.ejs", { Message: "Page data not found" });
  next();
};
