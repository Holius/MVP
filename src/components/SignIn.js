import React, { useState } from "react";
import axios from "axios";

export function SignIn(props) {
  const { setFavorites, getFavorite } = props;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  if (!logged) {
    return (
      <div className="logged">
        <div>
          <input
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            required
            onChange={event => {
              setUser(event.target.value);
            }}
          />

          <input
            type="submit"
            value=" Log In "
            onClick={() => {
              axios
                .post("/user/login", {
                  name: user,
                  password: password
                })
                .then(data => {
                  console.log("logged in");
                  getFavorite();
                  setLogged(true);
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          />
        </div>
        <div>
          <input
            placeholder="Password"
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
            value="Sign Up"
            onClick={() => {
              axios
                .post("/user/signup", {
                  name: user,
                  password: password
                })
                .then(data => {
                  console.log("logged in", data);
                  setLogged(true);
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <input
        className="logged"
        type="submit"
        value="Log Out"
        onClick={() => {
          axios
            .get("/user/logout")
            .then(data => {
              console.log("logged out", data);
              setLogged(false);
              setFavorites([]);
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />
    );
  }
}
