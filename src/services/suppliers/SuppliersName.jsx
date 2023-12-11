import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const useSuppliersNames = () => {
  const [suppliersNames, setSuppliersNames] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/allNames`)
      .then((response) => {
        setSuppliersNames(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener nombres de proveedores:", error);
      });
  }, []);

  return suppliersNames;
};

export default useSuppliersNames;
