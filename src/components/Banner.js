import React from "react";

function Banner() {
  return (
    <>
      <div className="fields">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
      </div>

      <div className="add">
        <img
          src="image2/Screenshot 2026-02-20 173128.png"
          alt="Promotional Banner"
          className="add_image"
        />

        <div className="discount">
          <h2>
            Udemy flash sale! 24 hours to save <br />
          </h2>
          <h4>
            Get the top Courses for just 499.Just one day to save but a lifetime to learn
          </h4>
        </div>
      </div>
    </>
  );
}

export default Banner;