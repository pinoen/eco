/* eslint-disable react/prop-types */
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Box, Divider, Typography } from "@mui/material"

const boxStyle = {
  display: "flex",
  width: "328px",
  height: "72px",
  padding: "8px 8px 8px 16px",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "8px",
  backgroundColor: "grey.main",
}

const textContainerStyle = {
  width: "290px",
  height: "56px",
}

const titleStyle = {
  color: "primary.main",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  marginBottom: "4px",
}


const categoryStyle = {
  fontFamily: "Nunito",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  color: "black.main",
  marginTop: "4px",
}

const SupplierBlock = ({ setShowSupplier }) => {
  return (
    <Box sx={boxStyle}>
      <Box sx={textContainerStyle} onClick={() => setShowSupplier(pre => !pre)}>
        <Typography sx={titleStyle}>Lavanda</Typography>
        <Divider sx={{ width: "75%", borderColor: "#00A364", borderTopWidth: "2px" }} />
        <Typography sx={categoryStyle}>Cosmética natural</Typography>
      </Box>

      <ArrowForwardIosIcon />
    </Box>
  )
}

export default SupplierBlock