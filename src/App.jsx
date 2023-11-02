import { ThemeProvider } from "@emotion/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import Publicaciones from "./components/publicaciones/Publicaciones";
import Layout_ex from "./components/layouts/Layout_ex";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
            <Route path="/layout" element={<Layout_ex />} />
            {/* Agregar rutas necesarias */}
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
