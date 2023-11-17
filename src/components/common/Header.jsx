import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  CssBaseline,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircleOutlined, Close } from "@mui/icons-material";
import logo from "../../assets/logoEco.png";

import useAlert from "../../utilities/alert";
import useAuth from "../../utilities/user";

function Navbar(props) {
  const { open, alertColor, alertMessage, showAlert, hideAlert } = useAlert(); // manejo de alertas
  const { user, handleLogout } = useAuth(); // data user y logout function

  const { window } = props; // identificar path
  const [mobileOpen, setMobileOpen] = useState(false);
  // codigo logout y alert
  const logout = () => {
    handleLogout();
    showAlert("Cerraste sesion exitosamente!");
  };

  // codigo para mostrar "ingresa" en el nav o no dependiendo la ruta
  const location = useLocation();
  const isLoginPage = location.pathname === "/ingresa";
  const isRegisterPage = location.pathname === "/registrate";
  const showAccountIcon = !isLoginPage && !isRegisterPage;

  // codigo para desplegar el menu de la imagen de usuario
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // codigo del menu de imagen de usuario
  const userMenu = (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
        >
          <Avatar
            sx={{ width: 40, height: 40 }}
            alt="imagen de usuario"
            src={user.picture}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: "8px 16px 0px 16px",
            minWidth: "240px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 40,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            "& .MuiList-root": {
              paddingBottom: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", gap: "6px", padding: "0px 0px 8px 0px" }}
        >
          <AccountCircleOutlined
            sx={{ width: "32px", height: "32px", alignSelf: "start" }}
          />{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                color: "#222",
                textAlign: "center",
                fontFamily: "Nunito",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "25px",
              }}
            >
              {user.name}
            </Typography>
            <Typography
              sx={{
                color: "#222",
                textAlign: "center",
                fontFamily: "Nunito",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "25px",
              }}
            >
              {user.sub}
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem sx={{ paddingLeft: "40px" }}>
          <Typography
            sx={{
              color: "#4E169D",
              textAlign: "center",
              fontFamily: "Nunito",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "25px",
            }}
          >
            Mi perfil
          </Typography>
        </MenuItem>

        <Typography
          onClick={logout}
          sx={{
            color: "#222",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "25px",
            textAlign: "left",
            marginTop: "4px",
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </Typography>
      </Menu>
    </Box>
  );

  // codigo para cerrar el menu desplegable
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // estilos de los links del menu desplegable
  const menuLink = {
    fontFamily: "Nunito",
    color: "#FAFAFA",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "20px",
    margin: "2% 0",
  };

  // codigo del menu desplegable
  const drawer = (
    <Box>
      <List>
        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography sx={menuLink}>Inicio</Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography sx={menuLink}>Proveedores</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography sx={menuLink}>Publicaciones</Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/ingresa" onClick={handleDrawerToggle}>
          <ListItem disablePadding>
            <ListItemButton>
              <Typography sx={menuLink}>Iniciá sesión</Typography>
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
              <Typography sx={menuLink}>Registrate</Typography>
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
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          {!mobileOpen ? (
            <MenuIcon onClick={handleDrawerToggle} />
          ) : (
            <Close onClick={() => handleDrawerToggle()} />
          )}

          <Link to="/" style={{ height: "56px" }}>
            <img src={logo} alt="" />
          </Link>

          {showAccountIcon ? ( // verifica si tenemos que mostrar el icono de "ingresa"
            user ? ( // si hay que mostrarlo, vemos si existe user para mostrar su imagen o el "ingresa"
              userMenu
            ) : (
              // si user no existe, mostramos el "ingresa"
              <Link to="/ingresa">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "40px",
                  }}
                >
                  <AccountCircleOutlined color="black" />
                  <Box sx={{ height: "16px", color: "#000" }}>Ingresá</Box>
                </Box>
              </Link>
            )
          ) : (
            // si estamos en la pagina "registrate" o "ingresa", para no ver el "registrate" y mantener los estilos del nav, usamos una box vacia
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
              width: 258,
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
      <Snackbar open={open} autoHideDuration={6000} onClose={hideAlert}>
        <Alert
          variant="filled"
          onClose={hideAlert}
          severity={alertColor}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Navbar;
