import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../contexts/Auth";

const Logout = () => {
  const navigate = useNavigate();
  const auth = useContext(Auth);
  useEffect(() => {
    auth.user = undefined;
    auth.isLoggedIn = false;
    auth.isAdmin = false;
    navigate("/");
  }, []);
};

export default Logout;
