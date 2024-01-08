import React from "react";
import logo from "../../components/images/logo.png";
import { NavLink } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>HOME</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>ABOUT US</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>SERVICES</NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>PRODUCTS</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
