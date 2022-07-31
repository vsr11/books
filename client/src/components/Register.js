import { USERS_HOST_URL } from "../constants";

const Register = () => {
  const onSubmitRegisterHandle = (e) => {
    console.log("reg");
    e.preventDefault();

    let u = document.forms[0].username.value;
    let p = document.forms[0].password.value;
    let p2 = document.forms[0].repeatPassword.value;

    if (u === "" || p === "" || p2 === "") {
      throw new Error("All fields are required!");
    }
    if (p !== p2) {
      throw new Error("Passwords must match!");
    }

    return fetch(USERS_HOST_URL + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: u, password: p }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <form method="POST" onSubmit={onSubmitRegisterHandle}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="repeat-password">Repeat Password:</label>
      <input type="password" id="repeat-password" name="repeatPassword" />
      <input type="submit" value="Register!" />
      <input type="reset" value="Reset!" />
    </form>
  );
};

export default Register;
