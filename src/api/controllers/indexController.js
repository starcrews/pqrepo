exports.displayHomePage = (req, res) => {
  try {
    res.status(200).render("index.ejs");
  } catch (err) {
    res.status(404).render("404.ejs", { Message: "Home Page Not Found." });
  }
};
