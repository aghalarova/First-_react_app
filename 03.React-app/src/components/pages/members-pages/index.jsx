import React from "react";
import "./index.css";
import memberImg from "../../images/team2.png";
const MembersPage = () => {
  return (
    <section id="section-members">
      <div className="container">
        <div className="section">
          <div className="text">
            <p>OUR PROFESSIONAL MEMBERS</p>
            <h1>Our Team Members</h1>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <img src={memberImg} alt="" />
              </div>
              <div className="card-text">
                <h3>Ethan Welch</h3>
                <p>UX Designer</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={memberImg} alt="" />
              </div>
              <div className="card-text">
                <h3>Ethan Welch</h3>
                <p>UX Designer</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={memberImg} alt="" />
              </div>
              <div className="card-text">
                <h3>Ethan Welch</h3>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersPage;
