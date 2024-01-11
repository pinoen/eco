/* eslint-disable react/prop-types */
import { useStatusContext } from "../../context/StatusContext";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Box, Typography } from "@mui/material";
import DropDownStatus from "./DropDownStatus";
import Feedback from "./Feedback";
import getSupplierById from "../../services/suppliers/getSupplierById";
import SupplierApplication from "./SupplierApplication";

const statusStyle = {
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  textAlign: "center",
  color: "black.main",
};

const NewProfiles = () => {
  const { status, id } = useStatusContext();
  const supplierData = getSupplierById(id).data

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
        {supplierData?.status !== "REVISION_INICIAL" && (
          <>
            <Brightness1Icon
              fontSize="large"
              sx={{
                color:
                  supplierData?.status === "ACEPTADO"
                    ? "#1D9129"
                    : supplierData?.status === "REQUIERE_CAMBIOS"
                      ? "#B86B11"
                      : "#B91C1C",
                paddingRight: "10px",
              }}
            />
            <Typography sx={statusStyle}>{supplierData?.status === "ACEPTADO" ? "Aprobado" : supplierData?.status === "REQUIERE_CAMBIOS" ? "En revisión" : "Denegado"}</Typography>
          </>
        )}
      </Box>

      <DropDownStatus />
      {status.value === "DENEGADO" || status.value === "REQUIERE_CAMBIOS" ? (
        <Feedback />
      ) : null}
      <SupplierApplication supplierData={supplierData} />
    </>
  );
};

export default NewProfiles;
