import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { SearchBar } from "../common/SearchBar";
import { useParams } from "react-router-dom";
import SupplierCard from "../common/SupplierCard";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import axios from "axios";
import { apiUrl } from "../../constants";

const resultsTitleStyle = {
  color: "back.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "30px",
};

const resultsStyle = {
  color: "primary.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  backgroundColor: "white.main",
  marginTop: "102px",
  height: "100vh",
};

const innerBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  backgroundColor: "grey.main",
  margin: "80px 16px",
  padding: "16px",
  height: "200px",
};

const tryAgainStyle = {
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
};
const SearchResult = () => {
  const [suppliersSearched, setSuppliersSearched] = useState([]);
  const [error404, setError404] = useState(false); // Estado para manejar el error 404
  const querySearch = useParams().nombre;

  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/searchByName?name=${querySearch}`)
      .then((response) => {
        setSuppliersSearched(response.data);
        setError404(false); // Reiniciar el estado del error
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError404(true); // Establecer el estado de error 404
        } else {
          console.error("Error al obtener nombres de proveedores:", error);
        }
      });
  }, [querySearch]);

  return (
    <Box sx={boxStyle}>
      <SearchBar querySearch={querySearch} />
      <Typography sx={resultsTitleStyle}>Resultados de tu búsqueda</Typography>

      {/* Mostrar el mensaje de error si se produce un error 404 */}
      {error404 ? (
        <Box sx={innerBoxStyle}>
          <SearchOffIcon sx={{ fontSize: "48px", color: "primary.main" }} />
          <Typography sx={resultsStyle}>
            No se encontraron resultados para tu búsqueda
          </Typography>
          <Typography sx={tryAgainStyle}>
            Intentá nuevamente con otra consulta
          </Typography>
        </Box>
      ) : (
        // Mostrar los resultados de la búsqueda si no hay error
        suppliersSearched.map((item, idx) => (
          <SupplierCard item={item} key={idx} />
        ))
      )}
    </Box>
  );
};

export default SearchResult;
