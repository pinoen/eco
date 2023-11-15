import { Box, Typography } from '@mui/material'

const subTitleStyle = {
  color: "black.main",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "25px",
}

const titleStyle = {
  color: "black.main",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "25px",
}

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: { xs: "start", sm: "center" },
  paddingLeft: "16px",
  width: "100%",
  marginBottom: "24px",
}
const RecommendationCardTitle = () => {
  return (
    <Box sx={boxStyle}>
      <Typography variant="h5" sx={subTitleStyle}>
        Recomendaciones locales para vos
      </Typography>
      <Typography variant="h3" sx={titleStyle}>
        Proveedores cerca tuyo
      </Typography>
    </Box>
  )
}

export default RecommendationCardTitle