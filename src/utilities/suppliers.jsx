import { useState, useEffect } from "react";
import { getSuppliers } from "../services/api";

const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((data) => {
      setSuppliers(data);
    });
  }, []);

  return suppliers;
};

export default useSuppliers;
