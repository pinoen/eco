import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CssBaseline from "@mui/material/CssBaseline";
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/logoEco.png'

const drawerWidth = 280;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <List>

        <Link to='/'>
          <ListItem disablePadding>
            <ListItemButton>
              <p className="navbarItems">Proveedores</p>
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton>
            <p className="navbarItems">Publicaciones</p>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <p className="navbarItems">Iniciá sesión</p>
          </ListItemButton>
        </ListItem>

        <p className="registerTextNavbar"> ¿Querés formar parte de la Red de impacto ECO como Proveedor? </p>
        <ListItem disablePadding>
          <ListItemButton>
            <p className="navbarItems">Registrate</p>            
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
          height: '10vh',
          zIndex: '10',
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-around" }}
        >
        {
          !mobileOpen ?
          <MenuIcon onClick={handleDrawerToggle}/>:
          <CloseIcon onClick={()=>handleDrawerToggle()}/>
        }
        
          <Link to="/" style={{ color: "whitesmoke" }}>
            <img src={logo} alt="" />
          </Link>
          <Box
            sx={{display: "flex", alignItems:'center', flexDirection:'column' }}
          >
            <AccountCircleOutlinedIcon color="black"/>
            <div>Ingresá</div>
          </Box>
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
              height: '90vh',
              top:'10vh',
              backgroundColor: "#4E169D",
              zIndex: '1'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "100vh",
          px: 2,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;