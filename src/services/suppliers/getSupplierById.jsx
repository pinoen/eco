import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getSupplierById = (id) => {
  const [supplierById, setSupplierbyId] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`${apiUrl}/suppliers/${id}`)
        .then((response) => {
          setSupplierbyId({
            data: response.data,
            loading: false,
            error: null,
          });
        })
        .catch((error) => {
          console.error("Error al obtener proveedore por id: ", error);
          setSupplierbyId({
            data: null,
            loading: false,
            error: error.message || "Error fetching data",
          });
        });
    }
  }, [id]);

  return supplierById;
};

export default getSupplierById;
