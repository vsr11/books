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

    internal_api
      .login(u, p)
      .then((res) => {
        if (typeof res == "string") {
          setErr(res);
          throw new Error(res);
        } else {
          return Promise.resolve(res);
        }
      })
      .then((res) => {
        auth.user = res.user;
        auth.isLoggedIn = true;

        if (auth?.user?.role === "admin") {
          auth.isAdmin = true;
        } else {
          auth.isAdmin = false;
        }
        window.scroll(0, 0);
        navigate("/");
        return;
      });
  };

  return (
    <div className="login">
      <form onSubmit={onSubmitLoginHandle}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" autoFocus />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="err">{err}</div>
        <div>
          <input type="submit" value="Login" />
          <input
            type="button"
            value="Exit"
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
