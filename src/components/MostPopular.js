import React from "react";
import CourseCard from "./courseCard.js"

function MostPopular() {
  return (
    <div className="most">
      <h1>Most Popular</h1>
      <p>Pick the best fit</p>

      <div className="room">
        <CourseCard image="image2/python-coding-mistakes.jpg" title="2026 Python Data Visualisation Masterclass" rating="4.9 ⭐⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/Cybersecurity_certiprof.webp" title="2026 Cybersecurity Masterclass" rating="4.8 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/What-is-a-Full-Stack-Developer-jpg.webp" title="2026 Full Stack Developer Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/Mastering_The_Future_With_A_Master_Degree_In_Cloud_Computing.avif" title="2026 Cloud Engineer Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/Blog-Featured-Images-for-Articles-02.jpg" title="2026 Data Analytics Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/prompt.webp" title="2026 Prompt Engineer Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/python-coding-mistakes.jpg" title="2026 Python Data Visualisation Masterclass" rating="4.9 ⭐⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
        <CourseCard image="image2/Mastering_The_Future_With_A_Master_Degree_In_Cloud_Computing.avif" title="2026 Cloud Engineer Masterclass" rating="4.9 ⭐⭐⭐⭐" price="₹999" oldPrice="₹1700" />
      </div>
    </div>
  );
}

export default MostPopular;