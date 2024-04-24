import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const item = await axios.get(`http://localhost:3000/items/${params.id}`);
  // console.log(item);
  return { item };
}

const ItemPage = () => {
  const { item } = useLoaderData();
  // console.log(item);
  return (
    <div>
      <p>{item.data.name}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ItemPage;
