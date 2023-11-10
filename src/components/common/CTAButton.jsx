import { Box, Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const buttonStyle = {
  width: '152px',
  height: '40px',
  padding: '10px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '100px',
  backgroundColor: 'primary.main',
  color: 'white.main',
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '20px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: '#6100EA',
  },
}

const boxStyle = {
  backgroundColor: 'white.main',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  paddingBottom: '48px',
  gap: '8px',
  width: '327px',
}

const CTAButton = ({ children }) => {
  return (
    <Box sx={boxStyle}>
      <Link to="/register"><Button sx={buttonStyle}>{children}</Button></Link>
    </Box>
  )
}

CTAButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CTAButton