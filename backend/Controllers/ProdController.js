import Product from "../Models/product";

exports.getProductDetails = async (req, res) => {
    try {
      const { category } = req.params;
      const { brands, priceRange } = req.query; // Getting other query parameters
      let filter = { category };
  
      // Add brand filter if present
      if (brands) {
        filter.brand = { $in: brands.split(',') };
      }
  
      // Add price filter if present
      if (priceRange) {
        const [min, max] = priceRange.split('-');
        filter.price = { $gte: min, $lte: max };
      }
  
      const products = await Product.find(filter);
  
      if (products.length === 0) {
        return res.status(404).json({ message: "No products found" });
      }
      
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  