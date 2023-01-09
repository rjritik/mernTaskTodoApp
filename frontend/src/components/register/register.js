import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword, phoneNumber } = user;
    var regEx = /^[0-9a-zA-Z]+$/;
    if (
      password.length < 8 ||
      phoneNumber.length != 10 ||
      !password.match(regEx)
    ) {
      if (password.length < 8) {
        alert("password length must be 8 or more digit");
      }
      if (!password.match(regEx)) {
        alert("Special character Not allowed");
      }
      if (phoneNumber.length != 10) {
        alert("phone number should be of 10 digit ");
      }
    } else {
      if (
        name &&
        email &&
        password &&
        phoneNumber &&
        password === reEnterPassword
      ) {
        axios.post("http://localhost:9002/register", user).then((res) => {
          history.push("/login");
        });
      } else {
        alert("invlid input");
      }
    }
  };

  return (
    <div className="App">
      <div className="register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          placeholder="Your Phone Number"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Register;
