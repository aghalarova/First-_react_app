import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import HeaderImg from "../../components/images/loder.jpg";

import "./index.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header">
            <div className="header-left">
              <FaRegClock className="header-icon-clock" />
              <p>MON - SAT: 6.00 AM - 10.00 PM</p>
              <p>SUN: CLOSED</p>
            </div>
            <div className="header-right">
              <FaFacebookF className="icon" />
              <FaTwitter className="icon" />
              <FaLinkedinIn className="icon" />
              <FaGooglePlusG className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header">
            <img src={HeaderImg} alt="" />
            <nav>
              <ul>
                <li>
                  {/* <NavLink to={"/"}>Home</NavLink> */}
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
