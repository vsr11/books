import internal from "../services/internal";
import { USERS_HOST_URL } from "../constants";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Auth from "../contexts/Auth";

const Register = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const auth = useContext(Auth);
  const onSubmitRegisterHandle = async (e) => {
    e.preventDefault();

    let email = document.forms[0].email.value;
    let pass = document.forms[0].password.value;
    let pass2 = document.forms[0].repeatPassword.value;
    let name = document.forms[0].name.value;

    if (email === "" || pass === "" || pass2 === "" || name === "") {
      setErr("All fields are required!");
      throw new Error("All fields are required!");
    }
    if (pass !== pass2) {
      setErr("Passwords must match!");
      throw new Error("Passwords must match!");
    }

    if (pass.length < 5) {
      setErr("Password must be longer than 4 characters!");
      throw new Error("Password must be longer than 4 characters!");
    }

    let ue = await internal.userExists(email);
    if (ue) {
      setErr("Email in use!");
      throw new Error("Email in use!");
    }

    return fetch(USERS_HOST_URL + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        password: pass,
        booksRead: [],
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        auth.user = res[0];
        window.scroll(0, 0);
        navigate("/login");
        return;
      });
  };

  return (
    <div className="login">
      <h1 className="err">{err}</h1>
      <form method="POST" onSubmit={onSubmitRegisterHandle}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="repeat-password">Repeat Password:</label>
          <input type="password" id="repeat-password" name="repeatPassword" />
        </div>
        <div>
          <input type="submit" value="Register" />
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

export default Register;
