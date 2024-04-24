import React from "react";
import "./ItemCard.css"
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="ItemCard-container">
      <Link to={`/${item.id}`}><p className="ItemCard-detail">{item.name}</p></Link>
      <p className="ItemCard-detail">${item.price}</p>
      <button className="ItemCard-button" disabled={!item.inStock}>
        {item.inStock ? "Buy Now!" : "Out of Stock"}
      </button>
    </div>
  );
};

export default ItemCard;
