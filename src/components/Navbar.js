import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar_1">
        <img src="image2/Udemy_Logo_1.png" alt="Udemy Logo" className="logo" />
      </div>

      <div className="navbar_2">
        <span className="Search_icon">🔎</span>
        <input type="text" placeholder="Search" className="Search_bar" />
      </div>

      <div className="navbar_3">
        <a href="#" className="role">Courses</a>

        <div className="mylearning">
          <a href="#" className="role">My Learning</a>
          <div className="notice">
            <p>You are not purchase any courses</p>
          </div>
        </div>

        <a href="#" className="role"><i className="fa-solid fa-cart-arrow-down"></i></a>
        <a href="#" className="role"><i className="fa-solid fa-bell"></i></a>
        <a href="#" className="role"><i className="fa-solid fa-circle-user"></i></a>
      </div>

      <div className="menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;