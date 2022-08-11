import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAME } from "../constants";
import "../styles/Header.css";
import Auth from "../contexts/Auth";

function Header() {
  let auth = useContext(Auth);

  return (
    <header id="header">
      <div className="bigheader">{NAME}</div>
      <nav>
        <ul>
          <ul className="left">
            <li>
              <Link to="/">
                <div>BOOKS</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div>
                  <i className="fa-solid fa-grip"></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/list">
                <div>
                  <i className="fa-solid fa-grip-vertical"></i>
                </div>
              </Link>
            </li>
          </ul>
          {auth?.user ? <NavLink to="/mybooks">My books</NavLink> : ""}
          <ul>
            {auth?.user ? (
              <ul>
                <li>Welcome, {auth?.user?.name}!</li>
                <li>
                  <Link to="/logout">
                    <div>Logout</div>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">
                    <div>Login</div>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <div>Register</div>
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
