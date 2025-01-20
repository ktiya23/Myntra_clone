import Product from "../Models/product";

exports.getProductDetails = async (req, res) => {
    try {
      const { category } = req.params; // Get category from route parameters
      const products = await Product.find({ category }); // Query the database for matching category
      if (products.length === 0) {
        return res.status(404).json({ message: "No products found for this category" });
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };