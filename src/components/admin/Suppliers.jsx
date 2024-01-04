import { Box, Typography } from '@mui/material'
import StatusBar from './StatusBar';
import { useStatusContext } from '../../context/StatusContext';
import NewProfiles from './NewProfiles';
import SupplierBlock from './SupplierBlock';
import { useState } from 'react';

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
  const [showSupplier, setShowSupplier] = useState(false)
  const { statusPage } = useStatusContext()

  const boxStyle = {
    py: 5,
    backgroundColor: "white.main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "360px",
    height: "270vh",
  };
  return (
    <Box sx={boxStyle}>
      <Typography sx={titleStyle}>Proveedores</Typography>

      <StatusBar />

      <hr style={{ width: "100%", color: "primary.main", paddingBottom: "40px" }} />

      {statusPage === "Nuevos Perfiles" && <NewProfiles showSupplier={showSupplier} setShowSupplier={setShowSupplier} />}
      {statusPage === "Aprobados" && <SupplierBlock setShowSupplier={setShowSupplier} statusPage={statusPage} />}
      {statusPage === "En revisión" && <SupplierBlock setShowSupplier={setShowSupplier} statusPage={statusPage} />}
      {statusPage === "Denegados" && <SupplierBlock setShowSupplier={setShowSupplier} statusPage={statusPage} />}

    </Box>
  )
}

export default Suppliers