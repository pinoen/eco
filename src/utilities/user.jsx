import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getToken, cleanToken } from "./securityService";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const [user, setUser] = useState(false);
  const token = getToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    }
  }, [token]);

  const handleLogout = () => {
    googleLogout();
    cleanToken();
    setUser(false);
    navigate("/");
  };

  return { token, user, handleLogout };
};

export default useAuth;
