import { USERS_HOST_URL } from "../constants";

const Login = () => {
  const onSubmitLoginHandle = (e) => {
    e.preventDefault();

    let u = document.forms[0].username.value;
    let p = document.forms[0].password.value;

    if (u !== "" && p !== "") {
      return fetch(USERS_HOST_URL + "/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: u, password: p }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  return (
    <form method="POST" onSubmit={onSubmitLoginHandle}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" value="Login!" />
      <input type="reset" value="Reset!" />
    </form>
  );
};

export default Login;
