/* eslint-disable react/prop-types */
import { useStatusContext } from "../../context/StatusContext";
import Brightness1Icon from "@mui/icons-material/Brightness1";
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
};

const NewProfiles = ({ showSupplier }) => {
  const { status } = useStatusContext();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "24px",
          paddingTop: "24px",
        }}
      >
        {status.value !== "" && (
          <>
            <Brightness1Icon
              fontSize="large"
              sx={{
                color:
                  status.value === "ACEPTADO"
                    ? "#1D9129"
                    : status.value === "REQUIERE_CAMBIOS"
                    ? "#B86B11"
                    : "#B91C1C",
                paddingRight: "10px",
              }}
            />
            <Typography sx={statusStyle}>{status.label}</Typography>
          </>
        )}
      </Box>

      <DropDownStatus />
      {status.value === "DENEGADO" || status.value === "REQUIERE_CAMBIOS" ? (
        <Feedback />
      ) : null}
      <AddProduct showSupplier={showSupplier} />
    </>
  );
};

export default NewProfiles;
