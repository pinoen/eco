import { Box, Divider, Typography } from '@mui/material'
import StatusBar from './StatusBar';
import { useStatusContext } from '../../context/StatusContext';
import NewProfiles from './NewProfiles';
import SupplierBlock from './SupplierBlock';

const titleStyle = {
  fontFamily: "Nunito",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "35px",
  textAlign: "center",
  color: "black.main",
  paddingTop: "40px",
}


const Suppliers = () => {
  const { statusPage, showSupplier } = useStatusContext()

  const boxStyle = {
    py: 5,
    backgroundColor: "white.main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "360px",
    height: showSupplier ? "100%" : "100vh",
  };

  return (
    <Box sx={boxStyle}>
      <Typography sx={titleStyle}>Proveedores</Typography>

      <StatusBar />

      <Divider sx={{ width: "100%", borderColor: "#4E169D", borderTopWidth: "1px" }} />

      {statusPage === "Nuevos Perfiles" && showSupplier === false && <SupplierBlock />}
      {showSupplier && <NewProfiles showSupplier={showSupplier} />}
      {statusPage === "Aprobados" && <SupplierBlock />}
      {statusPage === "En revisión" && <SupplierBlock />}
      {statusPage === "Denegados" && <SupplierBlock />}

    </Box>
  )
}

export default Suppliers