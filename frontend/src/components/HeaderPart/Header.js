import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Profile from "./Profile";
import WishList from "./WishList";
import Cart from "./Cart";
import NavBar from "./NavBar";

const StyledHeader = styled(AppBar)`
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 75px;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: calc(100% - 60px); 
  margin: 0 10px; 
  padding: 0 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <HeaderContainer>
          <Logo />
          <NavBar />
          <Search />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Profile />
            <WishList />
            <Cart />
          </Box>
        </HeaderContainer>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
