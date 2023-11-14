import { Box, Typography } from '@mui/material'
import allHands from '../../assets/images/allHands.png'
import SearchBar from '../common/SearchBar'

const boxStyle = {
  background: `linear-gradient(0deg, rgba(34, 34, 34, 0.70) 0%, rgba(34, 34, 34, 0.70) 100%), url(${allHands})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '360px',
  height: '488px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  paddingLeft: '16px',
  marginBottom: '40px',
}

const h3Style = {
  color: 'white.main',
  fontFamily: 'Nunito',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '24px',
}

const pStyle = {
  color: 'white.main',
  fontFamily: 'Nunito',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '30px',
  width: '240px',
  height: '208px',
}

const Impact = () => {
  return (
    <Box sx={boxStyle}>
      <SearchBar />
      <Typography variant='h3' sx={h3Style}>RED DE IMPACTO</Typography>
      <Typography variant='p' sx={pStyle}>Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente</Typography>
    </Box>
  )
}

export default Impact