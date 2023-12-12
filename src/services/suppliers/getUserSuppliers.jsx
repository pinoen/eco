import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";
import useAuth from "../../utilities/user";
import { getToken } from "../securityService";

const getUserSuppliers = () => {
  const [userSuppliers, setUserSuppliers] = useState([]);
  const { user } = useAuth();
  const token = getToken();

  useEffect(() => {
    if (user && user.id) {
      // Verificar que user tenga un valor y un id válido
      axios
        .get(`${apiUrl}/suppliers/me/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserSuppliers(response.data);
        })
        .catch((error) => {
          console.error(
            "Error al obtener proveedores de usuario: ",
            user.name,
            error
          );
        });
    }
  }, [user, token]);

  return userSuppliers;
};

export default getUserSuppliers;