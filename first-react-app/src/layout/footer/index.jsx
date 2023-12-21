import React from "react";
import "./index.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-top">
              <p>
                <FaLocationDot />
                Passages of Lorem Ipsum availabla
              </p>
              <p>
                <IoCall />
                Call: +0987654321
              </p>
              <p>
                <MdEmail />
                demo@gmail.com
              </p>
            </div>
            <div className="footer-bottom">
              <input
                type="input"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
              <button>SUBSCRIBE</button>
              <div className="icons">
                <FaFacebookF  className="icon"/>
                <FaTwitter  className="icon"/>
                <FaLinkedinIn  className="icon"/>
                <FaInstagram  className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
