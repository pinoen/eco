import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getAceptedSuppliers = () => {
  const [aceptedSuppliers, setAceptedSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/allAccepted`)
      .then((response) => {
        setAceptedSuppliers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener proveedores aceptados:", error);
      });
  }, []);

  return aceptedSuppliers;
};

export default getAceptedSuppliers;
