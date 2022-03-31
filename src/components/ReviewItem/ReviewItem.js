import React from "react";

const ReviewItem = ({ product }) => {
  const { name, price, quantity, shipping } = product;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default ReviewItem;
