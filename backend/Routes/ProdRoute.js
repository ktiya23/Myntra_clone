import express from "express";
const router = express.Router();
import Product from "../Models/Product.js";

router.get("/", async (req, res) => {
    const { categories, brands, sortBy } = req.query;
  
    let filter = {};
    if (categories) filter.category = { $in: categories.split(",") };
    if (brands) filter.brand = { $in: brands.split(",") };
  
    try {
      let products = await Product.find(filter);
  
      // Apply sorting
      if (sortBy === "priceLowToHigh") {
        products = products.sort((a, b) => a.price - b.price);
      } else if (sortBy === "priceHighToLow") {
        products = products.sort((a, b) => b.price - a.price);
      } else if (sortBy === "rating") {
        products = products.sort((a, b) => b.rating - a.rating);
      }
  
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });
export default router;
