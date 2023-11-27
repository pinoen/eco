import { Box, Typography } from "@mui/material"
import useSuppliers from "../../utilities/suppliers"
import { SearchBar } from "../common/SearchBar"
import { useParams } from "react-router-dom"
import SupplierCard from "../common/SupplierCard"
import SearchOffIcon from '@mui/icons-material/SearchOff';

const resultsTitleStyle = {
  color: "back.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "30px",
}

const resultsStyle = {
  color: "primary.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
}

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  backgroundColor: "white.main",
  marginTop: "102px",
  height: "100vh",
}

const innerBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  backgroundColor: "grey.main",
  margin: "80px 16px",
  padding: "16px",
  height: "200px",
}

const tryAgainStyle = {
  color: "black.main",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
}
const SearchResult = () => {
  const suppliers = useSuppliers()
  const suppliersList = suppliers.map((item) => item.name)
  const querySearch = useParams().nombre

  const isSupplier = (name) => {
    return suppliersList.includes(name)
  }

  return (
    <Box sx={boxStyle}>
      <SearchBar querySearch={querySearch} />
      <Typography sx={resultsTitleStyle}>Resultados de tu búsqueda</Typography>
      {isSupplier(querySearch) ? (
        <SupplierCard item={suppliers.find((item) => item.name === querySearch)} />
      ) : (
        <Box sx={innerBoxStyle}>
          <SearchOffIcon sx={{ fontSize: "48px", color: "primary.main" }} />
          <Typography sx={resultsStyle}>No se encontraron resultados para tu búsqueda</Typography>
          <Typography sx={tryAgainStyle}>Intentá nuevamente con otra consulta</Typography>
        </Box>
      )}
    </Box>
  )
}

export default SearchResult