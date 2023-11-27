import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import Publicaciones from "./components/publicaciones/Publicaciones";
import Layout_ex from "./components/layouts/Layout_ex";
import Login from "./components/login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleClientID } from "./constants";
import Profile from "./components/profile/Profile";
import Proveedores from "./components/proveedores/Proveedores";
import Proveedor from "./components/proveedores/Proveedor";
import SearchResult from "./components/search/SearchResult";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={googleClientID}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/publicaciones" element={<Publicaciones />} />
              <Route path="/proveedores/" element={<Proveedores />} />
              <Route path="/proveedores/:nombre" element={<Proveedor />} />
              <Route path="/search/:nombre" element={<SearchResult />} />
              <Route path="/layout" element={<Layout_ex />} />
              {/* vista para inicia sesion */}
              <Route path="/ingresa" element={<Login user={true} />} />
              {/* vista para registrate */}
              <Route path="/registrate" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              {/* Agregar rutas necesarias */}
            </Routes>
            {/* <Footer /> */}
          </Router>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
