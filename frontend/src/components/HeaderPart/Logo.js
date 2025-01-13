import { Box } from "@mui/material";
import myntraLogo from "../../assests/myntra_logo.png";

const Logo = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={myntraLogo} alt="logo" style={{ height: 60 }} />
    </Box>
  );
};

export default Logo;
