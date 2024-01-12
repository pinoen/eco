import { Box, Divider, Typography } from "@mui/material";
import StatusBar from "./StatusBar";
import { useStatusContext } from "../../context/StatusContext";
import NewProfiles from "./NewProfiles";
import SupplierBlock from "./SupplierBlock";
import getAllSuppliers from "../../services/suppliers/getAllSuppliers";

const titleStyle = {
  fontFamily: "Nunito",
  fontSize: { xs: "28px", md: "32px" },
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "35px",
  textAlign: "center",
  color: "black.main",
  paddingTop: "40px",
};

const Suppliers = () => {
  const { statusPage, showSupplier } = useStatusContext();
  const suppliers = getAllSuppliers();
  const boxStyle = {
    py: 5,
    backgroundColor: "white.main",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: { xs: "360px", md: "100vw" },
    height: showSupplier ? "100%" : "200vh",
  };

  return (
    <Box sx={boxStyle}>
      <Typography sx={titleStyle}>Proveedores</Typography>

      <StatusBar />

      <Divider
        sx={{ width: "100%", borderColor: "#4E169D", borderTopWidth: "1px" }}
      />

      {statusPage === "Nuevos Perfiles" &&
        showSupplier === false &&
        suppliers?.newSuppliers?.map((supplier) => (
          <SupplierBlock
            key={supplier.id}
            name={supplier.name}
            category={supplier.category}
            id={supplier.id}
          />
        ))}
      {showSupplier && <NewProfiles showSupplier={showSupplier} />}
      {statusPage === "Aprobados" &&
        showSupplier === false &&
        suppliers?.approvedSuppliers?.map((supplier) => (
          <SupplierBlock
            key={supplier.id}
            name={supplier.name}
            category={supplier.category}
            id={supplier.id}
          />
        ))}
      {statusPage === "En revisión" &&
        showSupplier === false &&
        suppliers?.reviewSuppliers?.map((supplier) => (
          <SupplierBlock
            key={supplier.id}
            name={supplier.name}
            category={supplier.category}
            id={supplier.id}
          />
        ))}
      {statusPage === "Denegados" &&
        showSupplier === false &&
        suppliers?.deniedSuppliers?.map((supplier) => (
          <SupplierBlock
            key={supplier.id}
            name={supplier.name}
            category={supplier.category}
            id={supplier.id}
          />
        ))}
    </Box>
  );
};

export default Suppliers;
