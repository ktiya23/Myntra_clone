import { Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import LoginDialogBox from "../Login/LoginDialogBox";

const Profile = () => {
  const [open , setOpen] = useState(false)

  const handleDialog =()=>{
    setOpen(true)
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      <IconButton sx={{ padding: 0 }} onClick={()=> handleDialog()}>
        <PersonIcon
          sx={{
            fontSize: 20,
            stroke: "black",
            fill: "none",
            strokeWidth: 1,
          }}
        
        />
      </IconButton  >
      <Typography
        variant="body2"
        sx={{ color: "black", fontWeight: "bold", mt: 0 }}
      >
        Profile
      </Typography>
      <LoginDialogBox open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default Profile;
