const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const detailsSchema = new Schema(
  {
    departments: {
      type: [String],
      required: true,
    },

    levels: {
      type: [String],
      required: true,
    },
  },
  {
    autoCreate: true,
    strict: false,
    autoIndex: false,
  }
);

const Details = mongoose.model("details", detailsSchema);

module.exports = { Details };
