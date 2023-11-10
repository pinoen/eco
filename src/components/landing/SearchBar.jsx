import { SearchRounded } from "@mui/icons-material"
import { Box, InputAdornment, TextField } from "@mui/material"


export const SearchBar = () => {
  return (
    <Box sx={{mt:5,mb:5, width:"90%"}}>
      <TextField
      
      id="Buscador"
      placeholder="Buscar Proveedores"
      InputProps={{
        startAdornment:(

          <InputAdornment position="start">
          <SearchRounded/>
          </InputAdornment>
        ),
        style:{
          borderRadius:"100px"
          ,backgroundColor:"white"
        },
      }}
      variant="outlined"
      fullWidth
      
      />

      
    </Box>
  )
}
