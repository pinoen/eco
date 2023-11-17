import { useState } from "react";

const useAlert = () => {
  const [open, setOpen] = useState(false);
  const [alertColor, setAlertColor] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message, color) => {
    setAlertMessage(message);
    setAlertColor(color);
    setOpen(true);
  };

  const hideAlert = () => {
    setOpen(false);
  };

  return {
    open,
    alertColor,
    alertMessage,
    showAlert,
    hideAlert,
  };
};

export default useAlert;
