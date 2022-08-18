import { USERS_HOST_URL } from "../constants";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmitRegisterHandle = async (e) => {
    e.preventDefault();

    let email = document.forms[0].email.value;
    let pass = document.forms[0].password.value;
    let pass2 = document.forms[0].repeatPassword.value;
    let name = document.forms[0].name.value;

    if (name === "") {
      setErr("Name required");
      throw new Error("Name required");
    }

    if (pass !== pass2) {
      setErr("Passwords must match");
      throw new Error("Passwords must match");
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
        if (typeof res == "string") {
          setErr(res);
          throw new Error(res);
        } else {
          return Promise.resolve(res);
        }
      })
      .then((res) => {
        window.scroll(0, 0);
        navigate("/login");
        return;
      });
  };

  return (
    <div className="login">
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
        <div className="err">{err}</div>
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
