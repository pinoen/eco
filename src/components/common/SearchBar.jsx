import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <TextField
      color='white'
      sx={{
        '& .MuiInputBase-root': {
          display: 'flex',
          gap: '16px',
          color: 'black',
          fontFamily: 'Nunito',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          width: '328px',
          height: '56px',
          alignItems: 'center',
          borderRadius: '100px',
          backgroundColor: 'white.main',
          marginBottom: '40px',
        },
      }}
      placeholder='Buscar Proveedores'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color='black' />
          </InputAdornment>
        )
      }}
    />
  )
}

export default SearchBar