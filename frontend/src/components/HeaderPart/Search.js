import React from "react";
import { Box, IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledContainer = styled(Box)`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px 8px;
  width: 500px;
  height:25px;
`;


const StyledInput = styled(InputBase)`
    padding:10px;
`;


const Search = () => {
  return (
    <StyledContainer>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <StyledInput placeholder="Search for products , brand and more" />
    </StyledContainer>
  );
};

export default Search;
