import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { fetchProducts } from "../../api";

const ProductDetailPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  const categoriesList = ["Indian", "Western", "Indo-Western"];
  const brandsList = ["H&M", "Zara", "Puma"];

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const filters = {
        categories: categories.join(","),
        brands: brands.join(","),
        sortBy,
      };
      const data = await fetchProducts(filters);
      setProducts(data);
    };

    fetchAndSetProducts();
  }, [categories, brands, sortBy]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((item) => item !== value)
        : [...prevCategories, value]
    );
  };

  const handleBrandChange = (event) => {
    const { value } = event.target;
    setBrands((prevBrands) =>
      prevBrands.includes(value)
        ? prevBrands.filter((item) => item !== value)
        : [...prevBrands, value]
    );
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h6"
        sx={{ marginTop: "80px", textAlign: "center" }}
      >
        Product Details List
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={4} key={product._id}>
                <Box sx={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
                  <img src={product.image} alt={product.name} style={{ width: "100%" }} />
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">Price: ${product.price}</Typography>
                  <Typography variant="body2">Rating: {product.rating}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ position: "sticky", top: "20px" }}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Filter & Sort
            </Typography>

            {/* Sorting */}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel>Sort By</InputLabel>
              <Select value={sortBy} onChange={handleSortChange} label="Sort By">
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
                <MenuItem value="rating">Highest Rating</MenuItem>
              </Select>
            </FormControl>

            {/* Categories */}
            <Typography variant="subtitle1">Categories</Typography>
            <FormGroup sx={{ marginBottom: "20px" }}>
              {categoriesList.map((category) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={categories.includes(category)}
                      onChange={handleCategoryChange}
                      value={category}
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>

            {/* Brands */}
            <Typography variant="subtitle1">Brands</Typography>
            <FormGroup>
              {brandsList.map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      checked={brands.includes(brand)}
                      onChange={handleBrandChange}
                      value={brand}
                    />
                  }
                  label={brand}
                />
              ))}
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
