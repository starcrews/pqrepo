const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const departmentSchema = new Schema({
  course: {
    type: String,
    required: true,
  },
});

const levelSchema = new Schema({
  level: {
    type: String,
    required: true,
  },
});

const detailsSchema = new Schema(
  {
    departments: {
      type: [departmentSchema],
      required: true,
    },

    levels: {
      type: [levelSchema],
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
