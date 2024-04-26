import axios from "axios";
import React from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";

export async function loader({ params }) {
  const item = await axios.get(`http://localhost:3000/items/${params.id}`);
  // console.log(item);
  return { item };
}

const ItemPage = () => {
  const [checkoutItems, addNewItem] = useOutletContext();
 
  const { item } = useLoaderData();
  // console.log(item);
  const handleAddItem = () => {
    addNewItem(item.data);
  }
  return (
    <div>
      <p>{item.data.name}</p>
      <button onClick={handleAddItem}>Add Item</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ItemPage;
