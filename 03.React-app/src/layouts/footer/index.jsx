import React from "react";
import "./index.css";
import FooterImage from "../../components/images/logo2_footer.png";
import FooterInput from "../../input";
import FooterButton from "../../components/button";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-text">
              <img src={FooterImage} alt="" />
              <p>Receive updates and latest news direct from Simply enter.</p>
              <p>+564 7885 3222</p>
              <p>youremail@gmail.com</p>
            </div>
            <div className="footer-location">
              <div className="location">
                <h2>LOCATION</h2>
                <nav>
                  <ul>
                    <li>
                      <a href="">Advanced</a>
                    </li>
                    <li>
                      <a href="">Management</a>
                    </li>
                    <li>
                      <a href="">Corporate</a>
                    </li>
                    <li>
                      <a href="">Customer</a>
                    </li>
                    <li>
                      <a href="">Information</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="location">
                <h2>EXPLORE</h2>
                <nav>
                  <ul>
                    <li>
                      <a href="">Cookies</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Proparties</a>
                    </li>
                    <li>
                      <a href="">Licenses</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="location">
                <h2>LOCATION</h2>
                <nav>
                  <ul>
                    <li>
                      <a href="">Subscribe now to get daily updates</a>
                    </li>
                  </ul>
                </nav>
                <div>
                  <FooterInput />
                  <FooterButton text={"SIGN UP"}/>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>
                Copyright ©2023 All rights reserved | This template is made with
                <span>
                  <FaHeart className="footer-btm-heart" />
                </span>
                by <a href="#">Colorlib</a>
              </p>
            </div>
            <div className="footer-bottom-right">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaGlobe />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
