const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    department: {
      type: String,
      required: true,
    },

    course_code: {
      type: String,
      required: true,
    },

    course_name: {
      type: String,
      required: true,
    },

    session: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    url: {
      type: [String],
      required: true,
    },
  },
  {
    autoCreate: true,
    strict: false,
    autoIndex: false,
    timestamps: {
      createdAt: "datePosted",
      updatedAt: "updatedAt",
    },
  }
);

const Question = mongoose.model("questions", questionSchema);

module.exports = { Question };
