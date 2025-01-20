import React, { useState } from "react";
import {
  Box,
  Grid2,
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

const ProductDetailPage = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  const categoriesList = ['Indian', 'Western', 'Indo-Western']; 
  const brandsList = ['H&M', 'Zara', 'Puma'];

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
      {/* Title Section */}
      <Typography
        variant="h6"
        sx={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Product Details List
      </Typography>

      <Grid2 container spacing={2}>
        <Grid2 item xs={8}>
          <Grid2 container spacing={2}>
            {/* Here, you can loop through products and display them */}
            <Grid2 item xs={4}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {/* <img src="https://via.placeholder.com/150" alt="Product" style={{ width: '100%' }} />
                <Typography variant="h6">Product 1</Typography>
                <Typography variant="body2">$100</Typography> */}
              </Box>
            </Grid2>
            {/* Repeat for other products */}
          </Grid2>
        </Grid2>

        <Grid2 item xs={4}>
          <Box sx={{ position: "sticky", top: "20px" }}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Filter & Sort
            </Typography>
            {/* Sorting */}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                onChange={handleSortChange}
                label="Sort By"
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
                <MenuItem value="rating">Highest Rating</MenuItem>
              </Select>
            </FormControl>
  
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
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProductDetailPage;
