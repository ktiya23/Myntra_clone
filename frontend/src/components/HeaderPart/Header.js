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
  padding: 0 30px;
`;

const Header = () => {
  return (
    <StyledHeader position="static">
      <Toolbar disableGutters>
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
