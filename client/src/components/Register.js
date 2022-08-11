import { USERS_HOST_URL } from "../constants";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Auth from "../contexts/Auth";

const Register = () => {
  const navigate = useNavigate();
  const auth = useContext(Auth);
  const onSubmitRegisterHandle = (e) => {
    e.preventDefault();

    let email = document.forms[0].email.value;
    let pass = document.forms[0].password.value;
    let pass2 = document.forms[0].repeatPassword.value;
    let name = document.forms[0].name.value;

    if (email === "" || pass === "" || pass2 === "" || name === "") {
      throw new Error("All fields are required!");
    }
    if (pass !== pass2) {
      throw new Error("Passwords must match!");
    }

    return fetch(USERS_HOST_URL + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password: pass, booksRead: [] }),
    })
      .then((res) => res.json())
      .then((res) => (auth.user = res[0]))
      .then(navigate("/"));
  };

  return (
    <div className="login">
      <form method="POST" onSubmit={onSubmitRegisterHandle}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">E-maij:</label>
          <input type="text" id="email" name="email" />
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
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default Register;
