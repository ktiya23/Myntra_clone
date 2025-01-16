import { Container, Pagination, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const images = [
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/bf541a9e-49ad-4351-89bf-ac2ee33d95651734451313681-image_jpeg442386857.jpg" },
  { url: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9eYV0INJ_db113e314ba947d5aac22d32252d303e.png" },
  { url: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/1c39bcd6-3ac7-4d99-be1f-0a5ff8bac82e1734450134146-image_png_481891967.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/1c4d0e53-40d9-4cda-b636-4ae866ffada61734450068213-image_png_1815838412.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/jm3rOZrT_5047ca596a8b4b61b41cb837ca2a3b83.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/7m37tgHq_a95edf53a0544616b231b84486560fe9.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9dUbBicH_cb18c676b7d64c75b5ef8870dbcdf2be.png" },
  { url: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/MVzmtbFB_cbffe523c72f44778af1561d4b232e6c.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/28/H3uJuCql_6e2bb370e239400f8873da272ac1ad53.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/Fyjvppmv_abc9546e03d9428c94562e45803f92d4.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/ZvN8BHYP_34b21639e0764db7b7591848daa40544.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/wvCbfId7_5f60ca4882a340beab9319dabcf5a200.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/bf541a9e-49ad-4351-89bf-ac2ee33d95651734451313681-image_jpeg442386857.jpg" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9DxYUvNJ_2897e280351743ba8835e5d79a794322.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/aPMu8B2W_4445258dbac64d33b9ee551daf9557fb.png" },
  { url: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/BGLBdxOz_4dcc1d8a0f40417caeebbe3df99c793c.png" },
];

const ImageSlider = () => {
  const [currPage, setCurrPage] = useState(1);
  const imagesPerSlide = 4;
  const pageCount = Math.ceil(images.length / imagesPerSlide);

  const handlePage = (e, val) => {
    setCurrPage(val);
  };

  const getCurrImg = () => {
    const startIdx = (currPage - 1) * imagesPerSlide;
    return images.slice(startIdx, startIdx + imagesPerSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrPage((prevPage) => (prevPage === pageCount ? 1 : prevPage + 1));
    }, 3000);
  
    return () => clearInterval(interval);
  }, [pageCount]);
  

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        overflow: "hidden",
        mt:"20px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${(currPage - 1) * 100}%)`,
            transition: "transform 0.8s ease-in-out",
            width: `${pageCount * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Slide ${index + 1}`}
              style={{
                width: `${100 / imagesPerSlide}%`,
                height: "auto",
                flexShrink: 0,
                margin: 0,
                padding: 0,
              }}
            />
          ))}
        </Box>
      </Box>

      <Pagination
        count={pageCount}
        page={currPage}
        onChange={handlePage}
        sx={{ marginTop: 2 }}
      />
    </Container>
  );
};

export default ImageSlider;
