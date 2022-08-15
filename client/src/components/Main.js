import { useContext } from "react";
import { Outlet } from "react-router-dom";
import "../styles/Main.css";
import Auth from "../contexts/Auth";
import Aside from "./Aside";

const Main = () => {
  let auth = useContext(Auth);
  return (
    <div id="site">
      {auth?.user?.user?.email}
      <Aside />
      <Outlet />
    </div>
  );
};
export default Main;
