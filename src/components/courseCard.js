import React from "react";

function CourseCard({ image, title, rating, price, oldPrice }) {
  return (
    <div className="container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>
        {price} <del>{oldPrice}</del>
      </p>
    </div>
  );
}

export default CourseCard;