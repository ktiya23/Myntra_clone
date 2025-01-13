import { Typography, Box, styled } from '@mui/material';
import React from 'react';

const Text = styled(Typography)`
  color: black;
  font-weight: bold;
  font-size:13px;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 70%; 
`;

const NavBar = () => {
  const info = [
    { text: 'MEN' },
    { text: 'WOMEN' },
    { text: 'KIDS' },
    { text: 'HOME&LIVING' },
    { text: 'BEAUTY' },
    { text: 'STUDIO' },
  ];

  return (
    <Container>
      {info.map((data, index) => (
        <Box key={index}>
          <Text>{data.text}</Text> 
        </Box>
      ))}
    </Container>
  );
};

export default NavBar;
