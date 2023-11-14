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
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

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
              <Typography className="navbarItems">Inicio</Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <Typography className="navbarItems">Proveedores</Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton>
            <Typography className="navbarItems">Publicaciones</Typography>
          </ListItemButton>
        </ListItem>

        <Link to="/ingresa">
          <ListItem disablePadding>
            <ListItemButton>
              <Typography className="navbarItems">Iniciá sesión</Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Typography className="registerTextNavbar">
          {" "}
          ¿Querés formar parte de la Red de impacto ECO como Proveedor?{" "}
        </Typography>
        <Link to="/registrate">
          <ListItem disablePadding>
            <ListItemButton>
              <Typography className="navbarItems">Registrate</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
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
          height: "auto",
          zIndex: "10",
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-around" }}
        >
          {!mobileOpen ? (
            <MenuIcon onClick={handleDrawerToggle} />
          ) : (
            <CloseIcon onClick={() => handleDrawerToggle()} />
          )}

          <Link to="/" style={{ height: "56px" }}>
            <img src={logo} alt="" />
          </Link>
          <Link to="/ingresa">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "40px",
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
              height: "calc(100vh - 56px)",
              top: "56px",
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
      ></Box> */}
    </Box>
  );
}

export default Navbar;
