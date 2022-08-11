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
    // auth.isLoggedIn = true;

    internal_api.userExists(u).then((res) => {
      if (res.length !== 0) {
        auth.user = res[0];
        auth.isLoggedIn = true;
        navigate("/");
      } else {
        setErr("Invalid email, name, or password");
      }
    });
  };

  return (
    <div className="login">
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
          <input type="reset" value="Reset" />
        </div>
      </form>
      <div className="err">{err}</div>
    </div>
  );
};

export default Login;
