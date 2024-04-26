import React, { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ItemPage, { loader as itemLoader } from "./ItemPage/ItemPage";
import AddItem from "./AddItem/AddItem";

const Wrapper = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const handleAddItem = (newItem) => {
    setCheckoutItems((prev) => [...prev, newItem]);
  };
  return (
    <div>
      <p>Cart: {checkoutItems.length}</p>
      <Outlet context={[checkoutItems, handleAddItem]} />
    </div>
  );
};

export default Wrapper;
