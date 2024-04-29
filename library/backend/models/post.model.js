const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      maxlength: 200
    },
    author: {
      type: String,
      require: true,
      maxlength: 200
    },
    genres: {
      type: String,
      require: true,
      maxlength: 200
    },
    holder: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
