import Product from "../models/productModels.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ msg: "server error" });
  }
};


export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
  
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({  product });
  } catch (error) {
    // If an error occurs during the process, send a 500 status code and a message
    console.error("Error in getProduct:", error);
    res.status(500).json({ message: "Server error" });
  }
};

