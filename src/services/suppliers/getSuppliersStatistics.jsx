import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import { getToken } from "../securityService";

const getSuppliersStatistics = () => {
  const [supplierStatistics, setSupplierStatistics] = useState([]);
  const token = getToken();

  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/statistics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSupplierStatistics(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener estadisticas de proveedores", error);
      });
  }, []);

  return supplierStatistics;
};

export default getSuppliersStatistics;
