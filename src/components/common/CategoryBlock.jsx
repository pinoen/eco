/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const CategoryBlockStyle = {
  display: "flex",
  width: "152px",
  height: "64px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "16px",
  backgroundColor: "grey.main",
  padding: "8px",
  '&:hover': {
    cursor: "pointer",
  }
}

const TypographyStyle = {
  color: "black.main",
  fontFamily: "Nunito",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "25px",
  textDecoration: "underline",
  textUnderlineOffset: "70%",
  textDecorationColor: "#4E169D",
  textDecorationThickness: "2px",
}

const CategoryBlock = ({ categoryName, icon }) => {
  const navigate = useNavigate();

  return (
    <Box sx={CategoryBlockStyle} onClick={() => navigate(`/proveedores/${categoryName}`)}>
      <CardMedia
        component="img"
        alt={categoryName}
        height="40"
        image={icon}
        sx={{
          border: '1px solid black',
          borderRadius: "100%",
          padding: "3px",
        }}
      />
      <Typography sx={TypographyStyle}>{categoryName}</Typography>
    </Box >
  )
}

export default CategoryBlock