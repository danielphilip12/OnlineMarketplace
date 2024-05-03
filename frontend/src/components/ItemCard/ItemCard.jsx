import React from "react";
import PropTypes from "prop-types"
import "./ItemCard.css"
import { Link } from "react-router-dom";

const ItemCard = ({ item, addNewItem, isCheckout=false }) => {
  const handleAddItem = () => {
    addNewItem(item);
  }
  return (
    <div className="ItemCard-container">
      <Link to={`/${item.id}`}><p className="ItemCard-detail">{item.name}</p></Link>
      <p className="ItemCard-detail">${item.price}</p>
      {!isCheckout && <button className="ItemCard-button" disabled={!item.inStock} onClick={handleAddItem}>
        {item.inStock ? "Buy Now!" : "Out of Stock"}
      </button>}
    </div>
  );
};

export default ItemCard;
