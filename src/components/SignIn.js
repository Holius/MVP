import React, { useState } from "react";
import axios from "axios";

export function SignIn(props) {
  const { setFavorites, getFavorite } = props;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        onChange={event => {
          setUser(event.target.value);
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="passsword"
        name="password"
        required
        onChange={event => {
          setPassword(event.target.value);
        }}
      />

      <input
        type="submit"
        value="Log In"
        onClick={() => {
          axios
            .post("/user/login", {
              name: user,
              password: password
            })
            .then(data => {
              console.log("logged in");
              getFavorite();
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />

      <input
        type="submit"
        value="Sign Up"
        onClick={() => {
          axios
            .post("/user/signup", {
              name: user,
              password: password
            })
            .then(data => {
              console.log("logged in", data);
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />

      <input
        type="submit"
        value="Log Out"
        onClick={() => {
          axios
            .get("/user/logout")
            .then(data => {
              console.log("logged out", data);
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />

      <input
        type="submit"
        value="Apples"
        onClick={() => {
          axios
            .get("/apples")
            .then(data => {
              console.log("Apples", data);
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />
    </div>
  );
}
