
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ category, productName, providerName, location, imageUrl }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageUrl} alt={productName} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
        <Typography variant="body2">{productName}</Typography>
        <Typography variant="body2">Proveedor: {providerName}</Typography>
        <Typography variant="body2">Ubicación: {location}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;