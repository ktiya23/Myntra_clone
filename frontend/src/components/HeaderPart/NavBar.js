import React, { useState } from 'react';
import { Typography, Box, styled } from '@mui/material';

const Text = styled(Typography)`
  color: black;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

const SubmenuPopup = styled(Box)`
  position: relative;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  min-width: 200px;
`;

const Subheading = styled(Typography)`
  font-weight: normal; /* Default weight */
  margin: 8px 0 4px;
  font-size: 12px;
  transition: font-weight 0.3s ease;

  &:hover {
    font-weight: bold; /* Bold on hover */
    cursor: pointer;
  }
`;

const Item = styled(Typography)`
  font-size: 12px;
  margin: 2px 0;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const NavBar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const info = [
    {
      text: 'MEN',
      submenu: [
        { heading: 'Topwear', items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Hoodies', 'Sweatshirts', 'Jackets'] },
        { heading: 'Bottomwear', items: ['Jeans', 'Trousers', 'Shorts', 'Chinos', 'Cargo Pants'] },
        { heading: 'Indian & Festive Wear', items: ['Kurta', 'Sherwani', 'Dhoti', 'Bandhgala', 'Nehru Jacket'] },
        { heading: 'Innerwear', items: ['Boxers', 'Vests', 'Briefs', 'Thermals', 'Sleepwear'] },
        { heading: 'Footwear', items: ['Shoes', 'Loafers', 'Sneakers', 'Sandals', 'Slippers', 'Socks'] },
        { heading: 'Accessories', items: ['Belts', 'Watches', 'Sunglasses', 'Wallets', 'Hats'] },
        { heading: 'Sportswear', items: ['Track Pants', 'Sports Shoes', 'Compression Wear', 'Active T-Shirts'] },
      ],
    },
    {
      text: 'WOMEN',
      submenu: [
        { heading: 'Indian Wear', items: ['Sarees', 'Kurtis', 'Lehengas', 'Salwar Suits', 'Dupattas', 'Ethnic Gowns'] },
        { heading: 'Western Wear', items: ['Tops', 'Dresses', 'Jackets', 'Shirts', 'Co-ord Sets', 'Playsuits'] },
        { heading: 'Footwear', items: ['Shoes', 'Slippers', 'Sandals', 'Heels', 'Sneakers'] },
        { heading: 'Accessories', items: ['Belts', 'Watches', 'Jewelry', 'Handbags', 'Scarves'] },
        { heading: 'Activewear', items: ['Sports Bras', 'Leggings', 'Tank Tops', 'Track Pants', 'Sneakers'] },
        { heading: 'Winter Wear', items: ['Sweaters', 'Coats', 'Shrugs', 'Thermals'] },
        { heading: 'Lingerie & Sleepwear', items: ['Bras', 'Panties', 'Nightwear', 'Shapewear'] },
      ],
    },
    {
      text: 'KIDS',
      submenu: [
        { heading: 'Boys Clothing', items: ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Sweaters'] },
        { heading: 'Girls Clothing', items: ['Dresses', 'Tops', 'Skirts', 'Leggings', 'Sweaters'] },
        { heading: 'Footwear', items: ['School Shoes', 'Sports Shoes', 'Sandals', 'Slippers'] },
        { heading: 'Accessories', items: ['Caps', 'Bags', 'Watches', 'Belts'] },
        { heading: 'Toys & Games', items: ['Action Figures', 'Puzzles', 'Board Games', 'Educational Toys'] },
      ],
    },
    {
      text: 'HOME&LIVING',
      submenu: [
        { heading: 'Furniture', items: ['Sofas', 'Beds', 'Dining Tables', 'Chairs', 'Cabinets'] },
        { heading: 'Home Decor', items: ['Wall Art', 'Showpieces', 'Mirrors', 'Photo Frames', 'Clocks'] },
        { heading: 'Kitchen & Dining', items: ['Cookware', 'Dinner Sets', 'Storage Containers', 'Table Linens'] },
        { heading: 'Bedding', items: ['Bedsheets', 'Pillows', 'Blankets', 'Mattress Protectors'] },
        { heading: 'Bath Essentials', items: ['Towels', 'Bath Mats', 'Shower Curtains'] },
        { heading: 'Lighting', items: ['Lamps', 'Ceiling Lights', 'Table Lights', 'Outdoor Lighting'] },
      ],
    },
    {
      text: 'BEAUTY',
      submenu: [
        { heading: 'Makeup', items: ['Lipsticks', 'Foundations', 'Mascaras', 'Eyeliners', 'Blushes'] },
        { heading: 'Skincare', items: ['Moisturizers', 'Sunscreens', 'Face Washes', 'Serums', 'Scrubs'] },
        { heading: 'Haircare', items: ['Shampoos', 'Conditioners', 'Hair Oils', 'Hair Masks', 'Serums'] },
        { heading: 'Fragrances', items: ['Perfumes', 'Deodorants', 'Body Mists'] },
        { heading: 'Men’s Grooming', items: ['Beard Oils', 'Trimmers', 'Face Washes', 'Shaving Creams'] },
        { heading: 'Tools & Accessories', items: ['Makeup Brushes', 'Hair Dryers', 'Straighteners', 'Curlers'] },
      ],
    },
    {
      text: 'STUDIO',
      submenu: [
        { heading: 'Fitness', items: ['Yoga Classes', 'Workout Videos', 'Diet Plans'] },
        { heading: 'Styling', items: ['Personal Stylists', 'Makeover Tips', 'Virtual Styling'] },
        { heading: 'Beauty Tutorials', items: ['Makeup Videos', 'Skincare Tips', 'Haircare Guides'] },
        { heading: 'Lifestyle', items: ['Home Organization', 'Wellness Tips', 'Travel Guides'] },
        { heading: 'Creative Workshops', items: ['Painting', 'Pottery', 'Photography', 'Writing'] },
      ],
    },
  ];
  

  return (
    <Container>
      {info.map((data, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          sx={{ position: 'relative' }} 
        >
          <Text>{data.text}</Text>
          {hoverIndex === index && data.submenu && (
            <SubmenuPopup>
              {data.submenu.map((submenu, subIndex) => (
                <Box key={subIndex}>
                  <Subheading>{submenu.heading}</Subheading>
                  {submenu.items.map((item, itemIndex) => (
                    <Item key={itemIndex}>{item}</Item>
                  ))}
                </Box>
              ))}
            </SubmenuPopup>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default NavBar;