/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const CategoryBlock = ({ categoryName, icon, page }) => {
  const navigate = useNavigate();

  const CategoryBlockStyle = {
    display: "flex",
    width: `${page === "landing" ? "152px" : "328px"}`,
    height: `${page === "landing" ? "64px" : "72px"}`,
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
    textDecoration: `${page === "landing" ? "underline" : "none"}`,
    textUnderlineOffset: "70%",
    textDecorationColor: "#4E169D",
    textDecorationThickness: "2px",
  }

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
          width: '40px',
        }}
      />
      <Typography sx={TypographyStyle}>{categoryName}</Typography>
    </Box >
  )
}

export default CategoryBlock