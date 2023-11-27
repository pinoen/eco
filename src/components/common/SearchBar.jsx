/* eslint-disable react/prop-types */
import { SearchRounded } from "@mui/icons-material"
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material"
import useSuppliers from "../../utilities/suppliers"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const boxStyle = {
  mt: 5,
  mb: 5,
  width: 328,
  height: 56,
  color: "black.main",
}
export const SearchBar = ({ querySearch }) => {
  const suppliers = useSuppliers()
  const suppliersList = suppliers.map((item) => item.name)
  const navigate = useNavigate()

  const [value, setValue] = useState(querySearch || null)
  const [inputValue, setInputValue] = useState("")

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
            navigate(`/search/${inputValue}`)
          }
        }}

        disablePortal
        options={suppliersList}
        renderInput={(params) => <TextField
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
              backgroundColor: "white"
            },
          }}
          variant="outlined"
          fullWidth
        />}
      />
    </Box>
  )
}
