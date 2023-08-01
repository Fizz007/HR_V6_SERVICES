const Image = require("../model/imageModel");

//GET
const getImage = async (req, res) => {
  try {
    const findImage = await Image.find({});

    res.status(200).json({ message: "Images shown", Image: findImage });
  } catch (err) {
    res.status(400).json({ message: "error" });
  }
};

//CREATE
const createImage = async(req, res) =>{
   
    try {
      const savedImage = Image.create(req.body);
      
      res.status(200).json({message:"Image added", Image:savedImage});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

module.exports = {createImage, getImage};