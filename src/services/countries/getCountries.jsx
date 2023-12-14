import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getAllCountries = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/countries`)
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener ciudades:", error);
      });
  }, []);

  return allCountries;
};

export default getAllCountries;
