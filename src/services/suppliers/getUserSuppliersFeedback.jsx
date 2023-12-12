import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import useAuth from "../../utilities/user";
import { getToken } from "../securityService";

const getUserSuppliersFeedback = () => {
  const [userSuppliersFeedback, setUserSuppliersFeedback] = useState([]);
  const { user } = useAuth();
  const { token } = getToken();
  useEffect(() => {
    axios
      .get(`${apiUrl}/suppliers/me/feedback/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserSuppliersFeedback(response.data);
      })
      .catch((error) => {
        console.error(
          "Error al obtener provedores de usuario: ",
          user.name,
          error
        );
      });
  }, [user]);

  return userSuppliersFeedback;
};

export default getUserSuppliersFeedback;
