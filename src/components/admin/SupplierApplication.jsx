/* eslint-disable react/prop-types */
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";

const formStyle = {
  display: "flex",
  width: "328px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "96px 16px 70px",
  gap: "32px",
  backgroundColor: "white.main",
};

const titleTextStyle = {
  color: "primary.main",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
}

const categoryStyle = {
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  color: "black.main",
}

const SupplierApplication = ({ supplierData }) => {

  return (
    <form style={formStyle}>
      <Typography sx={titleTextStyle}>{supplierData?.name}</Typography>
      <Typography sx={categoryStyle}>{supplierData?.shortDescription}</Typography>

      <TextField
        type="text"
        name="name"
        value={supplierData?.name}
        disabled
        fullWidth
      />

      <TextField
        type="text"
        name="shortDescription"
        value={supplierData?.shortDescription}
        disabled
        fullWidth
      />

      <TextField
        name="categoryId"
        value={supplierData?.category?.name}
        disabled
        fullWidth
      />

      <TextField
        type="email"
        name="email"
        value={supplierData?.email}
        disabled
        fullWidth
      />

      <TextField
        type="tel"
        name="phone"
        value={supplierData?.phone}
        disabled
        fullWidth
      />

      <TextField
        type="text"
        name="instagram"
        value={supplierData?.instagram}
        disabled
        fullWidth
      />

      <TextField
        type="text"
        name="facebook"
        value={supplierData?.facebook}
        disabled
        fullWidth
      />

      <TextField
        name="countryId"
        value={supplierData?.country?.name}
        disabled
        fullWidth
      />

      <TextField
        name="provinceId"
        value={supplierData?.province?.name}
        disabled
        fullWidth
      />

      <TextField
        type="text*"
        name="city"
        value={supplierData?.city}
        disabled
        fullWidth
      />

      <TextField
        type="text"
        multiline
        rows={6}
        name="description"
        defaultValue={supplierData?.description}
        disabled
        fullWidth
      />

      <Box>
        {supplierData?.images?.map((image) => (
          <img src={image} alt="image" key={image} style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "16px" }} />
        ))}
      </Box>
    </form>
  );
};

export default SupplierApplication;
