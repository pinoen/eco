import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import { getToken } from "../securityService";

const getPublicationsStatistics = () => {
  const [publicationsStatistics, setPublicationsStatistics] = useState([]);
  const token = getToken();

  useEffect(() => {
    axios
      .get(`${apiUrl}/publication/statistics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPublicationsStatistics(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener estadisticas de publicaciones", error);
      });
  }, []);

  return publicationsStatistics;
};

export default getPublicationsStatistics;
