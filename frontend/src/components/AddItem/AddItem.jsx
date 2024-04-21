import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.00);
  const [inStock, setInStock] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }
  const handleInStockChange = (e) => {
    setInStock(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/items", {
        id: uuidv4(),
        name,
        price,
        inStock
    });

    setName("");
    setPrice(0);
    setInStock(false);
    navigate("/")
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label htmlFor="price">Price: </label>
        <input type="number" value={price} onChange={handlePriceChange} />
        <label htmlFor="inStock">In Stock?: </label>
        <input type="checkbox" value={inStock} onChange={handleInStockChange} />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default AddItem;
