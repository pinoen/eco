/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'
import SupplierCard from './SupplierCard'
import vector from "../../assets/img/Vector1.png";

const gridCardsStyle = {
  background: `url(${vector})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "24px 17px 8px 17px",
  marginBottom: '40px'
};

const CardsGrid = ({ suppliers, page }) => {
  return (
    <Grid container spacing={3} sx={gridCardsStyle}>
      {suppliers.slice(0, 4).map((item) => (
        <Grid item xs={page === 'landing' ? 6 : 12} sm={3} key={item.id}>
          <SupplierCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardsGrid