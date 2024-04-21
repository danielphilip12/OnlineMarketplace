import React from "react";
import "./ItemCard.css"

const ItemCard = ({ item }) => {
  return (
    <div className="ItemCard-container">
      <p className="ItemCard-detail">{item.name}</p>
      <p className="ItemCard-detail">${item.price}</p>
      <button className="ItemCard-button" disabled={!item.inStock}>
        {item.inStock ? "Buy Now!" : "Out of Stock"}
      </button>
    </div>
  );
};

export default ItemCard;
