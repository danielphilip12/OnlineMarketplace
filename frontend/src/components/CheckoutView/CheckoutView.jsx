import React from "react";
import { useOutletContext } from "react-router-dom";

const CheckoutView = () => {
    const [checkoutItems, addNewItem] = useOutletContext();
  return (
    <div>
      <p>CheckoutView</p>
      <p>Items: {checkoutItems.length}</p>
    </div>
  );
};

export default CheckoutView;
