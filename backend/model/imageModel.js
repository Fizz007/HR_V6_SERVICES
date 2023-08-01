const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    
  },
  
);

module.exports = mongoose.model("Image", ImageSchema);