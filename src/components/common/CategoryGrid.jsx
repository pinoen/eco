/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import CategoryBlock from "./CategoryBlock";
import vector from "../../assets/img/Vector1.png";
import getAllCategories from "../../services/categories/getAllCategories";

const CategoryGrid = ({ page }) => {
  const categories = getAllCategories();
  const gridCategoriesStyle = {
    gap: "24px 16px",
    marginBottom: "32px",
    padding: "24px 16px 20px 16px",
    justifyContent: "center",
    background: `${page === "proveedores" ? `url(${vector})` : ""}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "0px",
  };

  return (
    <Grid container spacing={3} sx={gridCategoriesStyle}>
      {categories.map((item) => (
        <CategoryBlock
          key={item.id}
          icon={item.image}
          categoryName={item.name}
          page={page}
        />
      ))}
    </Grid>
  );
};

export default CategoryGrid;
