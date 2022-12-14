import { useContext } from "react";
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
              <Link to="?view=list">
                <div>
                  <i className="fa-solid fa-grip-vertical"></i>
                </div>
              </Link>
            </li>
          </ul>
          <div className="user-items">
            {auth?.user ? <NavLink to="/mybooks">My books</NavLink> : ""}
            {auth?.user ? <NavLink to="/myvotelist">My votes</NavLink> : ""}
            {auth?.user ? <NavLink to="/myreviewlist">My review </NavLink> : ""}
          </div>
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
      {auth?.isAdmin ? (
        <div className="admin">
          <NavLink to="/add">Add Book</NavLink>
          <NavLink to="/edit">Edit/Delete Book</NavLink>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
export default Header;
