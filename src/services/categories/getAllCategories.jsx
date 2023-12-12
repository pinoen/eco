import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getAllCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/categories`)
      .then((response) => {
        setAllCategories(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener categorias:", error);
      });
  }, []);

  return allCategories;
};

export default getAllCategories;
