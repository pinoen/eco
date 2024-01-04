import { Box, Typography } from '@mui/material'
import StatusBar from './StatusBar';
import SupplierBlock from './SupplierBlock';
import AddProduct from '../profile/AddProduct'
import { useState } from 'react';
import DropDownStatus from './DropDownStatus';
import FeedBack from './Feedback'
import { useStatusContext } from '../../context/StatusContext';
import Brightness1Icon from '@mui/icons-material/Brightness1';

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

const statusStyle = {
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  textAlign: "center",
  color: "black.main",
}


const Suppliers = () => {
  const { status, statusPage } = useStatusContext()

  const [showSupplier, setShowSupplier] = useState(false)
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

      <hr style={{ width: "100%", color: "primary.main", paddingBottom: "40px" }} />

      {showSupplier ? null : <SupplierBlock setShowSupplier={setShowSupplier} statusPage={statusPage} />}

      {showSupplier ?

        <>
          {status ?
            <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "24px" }}>
              <Brightness1Icon
                fontSize='large'
                sx={{ color: status === "Aprobado" ? "#1D9129" : status === "En revisión" ? "#B86B11" : "#B91C1C", paddingRight: "10px" }}
              />
              <Typography sx={statusStyle}>{status}</Typography>
            </Box>
            :
            null}
          <DropDownStatus />
          {status === "Denegado" || status === "En revisión" ? <FeedBack /> : null}
          <AddProduct showSupplier={showSupplier} />
        </> :

        null}

    </Box>
  )
}

export default Suppliers