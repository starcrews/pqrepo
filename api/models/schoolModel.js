const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const departmentSchema = new Schema({
  department: {
    type: String,
    required: true,
  },
});

const schoolSchema = new Schema(
  {
    school: {
      type: String,
      required: true,
    },

    departments: {
      type: [departmentSchema],
      required: true,
    },
  },
  {
    autoCreate: true,
    strict: false,
    autoIndex: false,
  }
);

const School = mongoose.model("school", schoolSchema);

module.exports = { School };
