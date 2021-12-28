import { useContext, useEffect, useState } from 'react'

import Link from 'next/link'

import { CartContext } from '@/Hooks/CartHooks'

import { CartContainer, NumberOfItems } from './styles'

const MiniCart = () => {
  const { products } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  const [isAnimatin, setIsAnimatin] = useState(false)

  useEffect(() => {
    const qtd = products.reduce((acc, cur) => acc + cur.quantity, 0)

    setIsAnimatin(true)

    setQuantity(qtd)

    setTimeout(() => {
      setIsAnimatin(false)
    }, 1000)
  }, [products])

  return (
    <CartContainer isAnimating={isAnimatin}>
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
