import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, IconButton } from "@mui/material";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(164, 165, 167, 0.2)",
        color: "#343a40",
        padding: "30px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        gap: "0px",
      }}
    >
      {/* SHOPPING Section */}
      <Box>
        <Typography variant="smaller" gutterBottom fontWeight="bold">
          ONLINE SHOPPING
        </Typography>
        <List>
          {[ "Men", "Women", "Kids", "Beauty", "Home Living", "Gifts Cards" , "Myntra Insider"].map((item, index) => (
            <ListItem key={index} sx={{ padding: "0" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                {item}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      {/*Customer Policies*/}
      {/* <Box>
        <Typography variant="smaller" gutterBottom fontWeight="bold">
          ONLINE SHOPPING
        </Typography>
        <List>
          {[ "Contact Us", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping" , "Cancellation", "Returns", "Privacy Policies"].map((item, index) => (
            <ListItem key={index} sx={{ padding: "0" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                {item}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box> */}

      {/* USEFUL LINKS Section */}
      <Box>
        <Typography variant="smaller" gutterBottom fontWeight="bold">
          USEFUL LINKS
        </Typography>
        <List>
          {[
            { text: "Blog", link: "https://blog.myntra.com/" },
            { text: "Careers", link: "https://careers.myntra.com/" },
            { text: "Sitemap", link: "https://www.myntra.com/sitemap" },
            { text: "Corporate Information", link: "https://www.myntra.com/corp-info" },
            { text: "Whitehat", link: "https://www.myntra.com/security/whitehat" },
            { text: "Cleartrip", link: "https://www.cleartrip.com/" },
          ].map((item, index) => (
            <ListItem key={index} sx={{ padding: "0" }}>
              <Link to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                {item.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* KEEP IN TOUCH Section */}
      <Box>
        <Typography variant="smaller" gutterBottom fontWeight="bold">
          KEEP IN TOUCH
        </Typography>
        <List sx={{display:"flex"}}>
          <ListItem sx={{ padding: "0" }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/myntra"
              target="_blank"
              sx={{ color: "inherit", padding: "0" }}
            >
              <FaFacebook />
            </IconButton>
          </ListItem>
          <ListItem sx={{ padding: "0" }}>
            <IconButton
              component="a"
              href="https://x.com/myntra?mx=2"
              target="_blank"
              sx={{ color: "inherit", padding: "0" }}
            >
              <FaTwitter />
            </IconButton>
          </ListItem>
          <ListItem sx={{ padding: "0" }}>
            <IconButton
              component="a"
              href="https://www.youtube.com/user/myntradotcom"
              target="_blank"
              sx={{ color: "inherit", padding: "0" }}
            >
              <FaYoutube />
            </IconButton>
          </ListItem>
          <ListItem sx={{ padding: "0" }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/#"
              target="_blank"
              sx={{ color: "inherit", padding: "0" }}
            >
              <FaInstagram />
            </IconButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{display:"flex", flexDirection:"column"}}>
      <Box display={"flex"}>
        <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="img" height="49px"  width="48px"/>
        <Typography>100% ORIGINAL guarantee for all products at myntra.com</Typography>
      </Box>
      <Box display={"flex"}>
        <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="img" height="49px"  width="48px" />
        <Typography>Return within 14days of receiving your order</Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Footer;
