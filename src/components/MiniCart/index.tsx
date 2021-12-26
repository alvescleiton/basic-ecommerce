import { useContext, useEffect, useState } from 'react'

import Link from 'next/link'

import { CartContext } from '@/Hooks/CartHooks'

import { CartContainer, NumberOfItems } from './styles'

const MiniCart = () => {
  const { products } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const qtd = products.reduce((acc, cur) => acc + cur.quantity, 0)

    setQuantity(qtd)
  }, [products])

  return (
    <CartContainer>
      <Link href="/cart">
        <a>
          <NumberOfItems>{quantity}</NumberOfItems>

          <img src="/assets/img/cart.png" alt="Cart" />
        </a>
      </Link>
    </CartContainer>
  )
}

export default MiniCart
