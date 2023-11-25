/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "../../theme/theme";
import SupplierDetailModal from "./SupplierDetailModal";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const productNameStyle = {
  color: "black.main",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "25px",
};

const descriptionAndLocationStyle = {
  color: "black.main",
  fontFamily: "Nunito",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: "2px",
  width: "134px",
  height: "48px",
  padding: "4px 10px 16px 0px",
  marginBottom: "16px",
};

const categoryStyle = {
  borderRadius: "4px",
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: "white.main",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  width: "96px",
  height: "24px",
  padding: "4px 8px",
  color: theme.palette.primary.main,
  fontFamily: "Nunito",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",
  textAlign: "center",
  position: "absolute",
  top: 0,
  right: 0,
};

const SupplierCard = ({ item, page }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={page === "landing" ? { width: "152px" } : { width: "328px" }}>
        <CardActionArea onClick={handleOpen}>
          <Typography sx={categoryStyle}>{item.category}</Typography>
          <CardMedia
            component="img"
            alt={item.name}
            height="136"
            image={item.image}
            sx={{
              borderRadius: "12px",
              padding: "8px 8px 4px 8px",
            }}
          />
          <CardContent>
            <Box sx={boxStyle}>
              <Typography variant="h5" component="div" sx={productNameStyle}>
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={descriptionAndLocationStyle}
              >
                {item.description}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={descriptionAndLocationStyle}
              style={{ display: "flex", alignItems: "center" }}
            >
              <LocationOnIcon color="primary" />
              {item.city}
            </Typography>
            {page !== "landing" && <ExpandMoreIcon color="primary" fontSize="large" sx={{ position: "block", marginLeft: "132px" }} />}
          </CardContent>
        </CardActionArea>
      </Card>
      <SupplierDetailModal item={item} open={open} handleClose={handleClose} />
    </>
  );
};

export default SupplierCard;
