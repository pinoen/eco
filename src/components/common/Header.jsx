import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CssBaseline from "@mui/material/CssBaseline";

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logoEco.png";

const drawerWidth = 280;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={"Proveedores"}
                sx={{ color: "whitesmoke" }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={"Publicaciones"}
              sx={{ color: "whitesmoke" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={"Iniciá sesión"}
              sx={{ color: "whitesmoke" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Registrate"} sx={{ color: "whitesmoke" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        sx={{
          width: "100%",
          height: "auto", //aca
          zIndex: "10",
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-around" }}
        >
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="black" />
          </IconButton>
          <Link to="/" style={{ color: "whitesmoke", height: "56px" }}>
            {/* //aca el height ==> */}
            <img src={logo} alt="" />
          </Link>
          {/* agregue link para que redireccione al login y agregue color a box porque link lo cambiaba */}
          <Link to="/ingresa">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "40px", //aca
              }}
            >
              <AccountCircleOutlinedIcon color="black" />
              <Box sx={{ height: "16px", color: "#000" }}>Ingresá</Box>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"left"}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "90vh",
              top: "10vh",
              backgroundColor: "#4E169D",
              zIndex: "1",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "20vh",
          px: 2,
        }}
      >
      </Box> */}
    </Box>
  );
}

export default Navbar;
