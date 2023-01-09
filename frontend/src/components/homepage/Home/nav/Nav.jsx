import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { useHistory } from "react-router-dom";

const Navbar = ({ setLoginUser, user }) => {
  const history = useHistory();
  const logOutFunction = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <>
      <div className="Navbar">
        <h1 className="navTitle">TODO App </h1>
        <div className="btns">
          <NavLink to='/' className="homebtn">Home</NavLink>
          {/* <NavLink to='/login' className="loginbtn">LogIn/Register</NavLink> */}
          <NavLink to="/posts" className="loginbtn">
            Create Todo's
          </NavLink>
          <NavLink to="/FAQ" className="loginbtn">
            FAQ
          </NavLink>
          {/* <div className="homebtn" onClick={() => history.push('/login')} >Logout</div> */}
          <div className="homebtn" onClick={logOutFunction}>
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
