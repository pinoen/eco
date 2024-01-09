import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getSuppliersByLocation = (latitude, longitude, locationExists) => {
  const [locationSuppliers, setLocationSuppliers] = useState([]);

  useEffect(() => {
    if (locationExists) {
      axios
        .get(
          `${apiUrl}/suppliers/searchByLocation?lat=${latitude}&lng=${longitude}`
        )
        .then((response) => {
          setLocationSuppliers(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener proveedores cercanos:", error);
        });
    }
  }, [locationExists]);

  return locationSuppliers;
};

export default getSuppliersByLocation;
