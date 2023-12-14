import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getAllProvinces = () => {
  const [allProvinces, setAllProvinces] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/provinces`)
      .then((response) => {
        setAllProvinces(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener provincias:", error);
      });
  }, []);

  return allProvinces;
};

export default getAllProvinces;
