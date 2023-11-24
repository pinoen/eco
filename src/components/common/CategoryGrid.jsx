/* eslint-disable react/prop-types */
import { Grid } from "@mui/material"
import CategoryBlock from "./CategoryBlock"
import vector from "../../assets/img/Vector1.png";

const CategoryGrid = ({ suppliers, page }) => {

  const gridCategoriesStyle = {
    gap: "24px",
    marginBottom: '40px',
    padding: "24px 16px 32px 16px",
    justifyContent: "center",
    background: `${page === 'proveedores' ? `url(${vector})` : ''}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <Grid container spacing={3} sx={gridCategoriesStyle}>
      {suppliers.map((item) => (
        <CategoryBlock key={item.id} icon={item.categoryIcon} categoryName={item.category} page={page} />
      ))}
    </Grid>
  )
}

export default CategoryGrid