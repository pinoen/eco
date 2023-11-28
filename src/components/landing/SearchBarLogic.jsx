import { useState, useEffect } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import ProductCard from './ProductCard';
import axios from 'axios';
import { SearchRounded } from '@mui/icons-material';

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la solicitud a tu API con Axios cuando el término de búsqueda cambie
        const response = await axios.get(`https://api.tu-api.com/buscar?query=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error al realizar la búsqueda:', error);
        setSearchResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box>
      <Box sx={{ mt: 5, mb: 5, width: 328, height: 56, color: '#222' }}>
        <TextField
          id="Buscador"
          placeholder="Buscar Proveedores"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* Agrega el ícono de búsqueda */}
                <SearchRounded/>
              </InputAdornment>
            ),
            style: {
              borderRadius: '100px',
              backgroundColor: 'white',
            },
          }}
          variant="outlined"
          fullWidth
          // Actualiza el término de búsqueda cuando cambia
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Renderizar tarjetas basadas en los resultados de la búsqueda */}
      {searchResults.map((result) => (
        <ProductCard
          key={result.id}
          category={result.category}
          productName={result.name}
          providerName={result.providerName}
          location={result.location}
          imageUrl={result.imageUrl}
        />
      ))}
    </Box>
  );
};

export default SearchContainer;