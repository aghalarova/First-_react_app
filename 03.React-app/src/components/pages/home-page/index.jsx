import React from "react";
import "./index.css";
import LogoOne from "../../images/logo1.png";
const HomePage = () => {
  return (
    <section id="section">
      <div className="container">
        <div className="section">
          <p>OUR TOP SERVICES</p>
          <h1>Our Best Services</h1>
          <div className="cards">
            <div className="card">
              <img src={LogoOne} alt="" />
              <h2>Strategy Planning</h2>
              <p>
                There are many variations of passages of lorem Ipsum available
                but the new majority have suffered.
              </p>
            </div>
            <div className="card">
              <img src={LogoOne} alt="" />
              <h2>Insurance Service</h2>
              <p>
                There are many variations of passages of lorem Ipsum available
                but the new majority have suffered.
              </p>
            </div>
            <div className="card">
              <img src={LogoOne} alt="" />
              <h2>Audit & Evaluation</h2>
              <p>
                There are many variations of passages of lorem Ipsum available
                but the new majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
