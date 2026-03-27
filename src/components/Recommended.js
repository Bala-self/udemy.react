import React from "react";
import CourseCard from "./courseCard";

function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended_title">Recommended for You</h1>
      <p>Pick the best fit</p>

      <div className="room">
        <CourseCard image="image2/python-coding-mistakes.jpg" title="2026 Python Data Visualisation Masterclass" rating="4.9 ⭐⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/Cybersecurity_certiprof.webp" title="2026 Cybersecurity Masterclass" rating="4.8 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/What-is-a-Full-Stack-Developer-jpg.webp" title="2026 Full Stack Developer Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/Mastering_The_Future_With_A_Master_Degree_In_Cloud_Computing.avif" title="2026 Cloud Engineer Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
      </div>

      <div className="cat">
        <h3>Topics Recommended for You</h3>
        <div className="catrole">
          <p>Website</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>MongoDB</p>
          <p>AWS</p>
          <p>Azure</p>
          <p>Docker</p>
          <p>GitHub</p>
          <p>React JS</p>
        </div>
      </div>
    </div>
  );
}

export default Recommended;