/* eslint-disable react/prop-types */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Box, Divider, Typography } from "@mui/material";
import { useStatusContext } from "../../context/StatusContext";
import { getToken } from "../../services/securityService";

const boxStyle = {
  display: "flex",
  width: "328px",
  height: "92px",
  padding: "8px 8px 8px 16px",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "8px",
  backgroundColor: "grey.main",
  marginTop: "40px",
};

const textContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "290px",
  height: "56px",
};

const titleStyle = {
  color: "primary.main",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  marginBottom: "4px",
  display: "flex",
  alignItems: "center",
};

const categoryStyle = {
  fontFamily: "Nunito",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  color: "black.main",
  marginTop: "4px",
};

const SupplierBlock = ({ id, name, category }) => {
  const { statusPage, setShowSupplier, setId } = useStatusContext();

  const handleSupplier = () => {
    setShowSupplier((pre) => !pre);
    setId(id);
  };

  return (
    <Box sx={boxStyle} onClick={handleSupplier}>
      <Box sx={textContainerStyle}>
        <Typography sx={titleStyle}>
          {statusPage !== "Nuevos Perfiles" && (
            <Brightness1Icon
              fontSize="large"
              sx={{
                color:
                  statusPage === "Aprobados"
                    ? "#1D9129"
                    : statusPage === "En revisión"
                    ? "#B86B11"
                    : statusPage === "Denegados"
                    ? "#B91C1C"
                    : "none",
                paddingRight: "10px",
              }}
            />
          )}
          {name}
        </Typography>
        <Divider
          sx={{ width: "75%", borderColor: "#00A364", borderTopWidth: "2px" }}
        />
        <Typography sx={categoryStyle}>{category}</Typography>
      </Box>

      <ArrowForwardIosIcon />
    </Box>
  );
};

export default SupplierBlock;
