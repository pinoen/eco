/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CTAButton = ({ route, children, icon }) => {
  const buttonStyle = {
    width: 'auto',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    paddingBottom: icon ? '4px' : '48px',
    gap: '8px',
    width: 'auto',
  }
  return (
    <Box sx={boxStyle}>
      <Link to={route}><Button startIcon={icon} sx={buttonStyle}>{children}</Button></Link>
    </Box>
  )
}

CTAButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CTAButton