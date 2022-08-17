import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import internal_api from "../services/internal";
import AuthContext from "../contexts/Auth";
import "../styles/Login.css";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const onSubmitLoginHandle = (e) => {
    e.preventDefault();

    let u = document.forms[0].email.value;
    let p = document.forms[0].password.value;

    if (p === "") {
      setErr("Password must not be empty!");
      throw new Error("Password must not be empty!");
    }

    internal_api.userExists(u).then((res) => {
      if (res) {
        auth.user = res[0];
        auth.isAdmin = false;
        auth.isLoggedIn = true;
        if (auth?.user?.role === "admin") {
          auth.isAdmin = true;
        }
        window.scroll(0, 0);
        navigate("/");
        return;
      } else {
        setErr("Invalid email, name, or password!");
        throw new Error("Invalid email, name, or password!");
      }
    });
  };

  return (
    <div className="login">
      <h1 className="err">{err}</h1>
      <form onSubmit={onSubmitLoginHandle}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
          <input
            type="button"
            value="Go Home"
            onClick={() => {
              window.scroll(0, 0);
              navigate("/");
              return;
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
