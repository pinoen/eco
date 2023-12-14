import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getAllPublications = () => {
  const [allPublications, setAllPublications] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/publication/all-active`)
      .then((response) => {
        setAllPublications(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener publicaciones:", error);
      });
  }, []);

  return allPublications;
};

export default getAllPublications;
