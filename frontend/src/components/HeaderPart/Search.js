import React from "react";
import { Box, IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledContainer = styled(Box)`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 900px; 
  marginRight:"25px";
`;

const StyledInput = styled(InputBase)`
  flex-grow: 1; 
    marginRight:"25px";

`;

const Search = () => {
  return (
    <StyledContainer>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <StyledInput placeholder="Search for products, brands and more" />
    </StyledContainer>
  );
};

export default Search;
