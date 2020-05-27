const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    spotifyURI: String,
    name: String,
    description: String,
    img: String,
    price: { type: Number, min: 0 },
    platform: String,
  },
  { timestamps: true }
);
module.exports = model("Product", productSchema);
