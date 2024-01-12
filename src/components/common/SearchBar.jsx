/* eslint-disable react/prop-types */
import { SearchRounded } from "@mui/icons-material";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSuppliersNames from "../../services/suppliers/SuppliersName";

const boxStyle = {
  mt: 5,
  mb: 5,
  // width of 328px for mobile and 560px for desktop
  width: { xs: 328, md: 560 },
  height: 56,
  color: "black.main",
};
export const SearchBar = ({ querySearch }) => {
  const suppliersNames = useSuppliersNames();

  const navigate = useNavigate();

  const [value, setValue] = useState(querySearch || null);
  const [inputValue, setInputValue] = useState("");

  return (
    <Box sx={boxStyle}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            navigate(`/search/${inputValue}`);
          }
        }}
        disablePortal
        options={suppliersNames.map((supplier) => supplier.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Buscar Proveedores"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded />
                </InputAdornment>
              ),
              style: {
                borderRadius: "100px",
                backgroundColor: "white",
              },
            }}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </Box>
  );
};
