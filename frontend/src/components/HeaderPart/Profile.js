import { Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      <IconButton sx={{ padding: 0 }}>
        <PersonIcon
          sx={{
            fontSize: 20,
            stroke: "black",
            fill: "none",
            strokeWidth: 1,
          }}
        />
      </IconButton>
      <Typography
        variant="body2"
        sx={{ color: "black", fontWeight: "bold", mt: 0 }}
      >
        Profile
      </Typography>
    </Box>
  );
};

export default Profile;
