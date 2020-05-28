const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: String,
    artist: String,
    link: String,
  },
  { timestamps: true }
);
module.exports = model("Product", productSchema);
