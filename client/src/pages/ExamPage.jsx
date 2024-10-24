import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Grid, Box, Menu, MenuItem, Avatar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const LanguageButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  padding: "10px 20px",
  margin: "8px 0",
  backgroundColor: "#f4f4f4",
  color: "#555",
  "&:hover": {
    backgroundColor: "#F7B777",
    color: "#fff",
  },
  "&.selected": {
    backgroundColor: "#F7B777",
    color: "#fff",
  },
}));

const ExamPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // State to control the profile menu

  const languages = [
    "Hindi (हिंदी)",
    "English",
    "Nepali (नेपाली)",
    "Telugu (తెలుగు)",
    "Tamil (தமிழ்)",
    "Bengali (বাংলা)",
    "Marathi (मराठी)",
    "Kannada (ಕನ್ನಡ)",
    "Malayalam (മലയാളം)",
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#F7B777" }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              AMAP Project
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {/* Exam Button */}
              <Button
                component={Link}
                to="/quiz"
                sx={{
                  color: "#F7B777",
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  "&:hover": { backgroundColor: "#fff", color: "#F7B777" },
                }}
              >
                Exam
              </Button>

              {/* Profile Icon */}
              <IconButton onClick={handleProfileMenuOpen} sx={{ padding: 0 }}>
                <Avatar sx={{ backgroundColor: "#fff", color: "#F7B777" }} />
              </IconButton>

              {/* Profile Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>My Account</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f9f9f9" }}>
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#F7B777",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
            Avyakt Murli Adhyayan Project (AMAP)
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Select Your Preferred Language
          </Typography>
        </Box>

        {/* Language Filters */}
        <Grid container spacing={3} justifyContent="center">
          {languages.map((language) => (
            <Grid item xs={12} sm={6} md={4} key={language}>
              <LanguageButton
                fullWidth
                className={selectedLanguage === language ? "selected" : ""}
                onClick={() => handleLanguageSelect(language)}
              >
                {language}
              </LanguageButton>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Box sx={{ textAlign: "center", padding: "20px", marginTop: "40px" }}>
          <Typography variant="body2" sx={{ color: "#666" }}>
            For all updates, join our{" "}
            <a href="http://tiny.cc/aoshinditelegram" style={{ color: "#F7B777" }}>
              Telegram group
            </a>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ExamPage;
