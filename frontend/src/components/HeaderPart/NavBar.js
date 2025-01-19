import React, { useState } from "react";
import { Typography, Box, styled } from "@mui/material";

const Text = styled(Typography)`
  color: black;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  transition: border-bottom-color 0.3s ease;
`;

const SubmenuPopup = styled(Box)`
  position: absolute;
  top: 64px;
  gap: 30px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 250px;
  z-index: 10;
  margin: 0 auto;
`;

const Subheading = styled(Typography)`
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 8px;
  font-size: 15px;
  transition: font-weight 0.3s ease;
  color: red;
`;

const Item = styled(Typography)`
  font-size: 15px;
  color: black;
  font-weight: normal;
  margin: 2px 0;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const NavBar = () => {
  const info = [
    {
      text: "MEN",
      submenu: [
        {
          heading: "Topwear",
          items: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Hoodies",
            "Sweatshirts",
            "Jackets",
          ],
        },
        {
          heading: "Bottomwear",
          items: ["Jeans", "Trousers", "Shorts", "Chinos", "Cargo Pants"],
        },
        {
          heading: "Indian & Festive Wear",
          items: ["Kurta", "Sherwani", "Dhoti", "Bandhgala", "Nehru Jacket"],
        },
        {
          heading: "Innerwear",
          items: ["Boxers", "Vests", "Briefs", "Thermals", "Sleepwear"],
        },
        {
          heading: "Footwear",
          items: [
            "Shoes",
            "Loafers",
            "Sneakers",
            "Sandals",
            "Slippers",
            "Socks",
          ],
        },
        {
          heading: "Accessories",
          items: ["Belts", "Watches", "Sunglasses", "Wallets", "Hats"],
        },
        {
          heading: "Sportswear",
          items: [
            "Track Pants",
            "Sports Shoes",
            "Compression Wear",
            "Active T-Shirts",
          ],
        },
      ],
    },
    {
      text: "WOMEN",
      submenu: [
        {
          heading: "Indian Wear",
          items: [
            "Sarees",
            "Kurtis",
            "Lehengas",
            "Salwar Suits",
            "Dupattas",
            "Ethnic Gowns",
          ],
        },
        {
          heading: "Western Wear",
          items: [
            "Tops",
            "Dresses",
            "Jackets",
            "Shirts",
            "Co-ord Sets",
            "Playsuits",
          ],
        },
        {
          heading: "Footwear",
          items: ["Shoes", "Slippers", "Sandals", "Heels", "Sneakers"],
        },
        {
          heading: "Accessories",
          items: ["Belts", "Watches", "Jewelry", "Handbags", "Scarves"],
        },
        {
          heading: "Activewear",
          items: [
            "Sports Bras",
            "Leggings",
            "Tank Tops",
            "Track Pants",
            "Sneakers",
          ],
        },
        {
          heading: "Winter Wear",
          items: ["Sweaters", "Coats", "Shrugs", "Thermals"],
        },
        {
          heading: "Lingerie & Sleepwear",
          items: ["Bras", "Panties", "Nightwear", "Shapewear"],
        },
      ],
    },
    {
      text: "KIDS",
      submenu: [
        {
          heading: "Boys Clothing",
          items: ["T-Shirts", "Shirts", "Shorts", "Jeans", "Sweaters"],
        },
        {
          heading: "Girls Clothing",
          items: ["Dresses", "Tops", "Skirts", "Leggings", "Sweaters"],
        },
        {
          heading: "Footwear",
          items: ["School Shoes", "Sports Shoes", "Sandals", "Slippers"],
        },
        { heading: "Accessories", items: ["Caps", "Bags", "Watches", "Belts"] },
        {
          heading: "Toys & Games",
          items: [
            "Action Figures",
            "Puzzles",
            "Board Games",
            "Educational Toys",
          ],
        },
        {
          heading: "Infants",
          items: ["Bodysuit", "Dresses", "Cloth", "Suit"],
        },
        {
          heading: "Brands",
          items: ["H&M", "Zara", "HRX", "YK"],
        },
      ],
    },
    {
      text: "HOME&LIVING",
      submenu: [
        {
          heading: "Furniture",
          items: ["Sofas", "Beds", "Dining Tables", "Chairs", "Cabinets"],
        },
        {
          heading: "Home Decor",
          items: [
            "Wall Art",
            "Showpieces",
            "Mirrors",
            "Photo Frames",
            "Clocks",
          ],
        },
        {
          heading: "Kitchen & Dining",
          items: [
            "Cookware",
            "Dinner Sets",
            "Storage Containers",
            "Table Linens",
          ],
        },
        {
          heading: "Bedding",
          items: ["Bedsheets", "Pillows", "Blankets", "Mattress Protectors"],
        },
        {
          heading: "Bath Essentials",
          items: ["Towels", "Bath Mats", "Shower Curtains"],
        },
        {
          heading: "Lighting",
          items: [
            "Lamps",
            "Ceiling Lights",
            "Table Lights",
            "Outdoor Lighting",
          ],
        },
        {
          heading: "Floring",
          items: ["Runners", "Carpet", "Mats", "Mattress"],
        },
        {
          heading: "Storage",
          items: ["Bins", "Hangers", "Organizers", "Bags"],
        },
      ],
    },
    {
      text: "BEAUTY",
      submenu: [
        {
          heading: "Makeup",
          items: [
            "Lipsticks",
            "Foundations",
            "Mascaras",
            "Eyeliners",
            "Blushes",
          ],
        },
        {
          heading: "Skincare",
          items: [
            "Moisturizers",
            "Sunscreens",
            "Face Washes",
            "Serums",
            "Scrubs",
          ],
        },
        {
          heading: "Haircare",
          items: [
            "Shampoos",
            "Conditioners",
            "Hair Oils",
            "Hair Masks",
            "Serums",
          ],
        },
        {
          heading: "Fragrances",
          items: ["Perfumes", "Deodorants", "Body Mists"],
        },
        {
          heading: "Men’s Grooming",
          items: ["Beard Oils", "Trimmers", "Face Washes", "Shaving Creams"],
        },
        {
          heading: "Tools & Accessories",
          items: ["Makeup Brushes", "Hair Dryers", "Straighteners", "Curlers"],
        },
        {
          heading: "Top Brands",
          items: [
            "Lakme",
            "Mama Earth",
            "Maybelline",
            "Loreals",
            "Nivea",
            "M.A.C",
          ],
        },
      ],
    },
    {
      text: "STUDIO",
      submenu: [
        {
          heading: "Fitness",
          items: ["Yoga Classes", "Workout Videos", "Diet Plans"],
        },
        {
          heading: "Styling",
          items: ["Personal Stylists", "Makeover Tips", "Virtual Styling"],
        },
        {
          heading: "Beauty Tutorials",
          items: ["Makeup Videos", "Skincare Tips", "Haircare Guides"],
        },
        {
          heading: "Lifestyle",
          items: ["Home Organization", "Wellness Tips", "Travel Guides"],
        },
        {
          heading: "Creative Workshops",
          items: ["Painting", "Pottery", "Photography", "Writing"],
        },
      ],
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [currentSubmenu, setCurrentSubmenu] = useState(null);

  const handleMouseEnter = (index, submenu) => {
    setHoverIndex(index);
    setCurrentSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setCurrentSubmenu(null);
  };

  return (
    <Container>
      {info.map((data, index) => (
        <Box
          key={index}
          onMouseEnter={() => handleMouseEnter(index, data.submenu)}
          sx={{
            position: "relative",
            paddingBottom: "5px",
            borderBottom: hoverIndex === index ? "5px solid red" : "none",
          }}
        >
          <Text>{data.text}</Text>
        </Box>
      ))}

      {hoverIndex !== null && currentSubmenu && (
        <SubmenuPopup
          onMouseEnter={() => setHoverIndex(hoverIndex)}
          onMouseLeave={handleMouseLeave}
        >
          {currentSubmenu.map((submenu, subIndex) => (
            <Box key={subIndex} sx={{ marginBottom: "10px" }}>
              <Subheading>{submenu.heading}</Subheading>
              {submenu.items.map((item, itemIndex) => (
                <Item key={itemIndex}>{item}</Item>
              ))}
            </Box>
          ))}
        </SubmenuPopup>
      )}
    </Container>
  );
};

export default NavBar;
