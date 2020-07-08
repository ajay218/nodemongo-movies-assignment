const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Movies = mongoose.model("Movie", movieSchema);

module.exports = Movies;
