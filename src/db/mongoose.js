const mongoose = require("mongoose"),
  config = require("../config/keys");

mongoose.connect(config.mongoURI, {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = { mongoose };
