import React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logoEco.png";

const drawerWidth = 258;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === "/ingresa";
  const isRegisterPage = location.pathname === "/registrate";
  const showAccountIcon = !isLoginPage && !isRegisterPage;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <List>
        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  color: "#FAFAFA",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "20px",
                  margin: "2% 0",
                }}
              >
                Inicio
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  color: "#FAFAFA",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "20px",
                  margin: "2% 0",
                }}
              >
                Proveedores
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  color: "#FAFAFA",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "20px",
                  margin: "2% 0",
                }}
              >
                Publicaciones
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/ingresa" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  color: "#FAFAFA",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "20px",
                  margin: "2% 0",
                }}
              >
                Iniciá sesión
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Typography
          sx={{
            fontFamily: "Nunito",
            color: "#FAFAFA",
            fontSize: "18px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "22px",
            width: "242px",
            margin: "6% 6% 0",
          }}
        >
          {" "}
          ¿Querés formar parte de la Red de impacto ECO como Proveedor?{" "}
        </Typography>
        <Link to="/registrate" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  color: "#FAFAFA",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "20px",
                  margin: "2% 0",
                }}
              >
                Registrate
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
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
          {showAccountIcon ? (
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
          ) : (
            <Box sx={{ width: "54px" }}></Box>
          )}
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
    </Box>
  );
}

export default Navbar;
