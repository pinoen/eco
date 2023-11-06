import { Box, Typography } from '@mui/material'

const h3Style = {
  color: '#4E169D',
  fontSize: '22px',
  fontFamily: 'Nunito',
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '25px',
  padding: '8px 32px',
}


const pStyle = {
  color: '#222',
  fontSize: '16px',
  fontFamily: 'Nunito',
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '20px',
}

const boxStyle = {
  backgroundColor: '#fafafa',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 16px',
  gap: '8px',
  borderTop: '1px solid #4E169D',
  borderBottom: '1px solid #4E169D',
  width: '327px',
  height: '192px',
}
const CompanyImpact = () => {
  return (
    <Box sx={boxStyle}>
      <Typography variant='h3' sx={h3Style}>¿Qué son las empresas de impacto?</Typography>
      <Typography variant='p' sx={pStyle}>Son organizaciones con un compromiso fundamental con la generación de un impacto positivo en la sociedad y el medio ambiente como parte integral de su modelo de negocio.</Typography>
    </Box>
  )
}

export default CompanyImpact