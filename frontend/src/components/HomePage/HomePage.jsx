import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";
import { Link, useOutletContext } from "react-router-dom";

const HomePage = () => {
  const [checkoutItems, addNewItem] = useOutletContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/items").then((res) => {
      setItems(res.data);
      // console.log(res.data);
    });
  }, []);
  return (
    <div className="HomePage-container">
      <h1 className="HomePage-banner">Welcome to TBD</h1>
      <div className="HomePage-itemPreview">
        {items.map((item) => (
          <ItemCard item={item} key={item.id} addNewItem={addNewItem}/>
        ))}
      </div>
      <Link to="/item/addItem">Add Item</Link>
    </div>
  );
};

export default HomePage;
