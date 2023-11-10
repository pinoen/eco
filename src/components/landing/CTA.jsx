import { Typography } from '@mui/material'

const h2Style = {
  color: 'black.main',
  textAlign: 'center',
  fontFamily: 'Nunito',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '27px',
  backgroundColor: 'white.main',
  width: '327px',
  height: '80px',
  padding: '45px 16px 16px 16px',
}

const CTA = () => {
  return (
    <Typography variant='h2' sx={h2Style}>¿Querés formar parte de la
      Red de impacto ECO como Proveedor?</Typography>
  )
}

export default CTA