import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import "./CheckoutView.css";
import { reduceItems } from "../helperFunctions";
import CheckoutItemCard from "../CheckoutItemCard/CheckoutItemCard";

const CheckoutView = () => {
  const [checkoutItems, addNewItem] = useOutletContext();

  const condensedItems = reduceItems(checkoutItems);
  // console.log(condensedItems);
  // console.log(Object.keys(condensedItems));

  return (
    <div>
      <p>CheckoutView</p>
      <p>Items: {checkoutItems.length}</p>
      <div className="CheckoutView-Items">
        {
          Object.keys(condensedItems).map((itemId) => (
            <CheckoutItemCard
              item={checkoutItems.find(item => item.id === itemId)}
              quantity={condensedItems[itemId]}
              key={itemId}
              addNewItem={addNewItem}
              isCheckout={true}
            />
          ))}
      </div>
    </div>
  );
};

export default CheckoutView;
