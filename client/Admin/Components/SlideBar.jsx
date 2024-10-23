import { useState } from "react";
import { Box, Drawer, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    { title: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  ];

  const pages = [
    { title: "Avyakt Murli", icon: <BookOutlinedIcon />, path: "/admin/murli" },
    { title: "Blogs", icon: <ArticleOutlinedIcon />, path: "/admin/edit" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? 80 : 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: isCollapsed ? 80 : 240, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px" }}>
        {!isCollapsed && <Typography variant="h5">Admin Panel</Typography>}
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.title}
            selected={selected === item.title}
            onClick={() => setSelected(item.title)}
            component={Link}
            to={item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {!isCollapsed && <ListItemText primary={item.title} />}
          </ListItem>
        ))}

        <Divider />

        {pages.map((item) => (
          <ListItem
            button
            key={item.title}
            selected={selected === item.title}
            onClick={() => setSelected(item.title)}
            component={Link}
            to={item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {!isCollapsed && <ListItemText primary={item.title} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
