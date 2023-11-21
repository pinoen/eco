/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from "@mui/material"

const CategoryBlockStyle = {
  display: "flex",
  width: "152px",
  height: "64px",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "16px",
  backgroundColor: "grey.main",
  padding: "8px",
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
  return (
    <Box sx={CategoryBlockStyle}>
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
    </Box>
  )
}

export default CategoryBlock