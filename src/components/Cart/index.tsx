import React from 'react'

import { CartContainer, NumberOfItems } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <NumberOfItems>0</NumberOfItems>

      <img src="/assets/img/cart.png" alt="Cart" />
    </CartContainer>
  )
}

export default Cart
