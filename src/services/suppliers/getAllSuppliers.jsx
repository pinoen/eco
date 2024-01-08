import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import { getToken } from "../securityService";
import { useStatusContext } from "../../context/StatusContext";

const getAllSuppliers = () => {
  const [allSuppliers, setAllSuppliers] = useState([]);
  const { reload } = useStatusContext();
  const token = getToken();

  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllSuppliers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener todos los proveedores:", error);
      });
  }, [reload]);

  return allSuppliers;
};

export default getAllSuppliers;
