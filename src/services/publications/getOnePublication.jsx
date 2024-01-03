import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getOnePublication = (id) => {
  const [onePublication, setOnePublication] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/publication/${id}`)
      .then((response) => {
        setOnePublication(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener una publicaciones:", error);
      });
  }, [id]);

  return onePublication;
};

export default getOnePublication;
