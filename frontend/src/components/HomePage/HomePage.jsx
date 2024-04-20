import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/items").then((res) => {
      setItems(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="HomePage-container">
      <h1 className="HomePage-banner">Welcome to TBD</h1>
      {items.map(item => item.name)}
    </div>
  );
};

export default HomePage;
