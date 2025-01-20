import React,{useState} from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../util";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
      email: "",
      password: "",
    });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = loginInfo;
      if (!email || !password) {
        return handleError("All fields are required!!");
      }
      try {
          const url = "http://localhost:8080/auth/login";
          const response = await fetch(url,{
              method:"POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body:JSON.stringify(loginInfo)
          })
          const result = await response.json()
          const {success , message , error, name, jwtToken} =  result
          if (success){
              handleSuccess(message);
              localStorage.setItem("token", jwtToken)
              localStorage.setItem("loggedInUser", name)
              setTimeout(()=>{
                  navigate("/")
              },1000)
          }else if(error){
              const details = error?.details[0].message
              handleError(details)
          }else if(!success){
              handleError(message)
          }
          console.log(result)
      } catch (error) {
          handleError(error)
      }
    };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Login
      </Typography>
      <Divider />
      <form onSubmit={handleLoginSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={loginInfo.email}
          onChange={handleChange}

        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={loginInfo.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: "15px" }}
        >
          Login
        </Button>
      </form>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "15px", cursor: "pointer" }}
        onClick={() => navigate("/signup")}
      >
        New to Myntra? Sign Up
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default Login;
