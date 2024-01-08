import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import { getToken } from "../securityService";

const getUsersStatistics = () => {
  const token = getToken();
  const [userStatistics, setUserStatistics] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/users/user-statistics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserStatistics(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener estadisticas de usuarios", error);
      });
  }, []);

  return userStatistics;
};

export default getUsersStatistics;
