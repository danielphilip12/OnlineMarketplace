import React from 'react'

const CheckoutItemCard = ({ item, quantity}) => {
  return (
    <div>{item.name}: {quantity}</div>
  )
}

export default CheckoutItemCard