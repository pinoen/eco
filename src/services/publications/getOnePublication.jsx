import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../constants";

const getOnePublication = (id) => {
  const [onePublication, setOnePublication] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`${apiUrl}/publication/${id}`)
        .then((response) => {
          setOnePublication({
            data: response.data,
            loading: false,
            error: null,
          });
        })
        .catch((error) => {
          setOnePublication({
            data: null,
            loading: false,
            error: error.message || "Error fetching data",
          });
        });
    }
  }, [id]);

  return onePublication;
};

export default getOnePublication;
