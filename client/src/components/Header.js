import { Link } from "react-router-dom";
import { NAME } from "../constants";
import "../styles/Header.css";

function Header() {
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
          <ul>
            <li>
              <Link to="/">
                <div>Login</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div>Register</div>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
