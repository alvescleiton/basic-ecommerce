import { useContext, useEffect, useState } from 'react'

import { CartContext } from '@/Hooks/CartHooks'

import { CartContainer, NumberOfItems } from './styles'

const Cart = () => {
  const { products } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const qtd = products.reduce((acc, cur) => acc + cur.quantity, 0)

    setQuantity(qtd)
  }, [products])

  return (
    <CartContainer>
      <NumberOfItems>{quantity}</NumberOfItems>

      <img src="/assets/img/cart.png" alt="Cart" />
    </CartContainer>
  )
}

export default Cart
