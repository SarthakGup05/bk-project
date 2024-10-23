import React, { useState, useRef } from "react";
import { TextField, Button, IconButton, Typography, Box, InputAdornment } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffff, #F7B777)",
        padding: "20px",
      }}
    >
      <Box
        ref={formRef}
        sx={{
          width: { xs: "100%", sm: "400px" },
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <img src="/assets/img/logo.png" alt="Logo" style={{ height: "50px", marginBottom: "24px" }} />
        
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: "#333" }}>
          Welcome Back
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", marginBottom: "24px" }}>
          Please sign in to your account
        </Typography>

        <form>
          <TextField
            label="Mobile Number / Email ID"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "12px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "#aaa" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "12px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: "#aaa" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              paddingY: "12px",
              marginBottom: "20px",
              backgroundColor: "#F7B777",
              "&:hover": { backgroundColor: "#dda655" },
              borderRadius: "12px",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 6px 20px rgba(247, 183, 119, 0.4)",
              transition: "transform 0.3s ease",
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
          >
            Sign In
          </Button>
        </form>

        <Typography variant="body2" sx={{ color: "#666" }}>
          Don't have an account?{" "}
          <Link to="/sign-up" style={{ color: "#F7B777", fontWeight: "500", textDecoration: "none" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignInForm;
