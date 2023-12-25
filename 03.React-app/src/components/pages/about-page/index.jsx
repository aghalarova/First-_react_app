import React from "react";
import AboutImage from "../../images/about.png";
import "./index.css";
import FooterButton from "../../button";
const AboutPage = () => {
  return (
    <section id="section-2">
      <div className="container">
        <div className="section">
          <div>
            <img src={AboutImage} alt="" />
          </div>
          <div className="text">
            <p>OUR TOP SERVICES</p>
            <h1>Our Best Services</h1>
            <p>
              Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
              cillum dolore egru lofrre dsu quality mollit anim laborumuis au
              dolor in voluptate velit cillu.
            </p>
            <p>
              Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              voluptate velit esscillumlore eu quife nrulla parihatur.
              Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
              dhjinulpadeserunt moll.
            </p>
            <FooterButton aboutButton={"about-btn"} text={"MORE ABOUT US"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
