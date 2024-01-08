import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import { getToken } from "../securityService";

const getAllPublicationsAdmin = () => {
  const [allPublicationsAdmin, setAllPublicationsAdmin] = useState([]);
  const token = getToken();

  useEffect(() => {
    axios
      .get(`${apiUrl}/publication/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllPublicationsAdmin(response.data);
      })
      .catch((error) => {
        console.error(
          "Error al obtener publicaciones de Administrador:",
          error
        );
      });
  }, []);

  return allPublicationsAdmin;
};

export default getAllPublicationsAdmin;
