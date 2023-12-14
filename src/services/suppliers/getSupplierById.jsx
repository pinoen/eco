import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getSupplierById = (id) => {
  const [supplierById, setSupplierbyId] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/${id}`)
      .then((response) => {
        setSupplierbyId(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener proveedore por id: ", error);
      });
  }, []);

  return supplierById;
};

export default getSupplierById;
