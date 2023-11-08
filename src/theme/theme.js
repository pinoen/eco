import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4E169D',
    },
    secondary: {
      main: '#00A364',
    },
    white: {
      main: '#FAFAFA',
    },
    black: {
      main: '#222222',
    },
    grey: {
      main: '#EAEAEA',
    }
  },
  typography: {
    titulos: {
      fontSize: '1.75rem',
      fontWeight: 700,
      // ... otros estilos que quieras agregar
    },
    subtitulos: {
      fontSize: '1.25rem',
      fontWeight: 500,
      // ... otros estilos que quieras agregar
    },
    parrafos: {
      fontSize: '0.75rem',
      fontWeight: 300,
      // ... otros estilos que quieras agregar
    },
    parrafosColor: {
      fontSize: '0.75rem',
      fontWeight: 300,
      backgroundColor: '#C2C2C2'
      // ... otros estilos que quieras agregar
    },
  },
  shape: {
    borderRadius: 4,  // Valor por defecto
    borderRadiusSmall: 2,
    borderRadiusMedium: 8,
    borderRadiusLarge: 16,
  },
  // Podes agregar más configuraciones del tema aca cuando necesites
});

export default theme;