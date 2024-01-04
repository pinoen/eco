/* eslint-disable react/prop-types */
import { useStatusContext } from "../../context/StatusContext"
import SupplierBlock from "./SupplierBlock"
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Box, Typography } from "@mui/material";
import DropDownStatus from "./DropDownStatus";
import AddProduct from "../profile/AddProduct";
import Feedback from "./Feedback";

const statusStyle = {
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  textAlign: "center",
  color: "black.main",
}

const NewProfiles = ({ showSupplier, setShowSupplier }) => {
  const { status, statusPage } = useStatusContext()

  return (
    <>
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
          {status === "Denegado" || status === "En revisión" ? <Feedback /> : null}
          <AddProduct showSupplier={showSupplier} />
        </> :

        null}
    </>
  )
}

export default NewProfiles