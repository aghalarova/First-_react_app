import React from "react";

const MainProducts = ({ users }) => {
  console.log(users);
  return (
    <>
      <section>
        <div className="container">
          <div className="section">
            <h1>Featured Robotics Products to Show</h1>
            <p>Who are in extremely love with eco friendly system.</p>
            <div className="cards">
              {users.map((element) => {
                return (
                  <div className="card">
                    <div className="img">
                      <img src={element.image} alt="" />
                    </div>
                    <div className="text">
                      <h3>{element.name}</h3>
                      <p>{element.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProducts;
