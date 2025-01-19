import React, { useState } from 'react';
import { Box, Grid2, Typography, Checkbox, FormControlLabel, FormGroup, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ProductDetailPage = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sortBy, setSortBy] = useState('default');

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
    <Box sx={{ padding: '20px' }}>
      {/* Title Section */}
      <Typography variant="h6" sx={{ marginTop: '80px' , display:"flex" , justifyContent:"center" , alignItems:"center" }}>
        Product Details List
      </Typography>

      <Grid2 container spacing={2}>
        <Grid2 item xs={8}>
          <Grid2 container spacing={2}>
            {/* Here, you can loop through products and display them */}
            <Grid2 item xs={4}>
              <Box sx={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
                {/* <img src="https://via.placeholder.com/150" alt="Product" style={{ width: '100%' }} />
                <Typography variant="h6">Product 1</Typography>
                <Typography variant="body2">$100</Typography> */}
              </Box>
            </Grid2>
            {/* Repeat for other products */}
          </Grid2>
        </Grid2>

        <Grid2 item xs={4}>
          <Box sx={{ position: 'sticky', top: '20px' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              Filter & Sort
            </Typography>

            {/* Sorting */}
            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
              <InputLabel>Sort By</InputLabel>
              <Select value={sortBy} onChange={handleSortChange} label="Sort By">
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
                <MenuItem value="rating">Highest Rating</MenuItem>
              </Select>
            </FormControl>

            {/* Categories */}
            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
              Categories
            </Typography>
            <FormGroup sx={{ marginBottom: '20px' }}>
              <FormControlLabel
                control={<Checkbox checked={categories.includes('electronics')} onChange={handleCategoryChange} value="Indian" />}
                label="Indian"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.includes('fashion')} onChange={handleCategoryChange} value="Western" />}
                label="Western"
              />
              <FormControlLabel
                control={<Checkbox checked={categories.includes('home')} onChange={handleCategoryChange} value="Indo-Western" />}
                label="Indo-Western"
              />
            </FormGroup>

            {/* Brands */}
            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
              Brands
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={brands.includes('apple')} onChange={handleBrandChange} value="H&M" />}
                label="H&M"
              />
              <FormControlLabel
                control={<Checkbox checked={brands.includes('samsung')} onChange={handleBrandChange} value="Zara" />}
                label="Zara"
              />
              <FormControlLabel
                control={<Checkbox checked={brands.includes('nike')} onChange={handleBrandChange} value="Puma" />}
                label="Puma"
              />
            </FormGroup>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProductDetailPage;
