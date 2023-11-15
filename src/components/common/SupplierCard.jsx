/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const productNameStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '25px',
};

const descriptionAndLocationStyle = {
  color: 'black.main',
  fontFamily: 'Nunito',
  fontSize: '13px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '18px',
}

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '2px',
  width: '134px',
  height: '48px',
  padding: '4px 10px 16px 0px',
  marginBottom: '16px',
}


const SupplierCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 152 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.name}
          height="136"
          image={item.image}
          sx={{
            borderRadius: '12px',
            padding: '8px 8px 4px 8px',
          }}
        />
        <CardContent>
          <Box sx={boxStyle}>
            <Typography variant="h5" component="div" sx={productNameStyle}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={descriptionAndLocationStyle}>
              {item.description}
            </Typography>
          </Box>

          <Typography variant="body2" sx={descriptionAndLocationStyle} style={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon color='primary' />{item.city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SupplierCard