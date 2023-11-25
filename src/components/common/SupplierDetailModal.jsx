/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardContent, CardMedia, IconButton } from '@mui/material';
import theme from '../../theme/theme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '16px',
  backgroundColor: 'grey.main',
  width: '328px',
  height: '584px',
  padding: '8px',
};

const productNameStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '25px',
};

const descriptionStyle = {
  color: 'primary.main',
  fontFamily: 'Nunito',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '18px',
}

const locationStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px',
  paddingBottom: '32px',
}

const cardBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '2px',
  width: '134px',
  height: '48px',
  padding: '4px 10px 16px 0px',
}

const categoryStyle = {
  borderRadius: '4px',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: 'white.main',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  width: '96px',
  height: '24px',
  padding: '4px 8px',
  color: theme.palette.primary.main,
  fontFamily: 'Nunito',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '18px',
  textAlign: 'center',
  position: 'absolute',
  top: 47,
  right: 16,
}

const closeIconStyle = {
  position: 'absolute',
  top: 6,
  right: 12,
}

const fullDescriptionStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px',
  textAlign: 'center',
  width: '304px',
  paddingBottom: '24px',
}

const contactStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '25px',
  textAlign: 'center',
  width: '91px',
  height: '24px',
}

const socialMediaStyle = {
  display: 'flex',
  justifyContent: "space-around",
}

const socialMediaIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const socialMediaNameStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '18px',
}
const SupplierDetailModal = ({ item, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={boxStyle}>
        <IconButton onClick={handleClose} sx={closeIconStyle}><CloseIcon /></IconButton>
        <Typography sx={categoryStyle}>
          {item.category}
        </Typography>
        <CardMedia
          component="img"
          alt={item.name}
          height="128"
          image={item.images[0]}
          sx={{
            borderRadius: '16px',
            padding: '24px 8px 8px 8px',
          }}
        />
        <CardContent>
          <Box sx={cardBoxStyle}>
            <Typography variant="h5" component="div" sx={productNameStyle}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={descriptionStyle}>
              {item.description}
            </Typography>
          </Box>

          <Typography variant="body2" sx={locationStyle} style={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon color='primary' />{item.city}, {item.state}, {item.country}
          </Typography>

          <Typography variant="body2" sx={fullDescriptionStyle}>
            {item.fullDescription}
          </Typography>

          <Typography sx={contactStyle}>Contactanos</Typography>
          <Box sx={socialMediaStyle}>
            <Box sx={socialMediaIconStyle}>
              <IconButton onClick={() => window.open(`https://wa.me/${item.phone}`)}><WhatsAppIcon color='primary' /></IconButton>
              <Typography sx={socialMediaNameStyle}>WhatsApp</Typography>
            </Box>
            <Box sx={socialMediaIconStyle}>
              <IconButton onClick={() => window.open(`https://www.instagram.com/${item.instagram}`)}><InstagramIcon color='primary' /></IconButton>
              <Typography sx={socialMediaNameStyle}>Instagram</Typography>
            </Box>
            <Box sx={socialMediaIconStyle}>
              <IconButton onClick={() => window.open(`https://www.facebook.com/${item.facebook}`)}><FacebookIcon color='primary' /></IconButton>
              <Typography sx={socialMediaNameStyle}>Facebook</Typography>
            </Box>
            <Box sx={socialMediaIconStyle}>
              <IconButton onClick={() => window.open(`mailto:${item.email}`)}><EmailIcon color='primary' /></IconButton>
              <Typography sx={socialMediaNameStyle}>Email</Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Modal>
  );
}

export default SupplierDetailModal