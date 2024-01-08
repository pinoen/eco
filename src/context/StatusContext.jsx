/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState({ label: "", value: "" });
  const [statusPage, setStatusPage] = useState("Nuevos Perfiles");
  const [showSupplier, setShowSupplier] = useState(false);
  const [id, setId] = useState(0);
  const [reload, setReload] = useState(false);

  return (
    <StatusContext.Provider
      value={{
        status,
        setStatus,
        statusPage,
        setStatusPage,
        showSupplier,
        setShowSupplier,
        id,
        setId,
        reload,
        setReload,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

const useStatusContext = () => {
  return useContext(StatusContext);
};

export { StatusContext, StatusProvider, useStatusContext };
